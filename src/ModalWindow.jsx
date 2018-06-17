import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalWindow.css';
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
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
            <div>
                <Button color="danger" onClick={this.toggle} className="modal-button">{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <form>
                            <p><label for="Email">Email</label>
                            <input type="email" name="email" id="Email" placeholder="enter login" /></p>
                            <p><label for="Password">Password</label>
                                <input type="password" name="password" id="Password" placeholder="enter pasword" /></p>
                            <Button color="primary" onClick={this.toggle} type="submit">Login</Button>{' '}
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
