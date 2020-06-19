import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ElementLoading from '../components/ElementLoading'

import { IconConfirmados, IconMuertos, IconCurados } from '../assets/svg'

import Container from '../components/Container'
import ElementTable from '../components/ElementTable'

import { getDateTodayName, formatCurrency } from '../functions'

import { connect } from 'react-redux'
import * as actions from '../store/actions'

const LoadingItem = React.memo(() => {
  return(
    <>
    { [1,2,3,4,5].map((e, i) => <ElementLoading key={i} />) }
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
    textAlign: 'center'
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
}))

const HomePage = ({ covidReducer, getStartCovid, favoritesReducer, updateFavorites }) => {
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
                <IconConfirmados width={50} height={50} color="#000" />
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
                <IconCurados width={50} height={50} color="#000" />
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
                <IconMuertos width={50} height={50} color="#000" />
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

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Pais</TableCell>
                <TableCell align="right">Confirmados (Hoy)</TableCell>
                <TableCell align="right">Recuperados (Hoy)</TableCell>
                <TableCell align="right">Muertos (Hoy)</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { covidReducer.Countries.length === 0 ? <LoadingItem /> : null }
              { covidReducer.Countries.map((element, index) => <ElementTable key={index} element={element} />) }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return { covidReducer: state.covidReducer, favoritesReducer: state.favoritesReducer }
}

export default connect(mapStateToProps, actions)(HomePage)