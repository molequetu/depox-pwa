import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import StockTimeline from './Timeline'
import config from "config/config"
import { openDB } from 'idb';

export default function () {
  const [movements, setMovements] = useState(null)
  const intl = useIntl()
  const endpoint = "Stocks"
  const dbPromise = createIndexedDB();

  const getStockMovements = async () => {
    fetch(`${config.apiURL + endpoint}`)
      .then(response => { console.log(response); return response.json()})
      .then(data => {
        setMovements(data);
        saveStockDataLocally(data);
      })
      .catch((error) => {
        console.error('Error while getting stock movements, will render local stored data:', error);
        getLocalStockData()
        .then(offlineData => {
          if (!offlineData.length) {
            return;
          } else {
            setMovements(offlineData);
          }
        });
      });
  }

  useEffect(() => {
    getStockMovements()
  }, [])

  function createIndexedDB() {
    if (!('indexedDB' in window)) {return null;}
    return openDB('depo', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('stockMovements')) {
          const stockMovementsStore =  db.createObjectStore('stockMovements',  {keyPath: 'id'});
        }
      },
    });
  }
  
  function saveStockDataLocally(stocks) {
    if (!('indexedDB' in window)) {return null;}
    return dbPromise.then(db => {
      const tx = db.transaction('stockMovements', 'readwrite');
      const store = tx.objectStore('stockMovements');
      return Promise.all(stocks.map(movement => store.put(movement)))
      .catch(() => {
        tx.abort();
        throw Error('Stock movements were not added to the store');
      });
    });
  }
  
  function getLocalStockData() {
    if (!('indexedDB' in window)) {return null;}
    return dbPromise.then(db => {
      const tx = db.transaction('stockMovements', 'readonly');
      const store = tx.objectStore('stockMovements');
      return store.getAll();
    });
  }

  return (
    <Page
      pageTitle={intl.formatMessage({ id: 'stockmovements', defaultMessage: 'Stock Movements' })}
    >
      <Scrollbar>
        <StockTimeline stocks = {movements} />
      </Scrollbar>
    </Page>
  )
}
