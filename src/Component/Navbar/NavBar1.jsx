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

import myntra from "../../assets/myntra.ico";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = [];
const settings = ["Cart", "Logout"];

const categoryObj = {
  men: "mens-shirts",
  women: "womens-dresses",
  electronics: "laptops",
  jewelery: "groceries",
};

function NavBar1({
  filterProducts,
  searchProduct,
  count,
  profilePhoto,
  loggedOut,
  loggedin,
}) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const handleClick = (e) => {
    let filter = categoryObj[e.target.name]
    // console.log(filter);
    navigate(`/products/${filter}`);
  };
  const handlechange = (e) => {
    searchProduct(e.target.value);
  };
  const logOut = () => {
    loggedOut();
    setAnchorEl(null);
    handleMobileMenuClose();
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
              color: "inherit",
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
              color="inherit"
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
            >
              <MenuItem name="men" onClick={handleClick}>
                <Typography textAlign="center">
                  <Button onClick={handleClick} name="men">
                    MEN
                  </Button>
                </Typography>
              </MenuItem>
              <MenuItem name="women" onClick={handleClick}>
                <Typography textAlign="center">
                  <Button onClick={handleClick} name="women">
                    WOMEN
                  </Button>
                </Typography>
              </MenuItem>
              <MenuItem name="electronics" onClick={handleClick}>
                <Typography textAlign="center">
                  <Button onClick={handleClick} name="electronics">
                    ELECTRONICS
                  </Button>
                </Typography>
              </MenuItem>
              <MenuItem name="jewelery" onClick={handleClick}>
                <Typography textAlign="center">
                  <Button onClick={handleClick} name="jewelery">
                  GROCERIES
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
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
              WOMEN
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
              GROCERIES
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
              ELECTRONICS
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Paper
                component="form"
                sx={{
                  m: 1,
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ flex: 1 }}
                  placeholder="Search "
                  onChange={handlechange}
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>

              <NavLink to="/addcart">
                <IconButton size="large" aria-label="show 17 new notifications">
                  <Badge badgeContent={count} color="error">
                    <ShoppingBagOutlinedIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </NavLink>
            </Box>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {!loggedin ? (
                    <Avatar>
                      <AccountCircle />
                    </Avatar>
                  ) : (
                    <Avatar alt="Remy Sharp" src={profilePhoto} />
                  )}
                </IconButton>
              </Tooltip>
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
                <NavLink to="/addcart">
                  <MenuItem>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                    >
                      <Badge badgeContent={count}>
                        <ShoppingBagOutlinedIcon fontSize="large" />
                      </Badge>
                    </IconButton>

                    <p>Cart</p>
                  </MenuItem>
                </NavLink>

                <MenuItem onClick={logOut}>
                  <IconButton>
                    {!loggedin ? (
                      <Avatar>
                        <AccountCircle />
                      </Avatar>
                    ) : (
                      <Avatar alt="Remy Sharp" src={profilePhoto} />
                    )}
                  </IconButton>
                  {loggedin?<p>Logout</p>:<p onClick={()=>navigate("/login")}>logIn</p>}
                  
                </MenuItem>
              </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar1;
