import logo from "./logo.svg";
import CompanyDetails from "./Components/CompanyDetails";
import "./App.css";
import CompanyQuantaty from "./Components/CompanyQuantaty";
import MarketValue from "./Components/MarketValue";
import classes from "./Styles/MasterCard.scss";
import UnrealisedPL from "./Components/UnrealisedPL";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import MainCard from "./Components/MainCard";
import Card from "./Components/Card";
import Chart from "./Components/Chart";
import { data } from "./Data/data";
import { Drawer } from "@material-ui/core";
import DrawerContent from "./Components/SideBar";
import "./Styles/SideBar.scss";
import React, { useState, useEffect } from "react";
function App() {
  var totalInvestment = TotalInvestedAmount(data);
  var chartData = formChartData(data, totalInvestment);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  console.log(chartData);
  return (
    <div className="App">
      <div>
        <Card dataset={data} totalInvestment={totalInvestment} />
        <Chart data={chartData} />
      </div>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer}
        className="material-drawer"
      >
        <DrawerContent data={data} handleCloseSideDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

function TotalInvestedAmount(data) {
  var sum = 0;
  data.map((d) => {
    sum += d.invested_amount;
  });
  return sum;
}
function formChartData(data, totalInvestment) {
  let chartData = {
    mf: 0,
    etf: 0,
  };
  var pPercent;
  data.map((d) => {
    pPercent = ((d.quantity * d.price) / totalInvestment) * 100;
    if (d.type == "MF") {
      chartData.mf += pPercent;
    }
    if (d.type == "ETF") {
      chartData.etf += pPercent;
    }
  });
  return chartData;
}

export default App;
