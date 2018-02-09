import React from 'react'
import styled from 'styled-components'

const PostCommentWrapper = styled.div`
  margin-top: 0px;
  padding-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 0px;
  position: relative;
  background: #22224E;
  border-radius: 2px;
  border: solid 1px #8E8BA7;
  box-shadow: 1px 2px 8px #221F40;
  border-radius: 2px;

  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;

  .comment-number {
    color: #D3C69A;
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

const Comment = () => {
  return (
    <PostCommentWrapper>
      <span className="comment-number">ความคิดเห็นที่ 1</span>
      <div className="comment-body">
        ฟังจากคนฝรั่งเศสเขาบอกว่าหลักๆคือสีของเนื้อละครับ
        ถ้าเนื้อแดงๆอย่างเนื้อวัวก็กินกับไวน์แดง
        ถ้าเนื้อสีขาวอย่างเนื้อปลาก็กินกับไวน์ขาว
      </div>
    </PostCommentWrapper>
  )
}


export default Comment
