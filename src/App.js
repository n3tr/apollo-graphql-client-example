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

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={createApolloClient()}>
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
      </ApolloProvider>
    )
  }
}

export default App
