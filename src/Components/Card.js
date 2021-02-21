import React, { Component } from "react";
import MainCard from "./MainCard";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  CardList = () => {
    this.props.dataset.map((content, index) => {
      <MainCard key={index} data={content} />;
    });
  };

  render() {
    return (
      <div className="container-fluid" style={{ marginTop: 18 }}>
        <div className="row">
          <div className="col-md-9">
            {this.props.dataset.map((content, index) => (
              <MainCard
                key={index}
                data={content}
                totalInvestment={this.props.totalInvestment}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
