import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '../components/TextField'

import { reduxForm, Field } from 'redux-form'
import storeReducer from '../store'

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

const LoginForm = (props) => {
  const classes = useStyles()

  const handleSubmit = async (payload, dispatch) => {
    await dispatch({type: 'VERIFY_LOGIN_START', payload})
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>C19</Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <form onSubmit={props.handleSubmit(handleSubmit)} className={classes.form}>
          <Field component={TextField} variant="outlined" margin="normal" required fullWidth label="Email Address" name="email" type="email" autoComplete="email" autoFocus />
          <Field component={TextField} variant="outlined" margin="normal" required fullWidth label="Password" name="password" type="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">Don't have an account? Sign Up</Link>
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

export default reduxForm({ form: 'LoginForm' })(LoginForm)