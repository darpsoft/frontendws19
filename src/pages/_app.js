import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux'
import createStoreComponent from '../store'

const storeRedux = createStoreComponent()

export default ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={storeRedux}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}