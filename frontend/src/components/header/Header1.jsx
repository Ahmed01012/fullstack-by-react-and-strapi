// @ts-nocheck
import { useContext , useState} from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = ['AR','EN'];

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
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


    return (
    <Box
        sx={{
        bgcolor: "#2B3445",
        py:"2px",
        borderBottomRightRadius:6,
        borderBottomLeftRadius:6,
        overflow:"hidden",
        }}
        >
        <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2 } }}>
            <Stack                  
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                spacing={1}
                sx={{ "@media(max-width:600px)":{
                    justifyContent:"center"
                },
                width: "100%", 
                }}
                >
                <Stack direction={"row"} alignItems={"center"} spacing={1} >
                    <Typography
                    sx={{
                        mr: 2,
                        p: "3px 10px",
                        bgcolor: "#D23F57",
                        borderRadius: "12px",
                        fontSize: "10px",
                        color: "#fff",
                        "@media(max-width:250px)":{
                            p:"1px 3px"
                        }
                    }}
                    variant="body2"
                    >
                    HOT
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "#fff",
                        wordWrap: "break-word",
                        "@media(max-width:250px)":{
                            p:"1px 3px"
                        }
                    }}
                    variant="body2"
                    >
                    Free Express Shipping
                    </Typography>
                </Stack>

                {/* <Box flexGrow={1} /> */}
                <Stack direction={"row"} alignItems={"center"} spacing={1}
                sx={{ 
                    "@media(max-width:250px)":{
                        flexWrap:"wrap",
                        textAlign:"center"
                    }
                }}
                >

                {/* mode color and language  */}

                <Box
                sx={{ 
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                >
                        <div>
                            {theme.palette.mode === "light" ? (
                                <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                                >
                                <LightModeOutlined sx={{fontSize:"20px",color:"#fff"}}/>
                                </IconButton>
                            ) : (
                                <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                                >
                                <DarkModeOutlined sx={{fontSize:"20px"}}/>
                                </IconButton>
                            )}
                        </div>

                        <List
                            component="nav"
                            aria-label="Device settings"
                            sx={{p:0,m:0}}
                        >
                            <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{"&:hover":{cursor:"pointer"}, px:1}}
                            >
                                <ListItemText
                                sx={{".MuiTypography-root ":{fontSize:"12px",color:"#fff"}}}
                                    secondary={options[selectedIndex]}
                                />
                                <ExpandMore sx={{fontSize:"16px" ,color:"#fff"}} />
                            </ListItemButton>
                        </List>
                    
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                            }}
                        >
                            {options.map((option, index) => (
                            <MenuItem
                                sx={{fontSize:"11px",p:"3px 10px",minHeight:"10px"}}
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
                </Box>


                    {/* social media */}

                        <Box sx={{ 
                            display:"flex", gap:0
                        }}>
                        <IconButton component="a" href="https://www.linkedin.com/in/ahmed-elhamamy-a63713241/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                            />
                        </IconButton>
                        <IconButton component="a" href="https://github.com/Ahmed01012" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                            />
                        </IconButton>
                        <IconButton component="a" href="https://www.instagram.com/gah4255/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                            />
                        </IconButton>
                        <IconButton component="a" href="https://x.com/AhmedEl91485681" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                            />
                        </IconButton>
                        <IconButton component="a" href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app" target="_blank" rel="noopener noreferrer">
                            <EmailOutlinedIcon
                            sx={{
                                fontSize: "16px",
                                color: "#fff",
                            }}
                            />
                        </IconButton>
                    </Box>
                </Stack>
            </Stack>
        </Container>

    </Box>
    );
}
