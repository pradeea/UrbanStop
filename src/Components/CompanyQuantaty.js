import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import classes from "../Styles/CompanyQuantaty.scss";

class CompanyQuantaty extends Component {
  state = {};
  render() {
    var average = Math.abs(
      this.props.data.invested_amount / this.props.data.quantity
    ).toFixed(2);
    return (
      <Paper elevate={4}>
        <div className={classes.column2}>
          <div className={classes.quantity}>
            <div className={classes.left}>
              <i className="fa fa-database" />
              <span>Quantity</span>
            </div>
            <span style={{ fontWeight: "bold" }}>
              {this.props.data.quantity}
            </span>
          </div>
          <div className={classes.averageCost}>
            <div className={classes.left}>
              <i className="fas fa-at" />
              <span>Avg. Cost</span>
            </div>
            <span style={{ fontWeight: "bold" }}>{average}</span>
          </div>
          <div className={classes.investedAmount}>
            <div className={classes.left}>
              <i className="fa fa-money-bill" />
              <span>Invested Amt</span>
            </div>
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              ${this.props.data.invested_amount}
            </span>
          </div>
        </div>
      </Paper>
    );
  }
}

export default CompanyQuantaty;
