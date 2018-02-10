import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const App = (state = {}, action) => {
  if (action.type === 'LOGIN') {
    return {
      token: action.token,
    }
  }

  if (action.type === 'LOGOUT') {
    return {}
  }

  return state
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, App)

const createAppStore = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default createAppStore
