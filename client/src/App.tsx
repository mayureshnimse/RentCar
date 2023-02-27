import { DarkMode } from "@mui/icons-material";
import { CssBaseline, Typography } from "@mui/material";
import { createTheme } from "@mui/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Catalog from "./features/catalog/Catalog";
import Header from "./Header";


function App() {
  
  

  return (
   <><CssBaseline />
   <><Header />
   <Outlet/>
   </>
   </>
    
    
  );
}

export default App;
