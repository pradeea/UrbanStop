import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Col } from "react-bootstrap";
import "../Companydetails.css";
class CompanyDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <Paper variant="outlined" elevation={4}>
          <div className="Column1_column1__3J-Qi">
            <i className="fa fa-bars" aria-hidden="true"></i>
            <div className="Column1_scripData__3fUxd">
              <span className="Column1_scrip__2pj2O">
                {this.props.data.scrip}
              </span>
              <span className="Column1_price__3nkeC">
                {this.props.data.price}
              </span>
            </div>
            <div className="Column1_styledData__1KKBT">
              <span className="Column1_ishares__gNrOu">iShares</span>
              <span className="Column1_blackdoc__2UDUt">by BlackDoc</span>
              <span className="Column1_sp__2H-tG">S&P 500 Index</span>
              <span className="Column1_equity__g28G5">US Equity</span>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default CompanyDetails;
