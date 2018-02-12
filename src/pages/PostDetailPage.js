import React from 'react'
import PostContent from '../components/PostContent'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

class Post extends React.Component {
  state = {
    comment: '',
  }

  onCommentChange = value => {
    this.setState({ comment: value })
  }

  onSubmitComment = async value => {
    console.log(this.state)
    const { comment } = this.state
    await this.props.createComment(comment)
    this.setState({ comment: '' })
  }

  render() {
    if(!this.props.post && this.props.loading) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <PostContent post={this.props.post} />
        {
          this.props.post.comments.map(
            comment => <Comment key={comment.id} comment={comment} />
          )
        }

        <CommentBox
          value={this.state.comment}
          onChange={this.onCommentChange}
          onSubmit={this.onSubmitComment}
        />
      </div>
    )
  }
}


const postQuery = gql`
query post($postId: ID!) {
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

const createCommentMutation = gql`
mutation createComment($commentData: CreateCommentInput) {
  comment: createComment(data: $commentData) {
    id
    content
    user {
      id
      username
    }
  }
}
`

const withQuery = graphql(postQuery, {
  options: (props) => {
    const { match } = props
    const { params } = match
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        postId: params.id
      }
    }
  },
  props: ({ postData, ownProps }) => {
    console.log(postData)
    return {
      ...ownProps,
      post: postData.post,
      loading: postData.loading
    }
  },
  name: "postData"
})

const withMutation = graphql(createCommentMutation, {
  name: 'mutateComment',
  props: ({ mutateComment, ownProps }) => {
    return {
      ...ownProps,
      createComment: async (content) => {
        const { match: { params } } = ownProps
        const postId = params.id
        await mutateComment({ 
          variables: { 
            commentData: { postId, content } 
          },
          refetchQueries: [{ query: postQuery, variables: { postId } }]
        })
      }
    }
  }
})

export default compose(withMutation, withQuery)(Post)
