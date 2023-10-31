import { Row } from 'antd'
import React from 'react'
import Story from '../story'

const storyList = () => {
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  )
}

export default storyList
