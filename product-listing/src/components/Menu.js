// mui
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Avatar,
  Typography,
} from "@mui/material";
// mui icons
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BarChartIcon from "@mui/icons-material/BarChart";
// app logo
import logo from "../assets/logo.jpg";

const AppMenu = ({
  handleDrawerOpen,
  handleDrawerClose,
  open,
  drawerWidth,
}) => {
  const theme = useTheme();

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "black",
    zIndex: "1300",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Avatar src={logo} />
        {open && (
          <Typography sx={{ color: "white", fontWeight: 600, ml: 2 }}>
            AI Techno
          </Typography>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {["Dashboard", "Products List", "Analytics"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: "block", color: "white" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor: index == 1 && "grey",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <FormatListBulletedIcon />
                ) : (
                  <BarChartIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Tooltip title={!open ? "Open Menu" : "Close Menu"}>
        <IconButton
          onClick={!open ? handleDrawerOpen : handleDrawerClose}
          sx={{
            color: "white",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          {!open ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </IconButton>
      </Tooltip>
    </Drawer>
  );
};
export default AppMenu;
