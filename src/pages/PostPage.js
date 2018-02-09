import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

class Post extends React.Component {
  onCommentSubmit = (content) => {
    this.props.createComment(content)
  }
  render() {
    const { loading, post } = this.props
    if (loading) {
      return <p>Loading</p>
    }
    const token = localStorage.getItem('token')
    return (
      <div>
        <PostContent post={post}/>
        {
          post.comments.map(comment => <Comment comment={comment} key={comment.id} />)
        }
        {
          token ? <CommentBox onSubmit={this.onCommentSubmit}/> : null
        }
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

const mutation = gql`
mutation comment($data: CreateCommentInput) {
  createComment(data: $data) {
    id
    content
    user {
      id
      username
    }
  }
}
`


const queryEnhance = graphql(query, {
  options: (props) => {
    const { match } = props
    const { params } = match
    const { id } = params
    return {
      variables: {
        postId: id
      }
    }
  },
  props: ({ data }) => {
    return {
      post: data.post,
      loading: data.loading
    }
  }
})

const mutationEnhance = graphql(mutation, {
  props: ({ mutate, ownProps }) => {
    const { match } = ownProps
    const { params } = match
    const { id } = params
    return { 
      createComment: async (content) => {
        await mutate({
          variables: {
            data: {
              postId: id,
              content
            }
          },
          update: (proxy, { data: { createComment } }) => {
            // Read the data from our cache for this query.
            const postData = proxy.readQuery({ query, variables: { postId: id } })
            // // Add our comment from the mutation to the end.
            postData.post.comments.push(createComment)
            // // Write our data back to the cache.
            // console.log(postData)
            proxy.writeQuery({ query, variables: { postId: id }, data: postData });
          }
        })
      }
    }
  }
})

export default compose(mutationEnhance, queryEnhance)(Post)
