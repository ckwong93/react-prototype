import React, { Component } from 'react';
import ListDetail from './listDetail';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            listings: [{
                description: 'This is a business in San Francisco',
                location: 'San Francisco',
                price: '$100.00',
                contact: '415-123-4567'
            }, {
                description: 'This is a business in Oakland',
                location: 'Oakland',
                price: '$200.00',
                contact: '510-123-4567'
            },{
                description: 'This is a business in San Jose',
                location: 'San Jose',
                price: '$300.00',
                contact: '510-999-9999'
            }]

        }
    }
    render(){
        return(
            <div>
                <ListDetail info={this.state}/>
            </div>

        )
    }
    
}





export default List;