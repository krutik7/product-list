// mui
import { Avatar, Badge, Stack, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
// mui icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import profile from "../assets/profile.jpg";

const Header = ({ open, drawerWidth }) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Toolbar>
        <Stack
          sx={{ width: "100%", paddingLeft: open ? 0 : "50px" }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#ac8454" }}
          >
            Products
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <Badge color="warning" variant="dot">
              <NotificationsIcon fontSize="10px" sx={{ color: "black" }} />
            </Badge>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={1}
              sx={{
                backgroundColor: "#EBECF2",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <Avatar
                alt="Matthews Gill"
                src={profile}
                sx={{ width: 20, height: 20 }}
              />
              <Typography color={"black"} fontSize={"10px"} fontWeight={"600"}>
                Matthews Gill
              </Typography>
              <ExpandMoreIcon sx={{ color: "black" }} fontSize="10px" />
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
