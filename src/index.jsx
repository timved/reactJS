import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import Menu from 'components/Menu';
import Content from 'components/Content';
import ModalWindowLogin from 'components/ModalWindowLogin';
import ModalWindowGreeting from 'components/ModalWindowGreeting';

const app = document.getElementById('app');
const menuItems = [
    {
        link: 'https://www.yandex.ru/', title: 'yandex.ru'
    },
    {
        link: 'https://www.google.ru/', title: 'google.ru'
    },
    {
        link: 'https://www.mail.ru/', title: 'mail.ru'
    },
];
const contentItem = 'Lorem ipsum dolor sit amet, eum posse delenit ut, cum in esse congue eruditi. Epicuri volutpat referrentur est at.';

class App extends Component {
    render() {
        return (
            <Container>
                <ModalWindowGreeting />
                <Row  className="layout-top-menu">
                    <Col className="col-6">
                        <Menu items={menuItems} title="Menu" />
                    </Col>
                    <Col className="col-6">
                        <ModalWindowLogin buttonLabel = "Login" />
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