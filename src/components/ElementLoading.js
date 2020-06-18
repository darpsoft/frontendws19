import { IconButton, TableRow, TableCell } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const Component = React.memo(_ => {
  return(
    <TableRow>
      <TableCell component="th" scope="row">
        <Skeleton height={25} />
      </TableCell>
      <TableCell align="right"><Skeleton height={25} /></TableCell>
      <TableCell align="right"><Skeleton height={25} /></TableCell>
      <TableCell align="right"><Skeleton height={25} /></TableCell>
      <TableCell align="right">
        <IconButton><Skeleton variant="circle" width={20} height={20} /></IconButton>
      </TableCell>
    </TableRow>
  )
}, () => { return true })

export default Component