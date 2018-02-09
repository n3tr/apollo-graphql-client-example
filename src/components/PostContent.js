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
  border: solid 1px #8e8ba7;
  box-shadow: 1px 2px 8px #221f40;
  border-radius: 2px;

  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;

  h2.post-title {
    font-size: 1.714em;
    font-weight: normal;
    color: #ffcd05;
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

class PostContent extends React.Component {
  render() {
    return (
      <DisplayPostWrapper>
        <div>
          <h2 className="post-title">
            ผมอยากรู้ว่าการจับคู่ อาหารกับไวน์ ใช้อะไรเป็นตัวตัดสินบ้างครับ
            (ไวน์แดง)
          </h2>
        </div>
        <div className="post-body">
          พอดีผมได้โปรเจคมาเป็นการจับคู่ไวน์แดงกับอาหารต่างๆ
          ตอนนี้ก็กำลังหาข้อมูล (วิชา data mining) เท่าที่สะสมข้อมูลได้มา
          ผมพยายามจะหา Attribute ที่มันเหมือน ๆ กัน ตอนนี้ที่เห็นเลย ก็คือ กรด
          กับ แทนนิน และ Alcohol by Volume
        </div>
      </DisplayPostWrapper>
    )
  }
}

export default PostContent
