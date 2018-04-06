import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDetail } from "../../Actions";

class FranchiseDetail extends Component {
  componentWillMount() {
    this.props.fetchDetail();
    // const { id } = this.props.match.params;
  }
  componentDidMount(){
  }
  constructor(props){
      super(props);
      this.state = { id: this.props.match.params}
  }
  render() {
      console.log(this.props, "here are the props");
      
    return <div>
        <h1>Businesses for Sale</h1>
        {this.findData(this.state.id)}
        <br />
      </div>;
  }
  findData(id){
      console.log(this.props, 'here are the props');
        if (!this.props.listing[0]) {
        return <div></div>;
        }
        let result = [];
        this.props.listing[0].filter(function(data){
            console.log(data.id,id.id, data.id == id.id)
            if(data.id == id.id){
                result.push(data)
            }
        })
        console.log(result)
      return (
            <div>
                <div>{result[0].title}</div>
                <div>{result[0].description}</div>
            </div>
      )
  }
  // render listings using redux props
  renderItem(listing) {
    if (!listing[0]) {
      return <div></div>;
    }

    return listing[0].map(function(data) {
      return (
        <div className="flex-container" key={data.id}>
          <div className="img-container">
            <img className="biz-img" src={data.img} alt={data.title} />
          </div>
          <div className="data-container">
            <h2 className="biz-title">
              {data.title}
            </h2>
            <div className="biz-details">
              {/* <span>{data.headline}</span> */}
              <span className="biz-price">
                {data.price}
              </span>
              <span className="biz-location">
                {data.location}
              </span>
              <span className="biz-contact">
                {data.contact}
              </span>
            </div>
            <div className="biz-description">
              {data.description}
            </div>
            <div className="biz-capital">
              Minimum Capital Required:{" "}
              <span className="biz-capital-num">{data.capitalRequired}</span>
            </div>
            {/* <button className="btn btn-info biz-button" type="button">More Info</button> */}
          </div>
        </div>
      );
    });
  }


}

function mapStateToProps({ listing }) {
  return { listing };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDetail }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FranchiseDetail);
