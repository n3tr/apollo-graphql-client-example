import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

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
        <CommentBox
          value={this.state.comment}
          onChange={this.onCommentChange}
          onSubmit={this.onSubmitComment}
        />
      </div>
    )
  }
}

export default Post
