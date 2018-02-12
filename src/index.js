import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Apollo
import { ApolloProvider } from 'react-apollo'
import createApolloClient from './libs/createApolloClient'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './libs/configureStore'

const { store, persistor } = configureStore()
const client = createApolloClient(store)

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
