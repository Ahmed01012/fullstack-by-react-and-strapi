import { Box, Container, Typography, useMediaQuery , Grid} from "@mui/material";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { useTheme } from "@emotion/react";

const icons = [
    { icon: ElectricBoltIcon, title: "Fast Delivery", description: "Start From 8:00 AM" },
    { icon: CreditScoreOutlinedIcon, title: "Money Guarantee", description: "7 Days Back" },
    { icon: WorkspacePremiumOutlinedIcon, title: "356 Days", description: "For Free Return" },
    { icon: AccessAlarmOutlinedIcon, title: "Payment", description: "Secure System" },
];

const IconSection = () => {

    const theme = useTheme();    
    // @ts-ignore
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return(
        <Container> 

            <Grid container spacing={4} justifyContent="space-around" alignItems="center">

                {icons.map((item ,index )=>{
                    const AnyIcon = item.icon;
                    return(
                        <Grid item xs={12} sm={6} md={3} key={index} >
                            <Box
                                sx={{ 
                                    display:"flex",
                                    flexDirection: isSmallScreen ? 'row' : 'column',
                                    alignItems:"center",
                                    textAlign: isSmallScreen ? 'left' : 'center',
                                    p:3,
                                    gap:2,
                                    transition:'transform 0.3s ease-in-out',
                                    '&:hover':{
                                        transform:'Scale(1.02)',
                                        backgroundColor:theme.palette.action.hover,
                                    }
                                }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: theme.palette.primary.main,
                                            color: theme.palette.common.white,
                                            borderRadius: '50%',
                                            p: 2,
                                            fontSize: '2rem',
                                        }}
                                        aria-label={item.title}
                                        >
                                        <AnyIcon fontSize="large" />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                        <Typography variant="body2"
                                            sx={{ 
                                                color:theme.palette.text.secondary
                                            }}
                                            >
                                                {item.description}
                                        </Typography>
                                    </Box>
                            </Box>
                            
                        </Grid>
                    )
                })}

                {/* <MyBox icon={<ElectricBoltIcon />} />
                <MyBox icon={<WorkspacePremiumOutlinedIcon />} />
                <MyBox icon={<AccessAlarmOutlinedIcon />} />
                <MyBox icon={<CreditScoreOutlinedIcon />} /> */}

            </Grid>

        </Container>
    )
}

export default IconSection;


// eslint-disable-next-line react/prop-types
// const MyBox = ({icon}) => {
//     return(
//         <Box>
//             {icon}
//         </Box>

//     );
// };