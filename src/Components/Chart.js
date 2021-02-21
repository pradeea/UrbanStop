import React, { Component } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Paper } from "@material-ui/core";
import classes from "../Styles/chart.scss";
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqChartData: [
        {
          name: "Mutual Funds",
          value: parseFloat(this.props.data.mf),
          color: "#03a9f4",
        },
        {
          name: "ETFs",
          value: parseFloat(this.props.data.etf),
          color: "#ae9c46",
        },
      ],
    };
  }

  render() {
    return (
      <Paper elevate={6} className={classes.portfolioChart}>
        <PieChart width={310} height={200}>
          <Pie
            data={this.state.reqChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          >
            {this.state.reqChartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            align="right"
            layout="vertical"
            verticalAlign="middle"
            height={24}
          />
          <Tooltip />
        </PieChart>
      </Paper>
    );
  }
}

export default Chart;
