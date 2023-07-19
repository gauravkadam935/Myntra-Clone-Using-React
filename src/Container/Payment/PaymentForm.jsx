import * as React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Navbar from "../../Component/Navbar/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const INTIALSTATE = {
  cardName: "",
  address: "",
  cardNumber: "",
  cvv: "",
  monthValidity: "",
  yearValidity: "",
};

export default function PaymentForm({ setCart }) {
  const navigate = useNavigate();

  // const [cardName,setCardName]=useState("");
  // const [address,setAddress] = useState("");
  // const [cardNumber,setCardNumber]=useState("");
  // const [cvv,setCvv]=useState("");
  // const [monthValidity,setMonthValidity]=useState("");
  // const [yearValidity,setYearValidity]=useState("");
  const [formData, setFormData] = useState(INTIALSTATE);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
console.log(formData);
  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setFormData((obj)=>({
      ...obj,
      [id]:value,
    }))
    // if (id == "cardname") setCardName(value);
    // if (id == "address") setAddress(value);
    // if (id == "cardnumber") setCardNumber(value);
    // if (id == "cvv") setCvv(value);
    // if (id == "monthexpiry") setMonthValidity(value);
    // if (id == "yearexpiry") setYearValidity(value);
  };

  const handleClick = () => {
    const {cardName,address,cardNumber,cvv,monthValidity,yearValidity}=formData;
    setFormData((obj)=>({
      ...obj,
      INTIALSTATE,
    }))
    if (
      cardName &&
      cardNumber &&
      address &&
      cvv &&
      monthValidity &&
      yearValidity
    ) {
      setCart([]);
      setOpen(true);
    } else {
      setError(true);
    }
    
  };
  const DoneBtn = () => {
    navigate("/");
  };

  const {cardName,address,cardNumber,cvv,monthValidity,yearValidity}=formData;
  return (
    <>
      {open && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Payment Successfully"}
          </DialogTitle>
          <DialogActions>
            <Button autoFocus onClick={DoneBtn}>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, color: "#F31559" }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
        </Box>

        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            {error && (
              <p style={{ color: "red", fontStyle: "italic" }}>
                all details are mendatory
              </p>
            )}
            <Box>
              <TextField
                label="Name"
                id="cardName"
                name="cardName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardName}
                onChange={handleChange}
                required
              />

              <TextField
                label="Address"
                id="address"
                name="address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={handleChange}
              />

              <TextField
                label="Credit Card Number"
                id="cardNumber"
                name="cardNumber"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 16 }}
                value={cardNumber}
                onChange={handleChange}
              />

              <TextField
                label="CVV"
                id="cvv"
                name="cvv"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 3 }}
                value={cvv}
                onChange={handleChange}
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Month"
                    id="monthValidity"
                    name="monthValidity"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 1, max: 12 }}
                    value={monthValidity}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Year"
                    id="yearValidity"
                    name="yearValidity"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 2023 }}
                    value={yearValidity}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{ bgcolor: "#F31559", mt: 2 }}
                color="primary"
                fullWidth
                onClick={handleClick}
              >
                Pay Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
