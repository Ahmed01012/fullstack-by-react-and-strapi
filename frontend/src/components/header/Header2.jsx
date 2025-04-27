import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";



const options = [
  "All Categories",
  "Men",
  "Women",
  "Children",
  "Accessories",
  "Cars",
];

// corrected bu gbt

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.2,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #555",
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    minWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const them = useTheme();

return (
    <Container
      maxWidth="lg" 
  sx={{
    width: "100%", // Ensure full width
    '@media (max-width:600px)': {
      maxWidth: '100vw', // Full viewport width for screens smaller than 600px
    },
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        flexDirection: { xs: "column", sm: "row" },
  }}
    >
      {/* THE STACK IS REPLACED DISPLAY FLEX  */}
      {/* LOGO, TITLE, CART, AND PROFILE ICONS */}
        <Stack
            direction="row"
            alignItems="center"
            sx={{ mb: { xs: 2, sm: 0 }, width: { xs: "100%", sm: "auto" } }}
            justifyContent={{ xs: "space-between", sm: "flex-start" }} // Adjust for smaller screens
        >
            {/* Logo and Title */}
            <Stack direction="row" alignItems="center">
            <ShoppingCartOutlined sx={{ "@media(max-width:250px)":{fontSize:"20px"} }} />
            <Typography variant="body2" sx={{ fontWeight: 600, ml: 1, "@media(max-width:250px)":{fontWeight: 300 , ml:0.5}  }}>
                G.A.H
            </Typography>
            </Stack>

            {/* Cart and Profile Icons for small screens */}
            <Stack
              direction="row"
              alignItems="center"
              sx={{ display: { xs: "flex", sm: "none" } }}
              >
              <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon sx={{ "@media(max-width:250px)":{fontSize:"20px"} }} />
                  </StyledBadge>
              </IconButton>
              <IconButton>
                  <Person2OutlinedIcon sx={{ "@media(max-width:250px)":{fontSize:"20px"} }} />
              </IconButton>
              {useMediaQuery("(max-width:250px)") && (
                <IconButton onClick={toggleDrawer("top", true)}>
                  <MenuIcon sx={{ "@media(max-width:250px)":{fontSize:"20px",mr:1} }} />
                </IconButton>
              )}
            </Stack>
        </Stack>

        <Search
            sx={{
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-between",
            flexGrow: { xs: 1, sm: 0.6 },
            }}
        >
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            />

            <List
            component="nav"
            aria-label="Category selection"
            // @ts-ignore
            sx={{
                // @ts-ignore
                p: 0,
                m: 0,
                bgcolor: them.palette.backsearch.main,
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                "@media(max-width:250px)":{
                  display:"none"
                }
            }}
            >
            <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="Category"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{
                "&:hover": { cursor: "pointer" },
                px: 1,
                borderRadius: "20px",
                }}
            >
                <ListItemText
                sx={{
                    width: 100,
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItem>
            </List>

            <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
            }}
            >
            {options.map((option, index) => (
                <MenuItem
                sx={{ fontSize: "14px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                >
                {option}
                </MenuItem>
            ))}
            </Menu>
        </Search>

        <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ display: { xs: "none", sm: "flex" }, mt: { xs: 1, sm: 0 } }}
        >
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
            </IconButton>
            <IconButton>
            <Person2OutlinedIcon />
            </IconButton>
        </Stack>
        </Container>
    );
}
