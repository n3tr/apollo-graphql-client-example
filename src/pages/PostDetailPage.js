import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'
import { connect } from 'react-redux'

class Post extends React.Component {
  state = {
    comment: '',
  }

  onCommentChange = value => {
    this.setState({ comment: value })
  }

  onSubmitComment = value => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <PostContent />
        <Comment />
        <Comment />
        {this.props.isLoggedIn ? (
          <CommentBox
            value={this.state.comment}
            onChange={this.onCommentChange}
            onSubmit={this.onSubmitComment}
          />
        ) : null}
      </div>
    )
  }
}

export default connect((state, ownProps) => {
  return {
    ...ownProps,
    isLoggedIn: !!state.token,
  }
})(Post)
