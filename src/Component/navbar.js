import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { ListItemIcon } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

export default function NavBar() { 
  let navigate = useNavigate()
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            E-commerce
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=> {navigate("/dashboard")}}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <Divider />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=> {navigate("/customer-table")}}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Customers" />
            </ListItemButton>
            <Divider />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=> {navigate("/product-table")}}>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItemButton>
            <Divider />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
