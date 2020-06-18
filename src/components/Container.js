import Head from 'next/head'
import Navigation from './navigation'
import { CircularProgress } from '@material-ui/core'
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux'
import * as actions from '../store/actions'

const Component = ({children, headerTitle, stateAppReducer}) => {
  return(
    <React.Fragment>
      <Head>
        <title>Worldstats 19 | {headerTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Navigation />
      <Container maxWidth="lg">
        {children}
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return { stateAppReducer: state.stateAppReducer }
}

export default connect(mapStateToProps, actions)(Component)