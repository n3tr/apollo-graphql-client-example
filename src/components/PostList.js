import React from 'react'
import styled from 'styled-components'
import PostListItem from './PostListItem'

const ListBox = styled.div`
  border: 1px solid #6c73a6;
  min-height: 300px
`

export default class PostList extends React.Component {
  render() {
    return (
      <ListBox>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </ListBox>
    )
  }
}
