import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import NavMenu from "./AppBar";

function Header(){
    return(
        <AppBar position="sticky">
        <Toolbar>
          <NavMenu/>
          <Typography variant="h6" align="center" noWrap>
            <a href="/" className="link"><span className="thin">UPCT - iBeacon</span></a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Header;