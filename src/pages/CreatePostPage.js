import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const CreatePostBoxWrapper = styled.div`
  padding: 40px 10px;
  background: #2d2a49;
  border: solid 1px #25223c;

  h2 {
    margin-left: 150px;
  }
  .input-container {
    margin-bottom: 16px;

    label {
      float: left;
      padding-top: 3px;
      width: 130px;
      text-align: right;
      color: #ffffff;
      margin-right: 20px;
    }
    input.text,
    textarea {
      width: 400px;
      background: #605d89;
      color: #ffffff;
      border-color: #24233a;
      padding: 3px;
      font-size: 1em;
      font-family: tahoma;
      color: #000000;
      border: solid 1px #24233a;
      -webkit-box-shadow: inset 1px 1px 2px #2c2a48;
      -moz-box-shadow: inset 1px 1px 2px #2c2a48;
      box-shadow: inset 1px 1px 2px #2c2a48;

      color: #fff;
    }

    textarea {
      height: 120px;
    }
    input.submit {
      margin-left: 150px;
    }
  }
`

class CreatePostPage extends React.Component {
  state = {
    title: '',
    content: '',
  }

  onTitleChange = e => {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }

  onContentChange = e => {
    e.preventDefault()
    this.setState({ content: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    const { title, content } = this.state
    this.props.createPost(title, content)
  }

  render() {
    return (
      <CreatePostBoxWrapper>
        <h2>Create Post</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-container">
            <label>หัวข้อ</label>
            <input
              className="text"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="input-container">
            <label>เนื้อหา</label>
            <textarea
              className="text"
              value={this.state.content}
              onChange={this.onContentChange}
            />
          </div>

          <div className="input-container">
            <input className="submit" type="submit" />
          </div>
        </form>
      </CreatePostBoxWrapper>
    )
  }
}

const createPostMutation = gql`
mutation createPost($data: CreatePostInput) {
  post: createPost(data: $data) {
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

const withMutation = graphql(createPostMutation, {
  props({ mutate, ownProps }) {
    return {
      ...ownProps,
      createPost: async (title, content) => {
        const result = await mutate({
          variables: { data: { title, content } },
          // refetchQueries: [ { query: postsQuery } ]

          update: (proxy, { data: { post } }) => {
            try {
              const data = proxy.readQuery({ query: postsQuery });
              data.posts.push(post)
              proxy.writeQuery({ query: postsQuery, data });
            } catch (e) {

            }
          },


        })
        const id = result.data.createPost.id
        // ownProps.history.replace(`/post/${id}`)
      }
    }
  }
})

export default withMutation(CreatePostPage)
