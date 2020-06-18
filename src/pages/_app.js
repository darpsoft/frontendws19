import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline';

import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import createStoreComponent from '../store'

const storeRedux = createStoreComponent()

import cookies from 'next-cookies'
import App from 'next/app'
import redirectTo from '../components/redirectTo'
import React from 'react'

class MyApp extends App {

  static async getInitialProps ({ ctx }) {
    const myCookies = cookies(ctx)

    if(ctx.pathname !== '/testFavorite' || ctx.pathname !== '/testHome') return;

    if(typeof myCookies.isAuth === 'undefined'){
      if(ctx.pathname !== '/login' && ctx.pathname !== '/register') redirectTo('/login', { res: ctx.res, status: 301 });
    }

    if(typeof myCookies.isAuth !== 'undefined'){ 
      if(ctx.pathname === '/login' || ctx.pathname === '/') redirectTo('/home', { res: ctx.res, status: 301 });
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Worldstats 19</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Provider store={storeRedux}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    )
  }
}

const wrapper = createWrapper(createStoreComponent)
export default wrapper.withRedux(MyApp)