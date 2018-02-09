import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


const LoginBoxWrapepr = styled.div`
  padding: 40px 10px;
  background: #2D2A49;
  border: solid 1px #25223C;

  h2 {
    margin-left: 150px;
  }
  .input-container {
    
    margin-bottom: 16px;
    
    label {
      float: left;
      padding-top: 3px;
      width: 130px;
      text-align: right;
      color: #ffffff;
      margin-right: 20px;
    }
    input.text {
      width: 250px;
      background: #605d89;
      color: #ffffff;
      border-color: #24233a;
      padding: 3px;
      font-size: 1em;
      font-family: tahoma;
      color: #000000;
      border: solid 1px #24233a;
      -webkit-box-shadow: inset 1px 1px 2px #2c2a48;
      -moz-box-shadow: inset 1px 1px 2px #2c2a48;
      box-shadow: inset 1px 1px 2px #2c2a48;

      color: #fff;
    }
    input.submit {
      margin-left: 150px

    }
  }
`

class LoginPage extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onUsernameChange = (e) => {
    e.preventDefault()
    this.setState({ username: e.target.value })
  }

  onPasswordChange = (e) => {
    e.preventDefault()
    this.setState({ password: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render() {
    return(
      <LoginBoxWrapepr>
        <h2>เข้าสู่ระบบ</h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-container">
            <label>อีเมล์</label>
            <input className="text" name="username" type="text" value={this.state.username} onChange={this.onUsernameChange} />
          </div>
          <div className="input-container">
            <label>รหัสผ่าน</label>
            <input className="text" name="password" type="password" value={this.state.password} onChange={this.onPasswordChange} />
          </div>

          <div className="input-container">
            <input className="submit" type="submit" />
          </div>
        </form>
      </LoginBoxWrapepr>
    )
  }
}

const mutation = gql`
mutation login($username: String, $password: String) {
  login(username: $username, password: $password)
}
`

export default graphql(mutation, {
  props: ({ mutate, ownProps }) => {
    const { history } = ownProps
    return {
      onSubmit: async (username, password) => {
        const result = await mutate({ variables: { username, password }})
        if (result.data.login){
          localStorage.setItem('token', result.data.login)
          history.replace('/')
        }
      }
    }
  }
})(LoginPage)
