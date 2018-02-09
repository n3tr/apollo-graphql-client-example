import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CommentBoxWrapper = styled.div`
  background: #093a43;
  padding-bottom: 14px;
  border: solid 1px #8e8ba7;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  margin-bottom: 40px;

  .input-box {
    margin-bottom: 10px;
    textarea {
      width: 100%;
      max-width: 100%;
      height: 230px;
      overflow: auto;
      line-height: 1.563em;
      background: #0e5c6a;
      border: solid 1px #4793a1;
      color: #ffffff;
      padding: 8px;
      box-sizing: border-box;
      font-size: 1.175em;
    }
  }

  a.submit-button {
    display: inline-block;
    vertical-align: middle;
    background: #33315d;
    border: #6c6a8d solid 1px;
    padding: 2px;
    text-decoration: none;
    cursor: pointer;
    line-height: 1.25em;
    font-size: 14px;
    span {
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#639230),
        to(#446c2c)
      );
      display: inline-block;
      box-shadow: 1px 1px 2px #332f57;
      border: solid 1px #22214d;
      color: #ffffff;
      em {
        display: inline-block;
        padding: 3px 8px 4px 8px;
        font-style: normal;
        font-weight: bold;
        text-shadow: 0px 1px 1px #3e3c7f;
        white-space: nowrap;
      }
    }
  }
`

class CommentBox extends React.Component {
  static propTypes = {
    
  }
  state = { value: '' }
  onChange = (e) => {
    this.setState({ value: e.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.props.onSubmit || typeof this.props.onSubmit !== 'function') {
      return
    }

    if (this.state.value.length === 0) {
      return
    }

    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <CommentBoxWrapper>
        <div className="input-box">
          <textarea value={this.state.value} onChange={this.onChange}/>
        </div>
        <a className="submit-button">
          <span>
            <em>ส่งข้อความ</em>
          </span>
        </a>
      </CommentBoxWrapper>
    )
  }
}

CommentBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CommentBox
