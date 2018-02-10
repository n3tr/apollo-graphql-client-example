import React from 'react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import createApolloClient from './libs/createApolloClient';
import AuthContext from './components/AuthContext'
import AuthStore from './libs/AuthStore';

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

const authStore = new AuthStore()

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(authStore)
    this.state = { token: authStore.token }
  }
  
  componentDidMount() {
    this.unsubscribe = authStore.subscribe((token) => {
      this.setState({ token })
    }) 
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <ApolloProvider client={createApolloClient()}>
        <AuthContext.Provider value={this.state.token}>
        <Router>
          <div>
            <Header />
            <Container className="container">
              <Route exact path="/" component={HomePage} />
              <Route path="/post/:id" component={PostPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
            </Container>
          </div>
        </Router>
        </AuthContext.Provider>
      </ApolloProvider>
    )
  }
}

export default App
