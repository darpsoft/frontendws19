import { CircularProgress, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(_ => {
  return {
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'center',
      alignItems: 'center'
    },
    center: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
})

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <CircularProgress />
        <br />
        <Typography component="h1" variant="h5">Cargando información</Typography>
      </div>
    </div>
  )
}

  export default Loading