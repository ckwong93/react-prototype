import React, { Component } from 'react';
import '../../style/listDetail.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchListing } from '../../Actions'
import { Link } from "react-router-dom";


class ListDetail extends Component {

    // receives API data before page is rendered
    componentWillMount(){
        this.props.fetchListing();
    }
    render() {
        return (
            <div>
                <h1>Businesses for Sale</h1>
                {this.renderListings(this.props.listing)}
                <br />
            </div>
        )
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
                    <div className="flex-container" key={data.id}>
                        <div className="img-container">
                            <img className="biz-img" src={data.img} alt={data.title}/>
                        </div>
                        <div className="data-container">

                            <h2 className="biz-title"><Link to={`/franchise/${data.id}`} activeClassName="active"> {data.title}</Link></h2>
                            <div className="biz-details">
                                {/* <span>{data.headline}</span> */}
                                <span className="biz-price">{data.price}</span>
                                <span className="biz-location">{data.location}</span>
                                <span className="biz-contact">{data.contact}</span> 
                            </div>
                            <div className="biz-description">{data.description}</div>
                            <div className="biz-capital">Minimum Capital Required: <span className="biz-capital-num">{data.capitalRequired}</span></div>
                            {/* <button className="btn btn-info biz-button" type="button">More Info</button> */}
                        </div>
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