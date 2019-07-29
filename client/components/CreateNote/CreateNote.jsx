import React, { Component } from 'react';
import './styles.scss';

export default class CreateNote extends Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    
    render() {
        return (
            <div className="create_note">
                <input type="text"/>
            </div>
        );
    }
}
