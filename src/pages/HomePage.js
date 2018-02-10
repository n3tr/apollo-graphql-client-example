import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// import PostListItem from '../components/PostListItem'

class Home extends React.Component {
  render() {
    return (
      <div>
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

const postsQuery = gql`
  query posts {
    posts {
      id
      title
      content
      user {
        id
      }
    }
  }
`

const withData = graphql(postsQuery, {
  name: 'allPosts',
  props: ({ allPosts, ownProps }) => {
    console.log('allPosts', allPosts)
    console.log('ownProps', ownProps)
    return {
      ...ownProps,
      posts: allPosts.posts || [],
    }
  },
})

export default withData(Home)
