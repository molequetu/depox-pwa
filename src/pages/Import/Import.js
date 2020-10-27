import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Page from 'material-ui-shell/lib/containers/Page'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl'

const useStyles = makeStyles((theme) => ({
    paper: {
      width: 'auto',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(620 + theme.spacing(6))]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      marginTop: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
        3
      )}px`,
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: `100%`,
    },
  }))
  

const Import = () =>  {
    const classes = useStyles()
    const intl = useIntl()
    const [product, setProduct] = useState('')
    const [bin, setBin] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + product + " " + bin);
      }

      return (
        <Page pageTitle={intl.formatMessage({ id: 'import_products' })}>
        <Paper className={classes.paper} elevation={6}>
          <div className={classes.container}>
            <Typography component="h1" variant="h5">
              {intl.formatMessage({ id: 'import_products' })}
            </Typography>
            <form className={classes.form}   onSubmit={handleSubmit} noValidate>  
          <TextField
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="product"
              label={intl.formatMessage({ id: 'product' })}
              name="product"
              autoFocus
            />
            <TextField
              value={bin}
              onChange={(e) => setBin(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bin"
              label={intl.formatMessage({ id: 'bin' })}
              id="bin"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {intl.formatMessage({ id: 'import' })}
            </Button>
        </form>
        </div>
      </Paper>
    </Page>
      )
    }
  
export default Import