import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

export default function ButtonAppBar() {
  const { isAuth } = useContext(AuthContext);

  const guestLinks = (
    <>
      <Button component={RouterLink} to="/login" color="inherit">
        Login
      </Button>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Github Jobs
          </Typography>
          {isAuth ? "" : guestLinks}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
