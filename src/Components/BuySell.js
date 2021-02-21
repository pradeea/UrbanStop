import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import classes from "../Styles/BuySell.scss";

class BuySell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={classes.column5}>
        <Button variant="outlined" className={classes.buysellbutton}>
          BUY
        </Button>
        <Button variant="outlined" className={classes.buysellbutton}>
          SELL
        </Button>
      </div>
    );
  }
}

export default BuySell;
