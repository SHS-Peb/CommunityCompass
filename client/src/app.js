import React from 'react';
import { Layout, Image, Typography } from "antd";
import Logo from "./pics/logo.png";
import Home from "./components/home/index";
import style from "./style"

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
 <Layout style={style.layout}>
    <Header style={style.header}>
        <Image style={style.image} width="20" preview="false" src={Logo} />
        &nbsp;
        <Title style={style.title} >Community Compass</Title>
    </Header>
    <Home>

    </Home>
    <Footer style={style.footer} >2023 Community Compass</Footer>
 </Layout>
    )
}

export default App;
