import React, { Component } from 'react';
//import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;

    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`

const Text = styled.div`
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    padding-top: 54px;
`

const Button = styled.button`
    width: 245px;
    height: 65px;
    margin-top: 35px;
    background-color: #ffa14b;
    border-radius: 30px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <Text>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </Text>
                    <Button>
                        Отправить заявку
                    </Button>                   
                </Col>
                <Col lg={6} lgOffset={1}>
                    <Slider />
                </Col>
            </Row>
        );
    }
}

export default Main