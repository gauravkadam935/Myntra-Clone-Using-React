import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import myntra from "../../assets/myntra.ico";
import { NavLink } from "react-router-dom";
import { Chip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const settings = ["Logout"];

const categoryObj = {
  men: "men's clothing",
  women: "women's clothing",
  electronics: "electronics",
  jewelery: "jewelery",
};

function Navbar({ filterProducts, searchProduct, count, profilePhoto }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleClick = (e) => {
    filterProducts(categoryObj[e.target.name]);
  };
  const handlechange = (e) => {
    searchProduct(e.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Avatar alt="Remy Sharp" src={myntra} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
             <Avatar alt="Remy Sharp" src={myntra} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleClick}
              name="men"
              sx={{
                my: 2,
                display: "block",
                fontWeight: "700",
                color: "black",
              }}
            >
              MEN
            </Button>
            <Button
              onClick={handleClick}
              name="women"
              sx={{
                my: 2,
                display: "block",
                fontWeight: "700",
                color: "black",
              }}
            >
              WEMEN
            </Button>
            <Button
              onClick={handleClick}
              name="jewelery"
              sx={{
                my: 2,
                display: "block",
                fontWeight: "700",
                color: "black",
              }}
            >
              Jewelery
            </Button>
            <Button
              onClick={handleClick}
              name="electronics"
              sx={{
                my: 2,
                display: "block",
                fontWeight: "700",
                color: "black",
              }}
            >
              Electronics
            </Button>
          </Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search "
              onChange={handlechange}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          </Paper>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, marginLeft: 2 }}
              >
                {!profilePhoto ? (
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                ) : (
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                )}
              </IconButton>
            </Tooltip>
            <NavLink to="/addcart">
              <Typography variant="div">
                <IconButton type="button" sx={{ p: "10px" }}>
                  <ShoppingBagOutlinedIcon fontSize="large" />
                  <Chip
                    label={count}
                    variant="outlined"
                    size="small"
                    sx={{ bgcolor: "#F31559", color: "white" }}
                  />
                </IconButton>
              </Typography>
            </NavLink>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
