import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@emotion/react";
import { Close, ElectricBikeOutlined } from "@mui/icons-material";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChildCareIcon from "@mui/icons-material/ChildCare";
// import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // component start here
  // component start here

  // @ts-ignore
  // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  // @ts-ignore
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="lg" 
  sx={{
    width: "100%", // Ensure full width
    '@media (max-width:600px)': {
      maxWidth: '100vw', // Full viewport width for screens smaller than 600px
    },
    display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:3,
        mb:2,
        px:isMobile ? 1 : 2,
  }}
    >
      <Box sx={{ 
        "@media(max-width:250px)":{
          display:"none"
        }
      }}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined }
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: isMobile ? 180 : 240 ,
            bgcolor: theme.palette.backsearch.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 200,
              bgcolor: theme.palette.backsearch.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ManIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Men</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WomanIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Women</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ChildCareIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Children</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Accessories</ListItemText>
          </MenuItem>

        </Menu>
      </Box>

      {useMediaQuery("(min-width:1330px)") && (
      <Stack gap={4} direction={"row"} alignItems={"center"}
      sx={{ "@media(max-width:1300px)":{
        direction:"column"
      } }}
      >
        <Links title={"Home"} />
        <Links title={"Mega Menu"}/>
        <Links title={"Full Screen Menu"}/>
        <Links title={"Pages"}/>
        <Links title={"User Account"}/>
        <Links title={"Vendor Account"}/>
      </Stack>
      )}


      {useMediaQuery("(max-width:1330px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon sx={{ "@media(max-width:250px)":{display:"none"} }} />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
          padding: "10px",
        }}
      >
        <Box
          sx={{ width: "100%", mx: "auto", mt: 8, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "360deg", transition: "1s", color: "red" },
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {/* the links in drawer */}

          {[
            { 
              mainLink: "Home", 
              subLink: ["Link1", "Link2", "Link3"] 
            },
            { 
              mainLink: "Mega Menu", 
              subLink: ["Link4", "Link5", "Link6"] 
            },
            { 
              mainLink: "Full Screen Menu",
              subLink: ["Link7", "Link8", "Link9"],
            },
            { 
              mainLink: "Pages", 
              subLink: ["Link10", "Link11", "Link12"] 
            },
            {
              mainLink: "User Account",
              subLink: ["Link13", "Link14", "Link15"],
            },
            {
              mainLink: "Vendor Account",
              subLink: ["Link16", "Link17", "Link18"],
            },
          ].map((item) => {
            return (
              <Accordion
                // @ts-ignore
                key={item}
                elevation={0}
                sx={{ bgcolor: "initial" }}
                >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ my: 0, py: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ my: 0, py: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
