import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Post extends React.Component {
  render() {
    const { loading, post } = this.props
    if (loading) {
      return <p>Loading</p>
    }
    console.log(this.props)
    return (
      <div>
        <PostContent post={post}/>
        {
          post.comments.map(comment => <Comment comment={comment} />)
        }
        <CommentBox />
      </div>
    )
  }
}

const query = gql`
query post($postId: Int!) {
  post(id: $postId) {
    id
    title
    content
    user {
      id
      username
    }
    
    comments {
      id
      content
      user {
        id
        username
      }
    }
  }
}
`

export default graphql(query, {
  options: (props) => {
    const { match } = props
    const { params } = match
    const { id } = params
    console.log(id)
    return {
      variables: {
        postId: id
      }
    }
  },
  props: ({ data }) => {
    console.log(data)
    return {
      post: data.post,
      loading: data.loading
    }
  } 
})(Post)
