import { ListItem, ListItemText, Typography, Divider, IconButton } from '@material-ui/core'
import { formatCurrency } from '../functions'
import { IconHeart } from '../assets/svg'

import { connect } from 'react-redux'
import * as actions from '../store/actions'

const Component = React.memo(({element, favoritesReducer, addFavorites, style}) => {
  const { Countries: arrFavorites } = favoritesReducer
  const favoriteState = arrFavorites.filter(e => e.CountryCode === element.CountryCode).length
  
  return(
    <>
      <div style={style}>
        <ListItem style={{paddingTop: 0, paddingBottom: 0}}>
          <ListItemText style={{textAlign: "left", width: "35%"}}>
            <Typography noWrap variant="body2" display="block">{element.Country}</Typography>
          </ListItemText>
          <ListItemText style={{textAlign: "right", width: "20%"}}>
            <Typography noWrap variant="body2" display="block">{`${formatCurrency(element.TotalConfirmed)} (${formatCurrency(element.NewConfirmed)}+)`}</Typography>
          </ListItemText>
          <ListItemText style={{textAlign: "right", width: "20%"}}>
            <Typography noWrap variant="body2" display="block">{`${formatCurrency(element.TotalRecovered)} (${formatCurrency(element.NewRecovered)}+)`}</Typography>
          </ListItemText>
          <ListItemText style={{textAlign: "right", width: "20%"}}>
            <Typography noWrap variant="body2" display="block">{`${formatCurrency(element.TotalDeaths)} (${formatCurrency(element.NewDeaths)}+)`}</Typography>
          </ListItemText>
          <ListItemText style={{textAlign: "right", width: "5%"}}>
            <IconButton onClick={() => addFavorites(element)}><IconHeart width={20} height={20} stroke={favoriteState === 0 ? '#000' : '#cc003a'} fill={favoriteState === 0 ? 'none' : '#cc003a'} /></IconButton>
          </ListItemText>
        </ListItem>
        <Divider light/>
      </div>
    </>
  )
}, (p, n) => { 
  const oldDate = p.favoritesReducer.Countries.filter(e => e.CountryCode === p.element.CountryCode).length
  const newDate = n.favoritesReducer.Countries.filter(e => e.CountryCode === n.element.CountryCode).length
  return oldDate === newDate && p.element.CountryCode === n.element.CountryCode
})

const mapStateToProps = state => {
  return { favoritesReducer: state.favoritesReducer }
}

export default connect(mapStateToProps, actions)(Component)