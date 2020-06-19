import { ListItem, ListItemText, Divider, IconButton } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const Component = React.memo(_ => {
  return(
    <>
      <ListItem style={{paddingTop: 0, paddingBottom: 0}}>
        <ListItemText style={{textAlign: "left", width: "35%", marginRight: 20}}>
          <Skeleton height={25} />
        </ListItemText>
        <ListItemText style={{textAlign: "right", verticalAlign: 'center', width: "20%", marginRight: 20}}>
          <Skeleton height={25} />
        </ListItemText>
        <ListItemText style={{textAlign: "right", width: "20%", marginRight: 20}}>
          <Skeleton height={25} />
        </ListItemText>
        <ListItemText style={{textAlign: "right", width: "20%", marginRight: 20}}>
          <Skeleton height={25} />
        </ListItemText>
        <ListItemText style={{textAlign: "right", width: "5%"}}>
          <IconButton><Skeleton variant="circle" width={20} height={20} /></IconButton>
        </ListItemText>
      </ListItem>
      <Divider light/>
    </>
  )
}, () => { return true })

export default Component