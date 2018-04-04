import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchItem } from '../../Actions';


class ItemDetail extends Component{
    
    componentWillMount(){
        this.props.fetchItem();
    }

    render(){
        console.log(this.props.item)
        return(
            <div>{this.renderItem()}</div>
        )
    }

    renderItem(){
        let data = this.props.item[0];
        if(!data){
            return(
                <div>nothing here</div>
            )
        }
        return(
        data.map(function(info){
            return(
                <div key={info.franchse_id}>
                    <p>{info.franchise_id}</p>
                    <p>{info.name}</p>
                    <p>{info.short_name}</p>
                    <p>{info.address}</p>
                    <p>{info.address_2}</p>
                    <p>{info.city}</p>
                    <p>{info.state_id}</p>
                    <p>{info.zip}</p>
                    <p>{info.country_id}</p>
                    <p>{info.local_phone}</p>
                    <p>{info.min_capital_min}</p>
                    <p>{info.min_capital_max}</p>
                    <p>{info.min_worth_min}</p>
                    <p>{info.min_worth_max}</p>
                    <p>{info.franchise_fee_min}</p>
                    <p>{info.franchise_fee_max}</p>
                    <p>{info.total_investment_min}</p>
                    <p>{info.total_investment_max}</p>
                    <p>{info.low_cost}</p>
                    <p>{info.business_opportunity}</p>
                    <p>{info.high_capital}</p>
                    <p>{info.short_description}</p>                    
                    <p>{info.display_image}</p>
                </div>
            )
        })
    )
    }
}
function mapStateToProps({item}){
    return { item }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchItem}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail);