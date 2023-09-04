import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.js";

const INTIALSTATE = {
  name: "",
  email: "",
  password: "",
};
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Register = ({ userLoginArray }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(INTIALSTATE);

  const handleClick = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name.trim() === "" || name.length < 3) {
      newErrors.name = "Name is required.";
    }
    if (email.trim() === "" || email.length < 6) {
      newErrors.email = " email is required.";
    }
    if (password.trim() === "" || password.length != 3) {
      newErrors.password = "Invalid password.";
    }
    setErrors(newErrors);

    // If no errors, proceed with checkout
    if (Object.keys(newErrors).length === 0) {
      // Your checkout logic here
      const user = {
        name: name,
        email: email,
        password: password,
      };
      userLoginArray(user);
      navigate("/login");
      // alert("Please fill all the fields");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#F31559" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
            {errors.name && (
              <span className="error" style={{ color: "red", font: "italic" }}>
                {errors.name}
              </span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            {errors.email && (
              <span className="error" style={{ color: "red", font: "italic" }}>
                {errors.email}
              </span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="error" style={{ color: "red", font: "italic" }}>
                {errors.password}
              </span>
            )}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me" 
            /> */}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Register
            </Button>
            {/* <Button
              onClick={handleSubmit}
              fullWidth
              variant="outlined"
              sx={{ mt: 2, mb: 1}}
            >
              Sign In With Google+
            </Button> */}
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Register;
