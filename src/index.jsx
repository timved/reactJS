import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
const app = document.getElementById('app');
// // import Layout from 'layout';

import Menu from './Menu.jsx';
import Content from "./Content";
// import Content from './Content.jsx';

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


// class App extends Component {
//     render () {
//         return (
//             <Layout />
//
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col >
                        <Menu items={menuItems} title="Menu" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Content content={contentItem} title="Menu" />
                    </Col>
                </Row>
                <Row>
                    <Col >Hello</Col>
                </Row>


            </Container>
        );
    }
}
ReactDom.render(<App />, app);