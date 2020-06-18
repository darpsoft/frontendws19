import Router from 'next/router'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import TextField from '../components/TextField'
import { CircularProgress } from '@material-ui/core'
import Link from 'next/link'
import LinkMaterial  from '@material-ui/core/Link'

import { useSelector } from "react-redux"
import { reduxForm, Field, SubmissionError } from 'redux-form'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Worldstats { new Date().getFullYear() }.
    </Typography>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }
})

const RegisterForm = ({handleSubmit}) => {
  const classes = useStyles()
  const registerReducer = useSelector(state => state.registerReducer)
  const [check, setCheck] = React.useState(false)

  const onSubmit = (payload, dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({type: 'REGISTER_START', payload, resolve, reject })
    }).catch((error) => {
      throw new SubmissionError(error)
    })
  }

  const handleSubmitForm = async (payload, dispatch) => {
     await onSubmit(payload, dispatch).then(_ => {
      Router.replace('/home')
     })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          C19
        </Avatar>
        <Typography component="h1" variant="h5">
          CREAR UNA NUEVA CUENRTA
        </Typography>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field component={TextField} autoComplete="fname" name="firstname" variant="outlined" required fullWidth label="Nombre Name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field component={TextField} variant="outlined" required fullWidth label="Apellido" name="lastname" autoComplete="lname" />
            </Grid>
            <Grid item xs={12}>
              <Field component={TextField} error={registerReducer.emailError} helperText={ registerReducer.emailError ? "El correo ya existe, intente con otro." : false } variant="outlined" required fullWidth label="Correo Electronico" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <Field component={TextField} variant="outlined" required fullWidth name="password" label="Contraseña" type="password" autoComplete="current-password" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel checked={check} onChange={e => setCheck(e.target.checked)} control={<Checkbox value="allowExtraEmails" color="primary" />} label="Acepto los terminos y condiciones" />
            </Grid>
          </Grid>
          <Button disabled={!check} type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
          { registerReducer.loading ? <CircularProgress color="inherit" size={24} /> : 'REGISTRARSE' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login">
                <LinkMaterial href="" variant="body2">Ya poseo una cuenta.</LinkMaterial>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}


export default reduxForm({ form: 'RegisterForm'})(RegisterForm)