import React from 'react'
import styled from 'styled-components'

const DisplayPostWrapper = styled.div`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 15px;
  padding-bottom: 0px;
  background: #193366;
  position: relative;
  border-radius: 2px;
  border: solid 1px #8E8BA7;
  box-shadow: 1px 2px 8px #221F40;
  border-radius: 2px;

  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;

  h2.post-title {
    font-size: 1.714em;
    font-weight: normal;
    color: #FFCD05;
    line-height: 120%;
    padding: 27px 0px 9px 0px;
    word-wrap: break-word;
    margin: 0;
  }

  .post-body {
    color: #cccccc;
    /* padding-top: px; */
    font-size: 1.143em;
    line-height: 1.563em;
  }
`

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

const CommentBox = styled.div`
    background: #093A43;
    padding-bottom: 14px;
    border: solid 1px #8E8BA7;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    margin-bottom: 40px;

    .input-box {
      margin-bottom:10px;
      textarea {
        width: 100%;
        max-width: 100%;
        height: 230px;
        overflow: auto;
        line-height: 1.563em;
        background: #0E5C6A;
        border: solid 1px #4793a1;
        color: #ffffff;
        padding: 8px;
        box-sizing: border-box;
        font-size: 1.175em;

      }
    }

    a.submit-button {
      display: inline-block;
      vertical-align: middle;
      background: #33315d;
      border: #6c6a8d solid 1px;
      padding: 2px;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.25em;
      font-size: 14px;
      span {
        background: -webkit-gradient(linear, left top, left bottom, from(#639230), to(#446c2c));
        display: inline-block;
        box-shadow: 1px 1px 2px #332f57;
        border: solid 1px #22214d;
        color: #ffffff;
        em {
          display: inline-block;
          padding: 3px 8px 4px 8px;
          font-style: normal;
          font-weight: bold;
          text-shadow: 0px 1px 1px #3e3c7f;
          white-space: nowrap;
        }
      }
    }
`

export default class DisplayPost extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DisplayPostWrapper>
          <div>
            <h2 className="post-title">
            ผมอยากรู้ว่าการจับคู่ อาหารกับไวน์ ใช้อะไรเป็นตัวตัดสินบ้างครับ (ไวน์แดง)
            </h2>
          </div>
          <div className="post-body">
          พอดีผมได้โปรเจคมาเป็นการจับคู่ไวน์แดงกับอาหารต่างๆ ตอนนี้ก็กำลังหาข้อมูล  (วิชา data mining) เท่าที่สะสมข้อมูลได้มา ผมพยายามจะหา Attribute ที่มันเหมือน ๆ กัน ตอนนี้ที่เห็นเลย ก็คือ กรด กับ แทนนิน และ Alcohol by Volume 
          </div>
        </DisplayPostWrapper>
        <PostCommentWrapper>
          <span className="comment-number">ความคิดเห็นที่ 1</span>
          <div className="comment-body">
          ฟังจากคนฝรั่งเศสเขาบอกว่าหลักๆคือสีของเนื้อละครับ     ถ้าเนื้อแดงๆอย่างเนื้อวัวก็กินกับไวน์แดง    ถ้าเนื้อสีขาวอย่างเนื้อปลาก็กินกับไวน์ขาว
          </div>
        </PostCommentWrapper>
        <CommentBox>
          <div className="input-box">
            <textarea />
          </div>
          <a className="submit-button">
            <span><em>ส่งข้อความ</em></span>
          </a>
        </CommentBox>

      </React.Fragment>
    )
  }
}
