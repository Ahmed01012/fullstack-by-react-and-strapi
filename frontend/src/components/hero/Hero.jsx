    // @ts-nocheck
    import { Container, Box, Link, Stack, Typography, Button } from "@mui/material";
    import Arrowforward from "@mui/icons-material/Arrowforward";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination } from "swiper/modules";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";

    import "./slider.css";
    import { useTheme } from "@emotion/react";

    const mySlider = [
        {text:"MEN" , link :"src/components/images/hero/banner-15.jpg",desc:"LIFESTYLE COLLECTION"},
        {text:"WOMEN" , link :"src/components/images/hero/banner-25.jpg",desc:"LIFESTYLE COLLECTION"},
        {text:"Accessories" , link :"src/components/images/hero/swiper8.webp",desc:"CHOSE THE BEST ACCESSORIES"},
    ]

    const Hero = () => {
    const theme = useTheme();

    return (
        <Container 
         maxWidth="lg" 
  sx={{
    width: "100%", // Ensure full width
    '@media (max-width:600px)': {
      maxWidth: '100vw', // Full viewport width for screens smaller than 600px
      padding: 0, // Remove padding for full width
      margin: 0, // Remove margin for full width
    },
    pt:3, mt: 2.5, display: "flex", alignItems: "center", gap: 2 , flexDirection: { xs: "column", md: "row" }, 
  }}
        // sx={{pt:3, mt: 2.5, display: "flex", alignItems: "center", gap: 2 , flexDirection: { xs: "column", md: "row" }, }}
        >
        <Swiper
            loop={true}
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ flex: 1 }}
        >

            {mySlider.map((item)=>{
                return(
                    
            <SwiperSlide key={item.link} className="parent-slider">
            <img src={item.link} alt={item.text} className="swiper-image"  />
            <Box
                sx={{
                [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                    textAlign: "center",
                },
                }}
            >
                <Typography
                sx={{
                    color: "#222",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                }}
                variant="h6"
                >
                {item.desc}
                </Typography>
                <Typography
                sx={{
                    color: "#222",
                    my: 1,
                    fontSize: { xs: "24px", sm: "32px", md: "40px" },
                    fontWeight:700,

                }}
                variant="h3"
                >
                {item.text}
                </Typography>
                <Stack
                sx={{ 
                    justifyContent :{xs:"center" , sm:"flex-start"},
                    flexDirection:{xs:"column",sm:"row"},
                    alignItems:"center",
                    gap:1,
                    }}
                >
                <Typography 
                sx={{ 
                    fontSize: { xs: "22px", sm: "26px" },
                    color: "#333",
                }} 
                variant="h5"
                >
                    SALE UP TO
                </Typography>
                <Typography 
                sx={{
                    color: "darkRed",
                    fontSize: { xs: "30px", sm: "33px" },
                    fontWeight: { xs: 500, sm: 700 },
                }}
                variant="h4"
                >
                    30% OFF
                </Typography>
                </Stack>
                <Typography
                sx={{ color: "#000", fontWeight: 300, my: 1 }}
                variant="body1"
                >
                Get Free Shipping On Orders Over $99.00
                </Typography>
                <Button
                sx={{
                    px: { xs: 3, sm: 5 },
                    py: { xs: 1, sm: 1.5 },
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.2)",
                    color: "#fff",
                    borderRadius: "4px",
                    fontSize: { xs: "12px", sm: "15px" },
                    "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    },
                }}
                variant="contained"
                >
                SHOP NOW
                </Button>
            </Box>
            </SwiperSlide>
                )
            })}

        </Swiper>

        <Box sx={{ 
            display: { xs: "none", md: "block"}, 
            width: "300px" ,
            flexShrink: 0, 
            }}
            >
            <Box sx={{ position: "relative", mb: 2 }}>
            <img
                width={"100%"}
                src="src\components\images\hero\banner-17.jpg"
                alt=""
            />
            <Stack
                sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 25,
                textAlign: "left"
                }}
            >
                <Typography
                variant="caption"
                sx={{
                    color: "#283445",
                    fontSize: "18px",
                }}
                >
                NEW ARIVVALS
                </Typography>
                <Typography
                variant="h6"
                sx={{
                    color: "#283445",
                    mt: 1,
                }}
                >
                SUMMER
                </Typography>
                <Typography
                variant="h6"
                sx={{
                    color: "#283445",
                }}
                >
                SALE 20% OFF
                </Typography>
                <Link
                sx={{
                    color: "#283445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    mt:1,
                    "&:hover": {
                    color: "#023f57",
                    },
                }}
                href="#"
                underline="none"
                >
                Shop Now
                <Arrowforward sx={{ fontSize: "14px" }} />
                </Link>
            </Stack>
            </Box>
            <Box sx={{ position: "relative" }}>
            <img
                width={"100%"}
                src="src\components\images\hero\banner-16.jpg"
                alt=""
            />
            <Stack
                sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 25,
                textAlign: "left",
                }}
            >
                <Typography
                variant="caption"
                sx={{
                    color: "#283445",
                    fontSize: "18px",
                }}
                >
                GAMING 4K
                </Typography>
                <Typography
                variant="h6"
                sx={{
                    color: "#283445",
                    mt: 1,
                }}
                >
                DESKTOPS &
                </Typography>
                <Typography
                variant="h6"
                sx={{
                    color: "#283445",
                    mt: 1,
                }}
                >
                LAPTOPS
                </Typography>
                <Link
                sx={{
                    color: "#283445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    mt: 1,
                    "&:hover": {
                    color: "#023f57",
                    },
                }}
                href="#"
                underline="none"
                >
                Shop Now
                <Arrowforward sx={{ fontSize: "14px" }} />
                </Link>
            </Stack>
            </Box>
        </Box>
        </Container>
    );
    };
    export default Hero;
