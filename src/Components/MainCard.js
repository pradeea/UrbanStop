import React, { Component } from "react";
import CompanyDetails from "./CompanyDetails";
import CompanyQuantaty from "./CompanyQuantaty";
import MarketValue from "./MarketValue";
import UnrealisedPL from "./UnrealisedPL";
import BuySell from "./BuySell";
import classes from "../Styles/MasterCard.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={classes.cardColumns}>
          <div className="row">
            <div className="col-lg-2">
              <CompanyDetails data={this.props.data} />
            </div>
            <div className="col-lg-3">
              <CompanyQuantaty data={this.props.data} />
            </div>
            <div className="col-lg-3">
              <MarketValue
                data={this.props.data}
                totalInvestment={this.props.totalInvestment}
              />
            </div>
            <div className="col-lg-3">
              <UnrealisedPL
                data={this.props.data}
                totalInvestment={this.props.totalInvestment}
              />
            </div>
            <div className="col-lg-1">
              <BuySell />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainCard;
