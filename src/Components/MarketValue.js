import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "../Styles/MarketValue.scss";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("rgb(0,0,0)", 0.8),
    borderRadius: 30,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#07c407",
  },
})(LinearProgress);
class MarketValue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  render() {
    // const styles = this.useStyles();
    const investment = this.props.data.quantity * this.props.data.price;
    const portfolioValue = (investment / this.props.totalInvestment) * 100;
    return (
      <Paper>
        <div className={classes.column3}>
          <div className={classes.marketValue}>
            <span>Market Value </span>
            <span>${investment}</span>
          </div>
          <div className={classes.portfolioValue}>
            <span>% of portfolio value </span>
            <span>{portfolioValue}%</span>
          </div>
          <div className={classes.progress}>
            <BorderLinearProgress
              className={{
                margin: 1,
              }}
              variant="determinate"
              color="secondary"
              value={portfolioValue}
            />
          </div>
        </div>
      </Paper>
    );
  }
}

export default MarketValue;
