import React from 'react'
import styled from 'styled-components'
import TopicListItem from './TopicListItem'

const ListBox = styled.div`
  border: 1px solid #6c73a6;
  min-height: 300px
`

export default class TopicList extends React.Component {
  render() {
    return (
      <ListBox>
        <TopicListItem />
        <TopicListItem />
        <TopicListItem />
        <TopicListItem />
      </ListBox>
    )
  }
}
