import React, { Suspense } from 'react'
import _ from 'lodash'
import { HashRouter, Route, Switch } from 'react-router-dom'

import config from 'config'

import Header from 'views/common/Header'
import Footer from 'views/common/Footer'
import Loading from 'views/common/Loading'

import './App.scss'

// console.log(config)

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Header />

          <Switch>
            {_.map(config.router, (item, i) => {
              const props = _.omit(item, ['page', 'path', 'type'])
              const R = item.type || Route
              return (
                <R
                  path={item.path}
                  key={i}
                  exact={true}
                  component={item.page}
                  {...props}
                />
              )
            })}
          </Switch>

          <Footer />
        </Suspense>
      </HashRouter>
    </div>
  )
}

export default App
