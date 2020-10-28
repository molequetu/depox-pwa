import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import 'github-markdown-css'
import StockTimeline from './Timeline'

export default function () {
  const [movements, setMovements] = useState(null)
  const intl = useIntl()

  const loadData = async () => {
    fetch('http://localhost:57678/api/Stocks')
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
