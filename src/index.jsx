import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Menu from './Menu.jsx';
import Content from "./Content.jsx";
import ModalWindow from "./ModalWindow.jsx";

const app = document.getElementById('app');
const menuItems = [
    {
        link: 'https://www.yandex.ru/', title: 'yandex'
    },
    {
        link: 'https://www.yandex.ru/', title: 'yandex2'
    },
    {
        link: 'https://www.yandex.ru/', title: 'yandex3'
    },
];
const contentItem = 'Lorem ipsum dolor sit amet, eum posse delenit ut, cum in esse congue eruditi. Epicuri volutpat referrentur est at.';

class App extends Component {
    render() {
        return (
            <Container>
                <Row  className="layout-top-menu">
                    <Col className="col-6">
                        <Menu items={menuItems} title="Menu" />
                    </Col>
                    <Col className="col-6">
                        <ModalWindow buttonLabel = "Login" />
                    </Col>
                </Row>
                <Row className="layout-content">
                    <Col>
                        <Content content={contentItem} title="Content" />
                    </Col>
                </Row>
                <Row className="layout-footer">
                    <Col>Footer</Col>
                </Row>
            </Container>
        );
    }
}
ReactDom.render(<App />, app);