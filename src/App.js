import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
//import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const bgUrl = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    background-color: #242424;
    opacity: 0.8;
`

const MenuWrapper = styled.header`
    height: 90px;
    padding-top: 20px;
`

const MainWrapper = styled.main`
    height: 600px;
    padding-top: 130px;
    background: url(${bgUrl}) no-repeat;
    background-size: cover;
`

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderWrapper>
                    <Container>
                        <Header />
                    </Container>                    
                </HeaderWrapper>
                <MenuWrapper>
                    <Container>
                        <Menu />
                    </Container>                    
                </MenuWrapper>
                <MainWrapper>
                    <Container>
                        <Main />
                    </Container>                    
                </MainWrapper>
            </div>
        );
    }
}

export default App;
