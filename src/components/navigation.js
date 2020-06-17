import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinkMaterial  from '@material-ui/core/Link'

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
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            WorldStats 19
          </Typography>
          <nav>
            <Link href="/login">
              <LinkMaterial variant="button" color="textPrimary" href="" className={classes.link}>MIS FAVORITOS</LinkMaterial>
            </Link>
          </nav>
          <Link href="/login">
            <Button color="primary" className={classes.link}>CERRAR SESIÓN</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}