// top level import
import * as React from "react";
// mui
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import component
import Header from "../components/Header";
import AppMenu from "../components/Menu";
import AppTab from "../components/Tab";
import ProductList from "../components/ProductList";
import { Stack } from "@mui/material";

const drawerWidth = 240;

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* app header component */}
      <Header open={open} drawerWidth={drawerWidth} />
      {/* app menu component */}
      <AppMenu
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
      />
      <Stack
        component="main"
        sx={{ flexGrow: 1, marginTop: "80px", marginX: "20px" }}
        gap={3}
      >
        {/* tabs component */}
        <AppTab />
        {/* product list component */}
        <ProductList />
      </Stack>
    </Box>
  );
}
