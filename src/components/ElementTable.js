import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { formatCurrency } from '../functions'
import { IconHeart } from '../assets/svg'

const useStyles = makeStyles((theme) => ({
  margin: { }
}))

const Component = ({props}) => {
  const classes = useStyles()

  return(
    <TableRow key={props.Country}>
      <TableCell component="th" scope="row">
        {props.Country}
      </TableCell>
      <TableCell align="right">{formatCurrency(props.TotalConfirmed)} ({formatCurrency(props.NewConfirmed)}+)</TableCell>
      <TableCell align="right">{formatCurrency(props.TotalRecovered)} ({formatCurrency(props.NewRecovered)}+)</TableCell>
      <TableCell align="right">{formatCurrency(props.TotalDeaths)} ({formatCurrency(props.NewDeaths)}+)</TableCell>
      <TableCell align="right">
        <IconButton><IconHeart width={20} height={20} stroke="#000" fill="none" /></IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Component