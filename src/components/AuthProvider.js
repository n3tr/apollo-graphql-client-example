import React from 'react'

import createReactContext from 'create-react-context'

const AuthContext = createReactContext(null)

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { token: this.authStore.token }
    this.authStore = props.authStore
  }

  componentDidMount() {
    this.unsubscribe = this.authStore.subscribe((token) => {
      this.setState({ token })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.token}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
