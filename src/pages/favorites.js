import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '../components/Container'
import ElementTable from '../components/ElementTable'

import { connect } from 'react-redux'
import * as actions from '../store/actions'

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

const HomePage = ({ favoritesReducer, updateFavorites }) => {
  const classes = useStyles()

  React.useEffect(() => {
    loadStorage()
  }, [])

  const loadStorage = async () => {
    if(favoritesReducer.Countries === null || favoritesReducer.Countries.length === 0){
      const Favorites = JSON.parse(localStorage.getItem('FAVORITES'))
      await updateFavorites({Countries: Favorites === null ? [] : Favorites})
    }
  }

  return (
    <React.Fragment>
      <Container headerTitle="Favorites">
        <h1>PAISES FAVORITOS</h1>
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
              { favoritesReducer.Countries.map((element, index) => <ElementTable key={index} element={element} />) }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return { favoritesReducer: state.favoritesReducer }
}

export default connect(mapStateToProps, actions)(HomePage)