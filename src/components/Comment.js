import React from 'react'
import styled from 'styled-components'

const PostCommentWrapper = styled.div`
  margin-top: 0px;
  padding-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 0px;
  position: relative;
  background: #22224e;
  border-radius: 2px;
  border: solid 1px #8e8ba7;
  box-shadow: 1px 2px 8px #221f40;
  border-radius: 2px;

  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;

  .comment-number {
    color: #d3c69a;
    font-size: 13px;
    opacity: 0.5;
    filter: alpha(opacity =50);
    zoom: 1;
  }

  .comment-body {
    font-size: 1.143em;
    word-wrap: break-word;
    color: #c0c0c0;
    padding-top: 25px;
  }
`

const Comment = ({ comment }) => {
  return (
    <PostCommentWrapper>
      <span className="comment-number">
        ความคิดเห็นที่ {comment.id}
      </span>
      <div className="comment-body">
        { comment.content }
      </div>
    </PostCommentWrapper>
  )
}

export default Comment
