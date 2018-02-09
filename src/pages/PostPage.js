import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

class Post extends React.Component {
  render() {
    return (
      <div>
        <PostContent />
        <Comment />
        <Comment />
        <CommentBox />
      </div>
    )
  }
}

export default Post
