import "../../Styles_Css/Navbar.css";
import * as React from "react";

// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
// import i2e from "..Img/i2e.JPG"
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;
const logoTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function Navbar(props) {
  
  //   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <NavLink to="/">
          {" "}
          <img
            src="data:image/png;base64,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"
            height="30px"
            alt="Resume"
          />

        </NavLink>
      </Typography>
      <Divider />
      <List
        className="drawerLinks"
        sx={{
          display: "flex",
          textAlign: "left",
          paddingLeft: "20px",
          flexDirection: "column",
        }}>

        <NavLink className="nav-link" to="/" color="inherit">
          Resume Templates
        </NavLink>
        <NavLink to="/my/resumes" className="nav-link" color="inherit">
          My Resumes
        </NavLink>
        <NavLink to="/about-us" color="inherit" className="nav-link">
          About us
        </NavLink>
      </List>
    </Box>

  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={logoTheme}>
          <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
            <Toolbar id="toolbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                id="icon"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}>
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  fontSize: "25px",
                  position: "relative",
                  top: "5px",
                }}>
                <NavLink to="/" className="homeIcon">
                  {" "}
                  <img
                    src="data:image/png;base64,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"
                    height="50px"
                    alt="Resume"
                  />
                </NavLink>
              </Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {/* sx={{ 
                                        color: '#080808', 
                                        fontSize: '13px', 
                                        fontWeight: '500', 
                                        fontFamily: 'DM Sans', 
                                        }} */}
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        
        <Box component="nav">
          <Drawer
            //   container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
