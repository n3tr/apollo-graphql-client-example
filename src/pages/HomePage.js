import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'
// import PostListItem from '../components/PostListItem'


class Home extends React.Component {
  render() {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}

export default Home
