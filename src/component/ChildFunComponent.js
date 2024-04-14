import React from 'react';

class ChildFunComponent extends React.Component
{   
    constructor(props){
        super(props);

        this.state = {
            color : "Yellow"
        }
    }

    onChange = () => {
        this.setState({color: 'Blue'})
    }

    render(){
        return <h2 onClick={this.onChange}>This is {this.state.color} color</h2>
    }
}

export default ChildFunComponent;