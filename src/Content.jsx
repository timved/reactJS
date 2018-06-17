import React, {Component} from 'react';
// import './Content.css';
export default class Content extends Component {
    render() {
        const { content } = this.props;
        return (
            <div className="content">
                <p>{content}</p>
            </div>
        );
    }
}