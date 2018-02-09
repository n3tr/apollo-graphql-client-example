class AuthStore {
  constructor() {
    this._listeners = []
    this.token = localStorage.getItem('token') || null
  }

  subscribe = (fn) => {
    this._listeners.push(fn)
    return () => {
      this._listeners.filter(f => f !== fn);
    }
  }
  
  setToken = (token) => {
    localStorage.setItem('token', token)
    this._listeners.forEach(fn => fn(token))
  }

  clearToken = (token) => {
    localStorage.removeItem('token')
    this._listeners.forEach(fn => fn())
  }
}

export default AuthStore
