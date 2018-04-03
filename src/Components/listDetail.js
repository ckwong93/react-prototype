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
        console.log(this.props.listing)
        return (
            <div>
                <h3>Businesses for Sale</h3>
                <button onClick={()=> this.fetchListing()}>Update State</button>
                <br />
            </div>
        )
    }
    fetchListing(){
        this.props.fetchListing();
    }
    renderBooks() {
        return (
            this.props.info.listings.map((data) => {
                return (
                    <div className="list-item"key={data.location}>
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
}

function mapStateToProps({listing}){
    return { listing }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchListing}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ListDetail);