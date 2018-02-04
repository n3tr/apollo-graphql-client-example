import React, { Component } from 'react';
import styled from 'styled-components'
import TopicList from './components/TopicList'

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

const Header = styled.div`
height: 40px;
margin-bottom: 40px
`

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container className="container">
          <TopicList />
        </Container>
      </div>
    );
  }
}

export default App;
