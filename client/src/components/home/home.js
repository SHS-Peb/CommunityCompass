import React from 'react';
import StoryList from "../storyList/index";
import StoryForm from "../storyForm/index";
import { Layout } from "antd";
import style from "./style"

const { Sider, Content } = Layout;

const Home = () => {
    return (
        <Layout>
            <Sider style={style.sider} width ={400}>
            <StoryForm/>
            </Sider>
            <Content style={style.content} >
                <StoryList/>
            </Content>
        </Layout>
    )
};

export default Home