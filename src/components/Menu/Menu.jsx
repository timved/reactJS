import './Menu.css';
import React, {Component, Fragment} from 'react';
export default class Menu extends Component {
    constructor (props){
        super(props);
    }
    render() {
        const { items } = this.props;
        return (
            <div className="menu">
                <ul>
                    { items.map(item => <li><a href={ item.link }>{ item.title }</a></li>) }
                </ul>
            </div>
        );
    }
}