import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "../Styles/UnrealisedPL.scss";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("rgb(0,0,0)", 0.8),
    borderRadius: 0,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#07c407",
  },
})(LinearProgress);

const BorderLinearProgressLeft = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("rgb(0,0,0)", 0.8),
    borderRadius: 0,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "rgb(255,0,0)",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
// const styles = useStyles();

class UnrealisedPL extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      market_value: this.props.data.quantity * this.props.data.price,
      invested_amount: this.props.data.invested_amount,
      unrealized_PL:
        this.props.data.price * this.props.data.quantity -
        this.props.data.invested_amount,
    };
    return (
      <Paper>
        <div className={classes.column4}>
          <div className={classes.unrealizedPL}>
            <span>Unrealized P/L</span>
            <span>
              {Math.abs(data.market_value - data.invested_amount).toFixed(2)}
            </span>
          </div>
          <div className={classes.return}>
            <span>% Return</span>
            <span>
              {Math.sign(data.unrealized_PL) >= 0 ? (
                <i className="fa fa-caret-up" style={{ color: "#07c407" }} />
              ) : (
                <i className="fa fa-caret-down" style={{ color: "red" }} />
              )}
              &nbsp;
              {Math.abs(
                (data.unrealized_PL * 100) / data.invested_amount
              ).toFixed(2)}
              %
            </span>
          </div>
          <div className={classes.progress}>
            <BorderLinearProgressLeft
              className={{
                flexGrow: 1,
              }}
              variant="determinate"
              color="secondary"
              value={
                -((data.unrealized_PL * 100) / data.invested_amount).toFixed(2)
              }
            />

            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={(
                (data.unrealized_PL * 100) /
                data.invested_amount
              ).toFixed(2)}
            />
          </div>
        </div>
      </Paper>
    );
  }
}

export default UnrealisedPL;
