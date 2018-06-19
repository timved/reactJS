import './ModalWindowGreeting.css';
import React, {Component, Fragment} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class ModalWindowGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Окно приветствия</ModalHeader>
                    <ModalBody>
                        <div className="modalDialog">
                                <p>Приветствую вас на новом сайте</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

