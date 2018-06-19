import React, {Component, Fragment} from 'react';
export default class Content extends Component {
    constructor (props){
        super(props);
    }
    render() {
        const { content } = this.props;
        return (
            <Fragment>
                <p>{content}</p>
            </Fragment>
        );
    }
}