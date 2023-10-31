import { Row } from 'antd'
import React from 'react'
import Story from '../story'
import { useSelector } from "react-redux";

const StoryList = () => {
  const stories = useSelector((state) => state.stories);
  console.log('stories', stories)
  return (
    <Row gutter={[48, 32]}>
      <Story />
      <Story />
    </Row>
  )
}

export default StoryList
