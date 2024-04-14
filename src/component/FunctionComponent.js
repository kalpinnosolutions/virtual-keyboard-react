import React from 'react';
import ChildFunComponent from './ChildFunComponent';

class FunctionComponent extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }

    render(){
        return <h1>Hello This is {this.state.color} color <ChildFunComponent color={this.state.color}></ChildFunComponent></h1>
            
    }
}

export default FunctionComponent;