import React, { Component } from 'react';

class Click extends Component {
    constructor(props){
        super(props),
        this.state = {
            count: 0
        }
    }
    handleClick(){
        this.setState({
            count: this.state.count+= 1
        })

    }
    render(){
        return(
            <div>
            <button className="btn btn-danger" onClick={() => this.handleClick()}> click me</button>
            <h1>{this.state.count}</h1>
            </div>
        )
    }
}





export default Click;