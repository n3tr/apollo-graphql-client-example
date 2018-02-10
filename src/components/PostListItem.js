import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopicBox = styled.div`
  background: none repeat scroll 0 0 #2d2a49;
  border-bottom: 1px solid #363358;
  font-size: 1.143em;
  padding: 5px 10px;
  position: relative;
  min-height: 80px;

  &:last-child {
    border-bottom: none;
  }

  a {
    color: #c2c2c2;
    text-decoration: none;
  }

  .post-title {
    background: none repeat scroll 0 0 #2d2a49;
    line-height: 22px;
    position: relative;
    word-wrap: break-word;
    z-index: 20;
    margin-bottom: 4px;
    max-height: 42px;
    min-height: 18px;
    overflow: hidden;
  }

  .post-desc {
    color: #7e79ad;
    font-size: 13px;
    line-height: 15px;
    max-height: 45px;
    overflow: hidden;
  }

  .post-by {
    color: #7e79ad;
    font-size: 0.813em;
    line-height: 24px;
    position: relative;
    top: 0px;
  }
`

class PostListItem extends React.Component {
  render() {
    return (
      <TopicBox>
        <Link to="/post/1">
          <div className="post-title">
            [CR]ลุยเที่ยว Macao :
            เมืองที่ผสมผสานไปด้วยวัฒนธรรมตะวันตกและตะวันออกอย่างลงตัว
          </div>
          <div className="post-desc">
            ถ้าพูดถึง’มาเก๊า’ใครหลายๆคนอาจจะคิดถึงคาสิโนแต่จริงๆแล้วมาเก๊ามีสิ่งที่น่าสนใจหลายอย่างเลยนะ
            และยังเป็นเมืองที่ผสมผสานไปด้วยวัฒนธรรมตะวันตกและตะวันออกอย่างลงตัวและเป็นที่ท่องเที่ยวที่ไม่ไกลจากบ้านเรามากนัก
          </div>
        </Link>
        <div className="post-by">
          <span>หมายเลขสมาชิก 12345</span>
        </div>
      </TopicBox>
    )
  }
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default PostListItem
