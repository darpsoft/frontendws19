import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import TextField from '../components/TextField'
import { CircularProgress, Paper, Avatar, Button, CssBaseline, Grid, Box, Typography, Container } from '@material-ui/core'
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }
})

const LoginForm = ({handleSubmit}) => {
  const classes = useStyles()
  const loginReducer = useSelector(state => state.loginReducer)

  const onSubmit = (payload, dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({type: 'VERIFY_LOGIN_START', payload, resolve, reject })
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
        <Avatar className={classes.avatar}>C19</Avatar>
        <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
          <Field component={TextField} error={loginReducer.loginError} helperText={ loginReducer.loginError ? "Correo o Contraseña incorrecta" : false } variant="outlined" margin="normal" required fullWidth label="Correo Electronico" name="email" type="email" autoComplete="email" autoFocus />
          <Field component={TextField} error={loginReducer.loginError} variant="outlined" margin="normal" required fullWidth label="Contraseña" name="password" type="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
            { loginReducer.loading ? <CircularProgress color="inherit" size={24} /> : 'Iniciar Sesión' }
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register">
                <LinkMaterial href="" variant="body2">Crear una cuenta nueva</LinkMaterial>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default reduxForm({ form: 'LoginForm'})(LoginForm)