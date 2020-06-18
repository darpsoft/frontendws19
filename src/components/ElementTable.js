import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import { formatCurrency } from '../functions'
import { IconHeart } from '../assets/svg'

import { connect } from 'react-redux'
import * as actions from '../store/actions'

const Component = React.memo(({element, favoritesReducer, addFavorites}) => {
  const { Countries: arrFavorites } = favoritesReducer
  const favoriteState = arrFavorites.filter(e => e.CountryCode === element.CountryCode).length

  return(
    <TableRow key={element.CountryCode}>
      <TableCell component="th" scope="row">
        {element.Country}
      </TableCell>
      <TableCell align="right">{formatCurrency(element.TotalConfirmed)} ({formatCurrency(element.NewConfirmed)}+)</TableCell>
      <TableCell align="right">{formatCurrency(element.TotalRecovered)} ({formatCurrency(element.NewRecovered)}+)</TableCell>
      <TableCell align="right">{formatCurrency(element.TotalDeaths)} ({formatCurrency(element.NewDeaths)}+)</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => addFavorites(element)}><IconHeart width={20} height={20} stroke={favoriteState === 0 ? '#000' : '#cc003a'} fill={favoriteState === 0 ? 'none' : '#cc003a'} /></IconButton>
      </TableCell>
    </TableRow>
  )
}, (p, n) => { 
  const oldDate = p.favoritesReducer.Countries.filter(e => e.CountryCode === p.element.CountryCode).length
  const newDate = n.favoritesReducer.Countries.filter(e => e.CountryCode === n.element.CountryCode).length
  return oldDate === newDate
})

const mapStateToProps = state => {
  return { favoritesReducer: state.favoritesReducer }
}

export default connect(mapStateToProps, actions)(Component)