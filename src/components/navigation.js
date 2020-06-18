import Link from 'next/link'
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinkMaterial  from '@material-ui/core/Link'

import { removeCookies } from '../cookies'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  const cerrarSesion = () => {
    localStorage.removeItem('USER_DATA')
    removeCookies('isAuth')
    Router.replace('/login')
  }

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link href="/home">
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <LinkMaterial color="primary" underline="none" href="">WorldStats 19</LinkMaterial>
            </Typography>
          </Link>
          <nav style={{flexGrow: 1}}>
            <Link href="/home">
              <LinkMaterial variant="button" color="textPrimary" href="" className={classes.link}>INICIO</LinkMaterial>
            </Link>
            <Link href="/favorites">
              <LinkMaterial variant="button" color="textPrimary" href="" className={classes.link}>MIS FAVORITOS</LinkMaterial>
            </Link>
          </nav>
          <Button onClick={cerrarSesion} color="primary" className={classes.link}>CERRAR SESIÓN</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}