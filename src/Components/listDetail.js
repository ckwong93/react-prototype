import React, { Component } from 'react';


class ListDetail extends Component {
    render(){
        return(
            <div>
                <h3>Listing Title</h3>
                <br/>
                {this.renderBooks()}
            </div>
        )
    }
    renderBooks(){
        return(
            this.props.info.listings.map(function(data){
                return (
                    <div key={data.location}>
                        <p>{data.description}</p>
                        <li>{data.location}</li>
                        <li>{data.price}</li>
                        <li>{data.contact}</li>
                        <br/>
                    </div>
                )
             })
        )
    }
}

export default ListDetail;