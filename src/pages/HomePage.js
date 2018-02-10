import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'

import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

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

const subscription = gql`
  subscription postCreated {
    postCreated {
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
  componentWillMount() {
    this.props.subscribeNewPosts()
  }

  render() {
    if (this.props.loading === true) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}

const withQuery = graphql(query, {
  props: ({ postsData, ownProps }) => {
    console.log(postsData)
    return {
      ...ownProps,
      ...postsData,
      subscribeNewPosts: () => {
        postsData.subscribeToMore({
          document: subscription,
          updateQuery: (prev, { subscriptionData }) => {
            
            if (!subscriptionData.data) {
              return prev
            }

            const newPost = subscriptionData.data.postCreated

            console.log(prev)

            return Object.assign({}, prev, {
              posts: [...prev.posts, newPost]
            })
          }
        })
      }
    }
  },
  name: 'postsData'
})

export default withQuery(Home)
