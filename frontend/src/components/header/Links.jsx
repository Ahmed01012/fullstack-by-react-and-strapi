import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography,useTheme} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Links({title}) {
  const theme = useTheme();
  return (
    <Box 
    sx={{ 
        position:"relative",
        display:"flex",
        alignItems:"center",
        ":hover .show-when-hover":{display:"block"},
        ":hover ":{cursor:"pointer"},
      }}
    >

    <Typography variant="body1"
    sx={{
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px", // Smaller font size for small screens
          },
        }}
        >
        {title}
    </Typography>
    <ExpandMore 
    sx={{ 
        fontSize:"16px",ml:1
      }} 
      />
      

      <Box  className="show-when-hover "
        sx={{ 
        position:"absolute" ,
        top:"100%",
        left:"0",
        minWidth:100,
        "@media (max-width: 1100px)":{
        minWidth:80,
        },
        display:"none",
        zIndex:2,
        whiteSpace:"nowrap",
        overflow:"visible",
        [theme.breakpoints.down("sm")]: {
            minWidth: 100, // Smaller width on small screens
          },
          // Ensure dropdown stays within the viewport
          transform: "translateX(0)",
          "@media (max-width: 1200px)": {
            left: "auto",
            right: 0, // Align the menu to the right for small screens
          },
      }}
      >
      <Paper sx={{ mt:2 }}>
        <nav aria-label="secondary mailbox folders">
          <List >

                <ListItem disablePadding>
                  <ListItemButton 
                  sx={{ display:"flex", p:0, px:1.5 }}
                  >
                    <ListItemText primary="Dashboard" 
                    sx={{ ".MuiTypography-root":
                    {fontSize:"15px",
                    fontWeight:300,
                      [theme.breakpoints.down("sm")]: {
                          fontSize: "13px", // Adjust text size for smaller screens
                        },
                    },  }}
                    />
                    <Box flexGrow={1}/>
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{":hover .sub-link":{display:"block"}, position:"relative" }} disablePadding>
                  <ListItemButton
                  sx={{ display:"flex", p:0, px:1.5 }}
                  >
                    <ListItemText primary="Products" 
                    sx={{ ".MuiTypography-root":{
                      fontSize:"15px",
                      fontWeight:300,
                      [theme.breakpoints.down("sm")]: {
                          fontSize: "13px",
                        },
                    },  }}
                    />
                    <Box flexGrow={1}/>
                    <KeyboardArrowRightOutlined fontSize="small"/>
                  </ListItemButton>

                <Box className="sub-link" sx={{ position:"absolute",top:0,left:"100%",display:"none", }}>
                  <Paper sx={{ 
                    minWidth:110,
                      "@media (max-width: 1100px)":{
                      minWidth:80,
                      },
                    ml:.5,
                    [theme.breakpoints.down("sm")]: {
                        minWidth: 90,
                      },
                  }}>
                  <nav aria-label="secondary mailbox folders">
                  <List >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ display:"flex",p:0,px:1 }}>
                        <ListItemText primary="Add Product"
                          sx={{ 
                            "& .MuiTypography.root":{
                              fontSize:"15px",
                              fontWeight:300,
                              [theme.breakpoints.down("sm")]: {
                                    fontSize: "13px",
                                  },
                            }}}
                        />
                        <Box flexGrow={1}/>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ display:"flex",p:0,px:1 ,mt:1}}>
                        <ListItemText primary="Edit Product"
                          sx={{ 
                            "& .MuiTypography.root":{
                              fontSize:"15px",
                              fontWeight:300,
                              [theme.breakpoints.down("sm")]: {
                                    fontSize: "13px",
                                  },
                            }}}
                        />
                        <Box flexGrow={1}/>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
                  </Paper>
                </Box>

                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                  sx={{ display:"flex", p:0, px:1.5 }}
                  >
                    <ListItemText primary="Orders" 
                    sx={{ ".MuiTypography-root":{fontSize:"15px",fontWeight:300,
                      [theme.breakpoints.down("sm")]: {
                          fontSize: "13px",
                        },
                    },  }}
                    />
                    <Box flexGrow={1}/>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton 
                    sx={{ display:"flex", p:0, px:1.5 }}
                  >
                    <ListItemText primary="Profile" 
                    sx={{ ".MuiTypography-root":{fontSize:"15px",fontWeight:300,},
                    [theme.breakpoints.down("sm")]: {
                          fontSize: "13px",
                        },  }}
                    />
                    <Box flexGrow={1}/>
                  </ListItemButton>
                </ListItem>
                
          </List>
        </nav>
      </Paper>
    </Box>


    </Box>
  )
}
