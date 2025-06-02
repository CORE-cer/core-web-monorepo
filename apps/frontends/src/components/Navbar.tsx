import { useTheme } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import DataObjectIcon from "@mui/icons-material/DataObject";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useLocation, Link as RouterLink } from "@tanstack/react-router";
import { useDarkModeContext } from "../context/DarkModeContext.tsx";
import { DRAWER_WIDTH } from "../MUIThemes";
import Main from "./Main";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Logo = () => {
  return (
    <Typography variant="h6" noWrap>
      <RouterLink
        to="/"
        style={{
          marginRight: 32,
          display: "flex",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CORE Beta
      </RouterLink>
    </Typography>
  );
};

interface DrawerListItemProps {
  text: string;
  href: string;
  icon: ReactNode;
}

const DrawerListItem = ({ text, href, icon }: DrawerListItemProps) => {
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === href;
  }, [location.pathname, href]);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton component={RouterLink} to={href} disabled={isActive}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

interface NavbarProps {
  children?: ReactNode;
  renderMain?: boolean;
}

export default function Navbar({ children, renderMain = true }: NavbarProps) {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const darkModeContext = useDarkModeContext();

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        variant="outlined"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : theme.palette.background.paper,
          zIndex: (theme) =>
            isBelowMd ? theme.zIndex.appBar : theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            edge="start"
            sx={{
              mr: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Box sx={{ flexGrow: 1, display: "flex" }} />
          <Tooltip title="Toggle Dark Mode" sx={{ flexGrow: 0 }}>
            <IconButton edge="end" onClick={darkModeContext.toggleDarkMode}>
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant="temporary"
        anchor="left"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar variant="dense">
          <Logo />
        </Toolbar>
        <Divider />
        <List dense>
          <DrawerListItem text="Query" href="/" icon={<DataObjectIcon />} />
          <DrawerListItem
            text="Watch"
            href="/watch"
            icon={<VisibilityIcon />}
          />
          <DrawerListItem
            text="About us"
            href="/about"
            icon={<PeopleAltIcon />}
          />
        </List>
      </Drawer>
      {renderMain && <Main permanentDrawer={false}>{children}</Main>}
    </>
  );
}
