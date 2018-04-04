import React, { Component } from 'react';
import ListDetail from './listDetail';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ListDetail info={this.state} />
            </div>

        )
    }

}

export default List;