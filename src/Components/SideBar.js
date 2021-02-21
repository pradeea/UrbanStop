import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@atlaskit/select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: "100%",
  },
  marginBottom: {
    marginBottom: "15px",
  },
  resize: {
    fontSize: "1.6rem",
  },
}));

const DrawerContent = ({
  data,
  updateData,
  getScripValues,
  handleCloseSideDrawer,
}) => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);
  const [scrip, setScrip] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [avgCost, setAvgCost] = useState("");
  const [investedAmount, setInvestedAmount] = useState("");
  const [marketValue, setMarketValue] = useState("");
  const [percentProfileValue, setPercentProfileValue] = useState("");
  const [unrealizedPL, setUnrealizedPL] = useState("");
  const [returns, setReturns] = useState("");

  const handleChange = async (e) => {
    setScrip(e.value);
    let currentScrip = data.find((d) => d.scrip === e.value);
    setQuantity(currentScrip.quantity);
    setPrice(currentScrip.price);
    setAvgCost(currentScrip.avg_cost);
    setInvestedAmount(currentScrip.invested_amount);
    setMarketValue(currentScrip.market_value);
    setPercentProfileValue(currentScrip.percent_portfolio_value);
    setUnrealizedPL(currentScrip.unrealized_PL);
    setReturns(currentScrip["return "]);
  };

  const handleSubmit = () => {
    const newData = {
      scrip: scrip,
      quantity: quantity,
      price: price,
      invested_amount: parseFloat(investedAmount),
    };
    updateData(newData);
  };

  return (
    <Grid container direction="column" justify="center">
      <Grid item xs container justify="flex-end">
        <i
          className="fa fa-arrow-right"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: 10,
            top: 10,
            fontSize: 20,
          }}
          onClick={handleCloseSideDrawer}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <Select
          className="single-select"
          classNamePrefix="react-select"
          options={[
            ...data.map((d) => {
              return { label: d.scrip, value: d.scrip };
            }),
          ]}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          label="Price"
          fullWidth
          value={price}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setQuantity(e.target.value)}
          variant="outlined"
          label="Quantity"
          fullWidth
          value={quantity}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      <Grid item xs container className={styles.marginBottom}>
        <TextField
          onChange={(e) => setInvestedAmount(e.target.value)}
          variant="outlined"
          label="Invested Amount"
          fullWidth
          value={investedAmount}
          InputProps={{
            classes: {
              input: styles.resize,
            },
          }}
          InputLabelProps={{
            classes: {
              root: styles.resize,
            },
          }}
        />
      </Grid>
      <Grid item xs container>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          fullWidth
          style={{
            fontSize: "1.6rem",
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default DrawerContent;
