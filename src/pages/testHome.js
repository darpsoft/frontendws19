import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ElementLoadingTest from '../components/ElementLoadingTest'

import { ListItem, ListItemText, Divider } from '@material-ui/core'

import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import Container from '../components/Container'
import ElementTableTest from '../components/ElementTableTest'

import { getDateTodayName, formatCurrency } from '../functions'

import { connect } from 'react-redux'
import * as actions from '../store/actions'


const LoadingItem = React.memo(() => {
  return(
    <>
    { [1,2,3,4,5,6,7,8,9,10].map((e, i) => <ElementLoadingTest key={i} />) }
    </>
  )
}, () => { return true })

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  tableContainer: {
    marginBottom: theme.spacing(5)
  },
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    zIndex: 10,
    marginBottom: -10

  },
  gridConfirmed: {
    color: theme.palette.text.secondary,
  },
  gridRecovered: {
    color: '#2196f3'
  },
  gridDeaths: {
    color: '#ff5722'
  },
  rootDiv: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'hidden'
  },
  rootDivResponsive: {
    width: '100%',
    height: '40vh',
    minWidth: 800,
    minHeight: '50vh',
    backgroundColor: theme.palette.background.paper,
  }
}))


const HomePage = React.memo(({ covidReducer, getStartCovid, favoritesReducer, updateFavorites }) => {
  const classes = useStyles()

  React.useEffect(() => {
    loadStorage()
  }, [])

  const loadStorage = async () => {
    const Favorites = JSON.parse(localStorage.getItem('FAVORITES'))
    await updateFavorites({Countries: Favorites === null ? [] : Favorites})
    getStartCovid()
  }

  return (
    <React.Fragment>
      <Container headerTitle="Home">
        <h1>Estadisticas del Covid 19 - {getDateTodayName()}</h1>

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                  CONFIRMADOS
                </Typography>
                <Typography variant="body2" component="p">
                  {formatCurrency(covidReducer.Global.TotalConfirmed)}
                  <br />
                  Hoy: ({formatCurrency(covidReducer.Global.NewConfirmed)}+)
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                  RECUPERADOS
                </Typography>
                <Typography variant="body2" component="p">
                  {formatCurrency(covidReducer.Global.TotalRecovered)}
                  <br />
                  Hoy: ({formatCurrency(covidReducer.Global.NewRecovered)}+)
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                  MUERTOS
                </Typography>
                <Typography variant="body2" component="p">
                  {formatCurrency(covidReducer.Global.TotalDeaths)}
                  <br />
                  Hoy: ({formatCurrency(covidReducer.Global.NewDeaths)}+)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
        
        <div className={classes.rootDiv}>
          <div className={classes.rootDivResponsive}>
          <ListItem style={{height: 35}}>
            <ListItemText style={{textAlign: "left", width: "35%"}}>
              <Typography color="inherit" noWrap><b>{`Pais`}</b></Typography>
            </ListItemText>
            <ListItemText style={{textAlign: "right", width: "20%"}}>
              <Typography color="inherit" noWrap><b>{`Confirmados (Hoy)`}</b></Typography>
            </ListItemText>
            <ListItemText style={{textAlign: "right", width: "20%"}}>
              <Typography color="inherit" noWrap><b>{`Recuperados (Hoy)`}</b></Typography>
            </ListItemText>
            <ListItemText style={{textAlign: "right", width: "20%"}}>
              <Typography color="inherit" noWrap><b>{`Muertos (Hoy)`}</b></Typography>
            </ListItemText>
            <ListItemText style={{textAlign: "right", width: "5%"}} />
            <div style={{width: 20}}></div>
          </ListItem>
          <Divider />
          { covidReducer.Countries.length === 0 ? <LoadingItem /> : null }
          <AutoSizer>
            {
              ({ height, width }) => {
                return(
                  <List height={height - 36} width={width} itemSize={52} itemCount={covidReducer.Countries.length}>
                    { ({ index, style }) => <ElementTableTest key={index} element={covidReducer.Countries[index]} style={style} /> }
                  </List>
                )
              }
            }
          </AutoSizer>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}, (p, n) => { return p.covidReducer.Date === n.covidReducer.Date })

const mapStateToProps = state => {
  return { covidReducer: state.covidReducer, favoritesReducer: state.favoritesReducer }
}

export default connect(mapStateToProps, actions)(HomePage)