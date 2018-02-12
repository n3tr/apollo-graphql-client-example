import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'
// import PostListItem from '../components/PostListItem'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Home extends React.Component {
  componentWillMount() {
    this.props.subscribeToNewPost()
  }

  render() {
    return (
      <div>
        <PostList posts={this.props.posts}/>
      </div>
    )
  }
}

const postsQuery = gql`
query allPosts {
  posts {
    id
    title
    content
    
    user {
      id
      username
    }
  }
}
`

const postSubscription = gql`
subscription newPost {
  post: postCreated {
    id
    title
    content
    
    user {
      id
      username
    }
  }
}
`


const withQuery = graphql(postsQuery, {
  props: ({ allPosts, ownProps }) => {
    return {
      ...ownProps,
      posts: allPosts.posts || [],
      loading: allPosts.loading,
      subscribeToNewPost: () => {
        return allPosts.subscribeToMore({
          document: postSubscription,
          updateQuery: (prev, { subscriptionData }) => {
            const { data: { post } } = subscriptionData
            
            return {
              ...prev,
              posts: [...prev.posts, post]
            }
          }
        })
      }
    }
  },
  name: "allPosts"
})

export default withQuery(Home)
