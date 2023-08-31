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
  MenuItem,
} from "@mui/material";
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
const MakeYearArray=()=>{
  const currentYear = new Date().getFullYear();
const yearArray=[];
for(let i=currentYear;i<=currentYear+50;i++){
  yearArray.push(i);
}
return yearArray
}
const yearArray=MakeYearArray();
const month = [1,2,3,4,5,6,7,8,9,10,11,12];

export default function PaymentForm({ setCart }) {
  const navigate = useNavigate();

  const [cardName,setCardName]=useState("");
  const [address,setAddress] = useState("");
  const [cardNumber,setCardNumber]=useState("");
  const [cvv,setCvv]=useState("");
  const [monthValidity,setMonthValidity]=useState("");
  const [yearValidity,setYearValidity]=useState("");
  // const [formData, setFormData] = useState(INTIALSTATE);
  const [errors, setErrors] = useState(INTIALSTATE);
  const [open, setOpen] = React.useState(false);
// console.log(formData);
  
    // if (id == "cardname") 
    // if (id == "address") (value);
    // if (id == "cardnumber") (value);
    // if (id == "cvv") (value);
    // if (id == "monthexpiry") (value);
    // if (id == "yearexpiry") (value);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validation logic
    const newErrors = {};

    if (cardName.trim() === '' || cardName.length<3 ) {
        newErrors.name = 'Name is required.';
    }
    if(address.trim()==='' || address.length<6){
      newErrors.address = 'Address is required.';
    }
    if (cvv.trim() === '' || cvv.length!=3) {
        newErrors.cvv = 'Invalid CVV.';
    }

    if (cardNumber.trim() === '' || cardNumber.length!=16) {
        newErrors.cardNumber = 'Credit card number is required.';
    }

    if (!monthValidity) {
        newErrors.monthValidity = 'Required Expiration Month(MM).';
    }
    if (!yearValidity) {
      newErrors.yearValidity = 'Required Expiration Year(YY).';
  }

    setErrors(newErrors);

    // If no errors, proceed with checkout
    if (Object.keys(newErrors).length === 0) {
        // Your checkout logic here
        setCart([]);
      setOpen(true);
      setCardName("")
  setAddress("")
  setCardNumber("")
  setCvv("")
  setMonthValidity(""),
  setYearValidity("")
    }
};
const DoneBtn = () => {
  navigate("/");
};
  // const handleClick = () => {
  //   const {cardName,address,cardNumber,cvv,monthValidity,yearValidity}=formData;
  //   setFormData((obj)=>({
  //     ...obj,
  //     INTIALSTATE,
  //   }))
  //   if (
  //     cardName &&
  //     cardNumber &&
  //     address &&
  //     cvv &&
  //     monthValidity &&
  //     yearValidity
  //   ) {
  //     
  //   } else {
  //     setError(true);
  //   }
    
  // };
  

  // const {cardName,address,cardNumber,cvv,monthValidity,yearValidity}=formData;
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
            <Box>
              <TextField
                label="Name"
                id="cardName"
                name="cardName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardName}
                onChange={(e)=>setCardName(e.target.value)}
                required
              />
              {errors.cardName && <span className="error" style={{color:"red",font:"italic"}}>{errors.cardName}</span>}
              <TextField
                label="Address"
                id="address"
                name="address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
              {errors.address && <span className="error" style={{color:"red",font:"italic"}}>{errors.address}</span>}
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
                onChange={(e)=>setCardNumber(e.target.value)}
              />
              {errors.cardNumber && <span className="error" style={{color:"red",font:"italic"}}>{errors.cardNumber}</span>}
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
                onChange={(e)=>setCvv(e.target.value)}
              />
              {errors.cvv && <span className="error" style={{color:"red",font:"italic"}}>{errors.cvv}</span>}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="MM"
          helperText="Please select Month"
          value={monthValidity}
                    onChange={(e)=>setMonthValidity(e.target.value)}
        >
          {month.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
                  {/* <TextField
                    label="Expiry Month"
                    id="monthValidity"
                    name="monthValidity"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ max: 2 }}
                    
                  /> */}
                </Grid>
                <Grid item xs={6}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="MM"
          helperText="Please select Month"
          value={yearValidity}
          onChange={(e)=>setYearValidity(e.target.value)}
        >
          {yearArray.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          </TextField>

                  {/* <TextField
                    label="Expiry Year"
                    id="yearValidity"
                    name="yearValidity"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 2023 }}
                    value={yearValidity}
                    onChange={(e)=>setYearValidity(e.target.value)}
                  /> */}
                </Grid>
              </Grid>
              {errors.monthValidity && <span className="error" style={{color:"red",font:"italic"}}>{errors.monthValidity}</span>}
              {errors.yearValidity && <span className="error" style={{color:"red",font:"italic"}}>{errors.yearValidity}</span>}

              <Button
                variant="contained"
                sx={{ bgcolor: "#F31559", mt: 2 }}
                color="primary"
                fullWidth
                onClick={handleSubmit}
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

