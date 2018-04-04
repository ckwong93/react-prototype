import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchListing } from '../Actions'

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

        console.log("this is the listing", listing);        
        console.log('this is the listing[0]',listing[0]);
    
            return (
                listing[0].map(function(data){
                    console.log(data.description)
                    return (
                        <div className="list-item" key={data.location}>
                            <p>{data.description}</p>
                            <div>{data.location}</div>
                            <div>{data.price}</div>
                            <div>{data.contact}</div>
                            <button className="btn btn-primary btn-sm">More Info</button>
                            <br /><br /><br />
                        </div>
                    )
                })
            )
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