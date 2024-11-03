import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const drawerWidth = 240;

export const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Todo-app-fsd
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {/* <List>
            {["Home", "About", "Contact"].map((text) => (
              <ListItem
                component={Link}
                to={`/${text.toLowerCase()}`}
                key={text}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <List>
            <ListItem component={Link} to="/" key="Home">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/about" key="About">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem component={Link} to="/contact" key="Contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
