import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import StockTimeline from './Timeline'
import config from "config/config"

export default function () {
  const [movements, setMovements] = useState(null)
  const intl = useIntl()
  const endpoint = "Stocks"

  const loadData = async () => {
    fetch(`${config.apiURL + endpoint}`)
      .then(response => { console.log(response); return response.json()})
      .then(data => {
        setMovements(data);
      })
      .catch((error) => {
        console.error('Error while importing:', error);
      });
  }

  useEffect(() => {
    loadData()
  }, [])

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
