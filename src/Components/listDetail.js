import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchListing } from '../Actions'
import { Grid, Col, Row, Button, Well } from "react-bootstrap";

class ListDetail extends Component {

    // receives API data before page is rendered
    componentWillMount(){
        this.props.fetchListing();
    }
    render() {
        return (
            <div>
                <h3>Businesses for Sale</h3>
                {this.renderListings(this.props.listing)}
                <br />
            </div>
        )
    }
    fetchListing(){
        this.props.fetchListing();
    }

    // render listings using redux props
    renderListings(listing) {
        if(!listing[0]){
            return(
                <div></div>
            )
        }
        return (
            listing[0].map(function(data){
                return (
                    <Well key={data.id}>
                            <Row>
                                <Col xs={12}>
                                <p>{data.description}</p>
                                <div>{data.location}</div>
                                <div>{data.price}</div>
                                <div>{data.contact}</div>
                                <Button bsStyle="primary">More Info</Button>
                                </Col>
                            </Row>
                    </Well>
                )
            })
        )
        // return (
        //     listing[0].map(function(data){
        //         return (
        //             <div className="list-item" key={data.id}>
        //                 <p>{data.description}</p>
        //                 <div>{data.location}</div>
        //                 <div>{data.price}</div>
        //                 <div>{data.contact}</div>
        //                 <button className="btn btn-primary btn-sm">More Info</button>
        //                 <br /><br /><br />
        //             </div>
        //         )
        //     })
        // )
    } 


    // render listings using passed props from list.js
    // renderListings() {
    //     return (
    //         this.props.info.listings.map((data) => {
    //             return (
    //                 <div key={data.id}>
    //                     <p>{data.description}</p>
    //                     <li>{data.location}</li>
    //                     <li>{data.price}</li>
    //                     <li>{data.contact}</li>
    //                     <button className="btn btn-primary btn-sm">More Info</button>
    //                     <br /><br /><br />
    //                 </div>
    //             )
    //         })
        // )
    // }
}

function mapStateToProps({listing}){
    return { listing }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchListing}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ListDetail);