import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'




const query = gql`
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

class Home extends React.Component {
  render() {
    if (this.props.loading === true) {
      return <p>Loading...</p>
    }
    console.log(this.props.posts)
    return (
      <div>
        <PostList posts={this.props.posts}/>
      </div>
    )
  }
}

export default graphql(query, {
  props: ({ data: { loading, posts }, ownProps }) => {
    return {
      loading,
      posts
    }
  }
})(Home)
