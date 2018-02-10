import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './libs/configureStore'
import createApolloClient from './libs/createApolloClient'

const { store, persistor } = configureStore()
const client = createApolloClient()

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
