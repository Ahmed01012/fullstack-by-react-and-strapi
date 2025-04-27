    import {
    Box,
    Container,
    Typography,
    Stack,
    Divider,
    useMediaQuery,
    } from "@mui/material";

    import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
    import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
    import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
    import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
    import { useTheme } from "@emotion/react";

    const Icons = () => {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:350px)");
    return (
        <Container  maxWidth="lg" 
        sx={{
          width: "100%", // Ensure full width
         '@media (max-width:600px)': {
      maxWidth: '100vw', // Full viewport width for screens smaller than 600px
      padding: 0, // Remove padding for full width
      margin: 0, // Remove margin for full width
    },
        }}>
        <Stack
            direction={isSmallScreen ? "column" : "row"}
            alignItems={isSmallScreen ? "flex-start" : "center"}
            sx={{
            flexWrap: "wrap",
            mt: 3,
            // @ts-ignore
            bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
            }}
            divider={
                !isSmallScreen ? <Divider orientation="vertical" flexItem /> : null
            }
        >
            <MyBox
            icon={<ElectricBoltIcon fontSize="large" />}
            title={"Fast Delivery"}
            subTitle={"Start From 10$"}
            // @ts-ignore
            isMediumScreen={isMediumScreen}
            />
            <MyBox
            icon={<CreditScoreOutlinedIcon fontSize="large" />}
            title={"Payment"}
            subTitle={"Secure System"}
            // @ts-ignore
            isMediumScreen={isMediumScreen}
            />
            <MyBox
            icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
            title={"Money Guarantee"}
            subTitle={"7 Days Back"}
            // @ts-ignore
            isMediumScreen={isMediumScreen}
            />
            <MyBox
            icon={<AccessAlarmOutlinedIcon fontSize="large" />}
            title={"356 Days"}
            subTitle={"For Free Return"}
            // @ts-ignore
            isMediumScreen={isMediumScreen}
            />
        </Stack>
        </Container>
    );
    };

    export default Icons;

    // eslint-disable-next-line react/prop-types
    const MyBox = ({ icon, title, subTitle, isMediumScreen }) => {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isVerySmallScreen = useMediaQuery("(max-width:330px)");


    return (
        <Box
        sx={{
            width: isVerySmallScreen ? "100%" : isSmallScreen ? "100%" : 200,
            display: "flex",
            flexDirection: isMediumScreen ? "column" : "row",
            flexGrow: 0.5,
            alignItems: isMediumScreen ? "center" : "center",
            gap: isMediumScreen ? 1 : 3,
            justifyContent: isSmallScreen ? "flex-start" : "center",
            py: 2,
            px: isVerySmallScreen ? 0.5 : 1,
            textAlign: isMediumScreen ? "center" : "left",
        }}
        >
        {icon}
        <Box>
            <Typography variant="body1">{title}</Typography>
            <Typography
            sx={{
                fontWeight: 300,
                color: theme.palette.text.secondary,
            }}
            variant="body1"
            >
            {subTitle}
            </Typography>
        </Box>
        </Box>
    );
    };
