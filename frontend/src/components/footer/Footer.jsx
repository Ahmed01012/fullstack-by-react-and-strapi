import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Box sx={{ 
            bgcolor:"#283445",
            py: { xs: 1, sm: 1.3 },
            px: { xs: 2, sm: 1.5 },
            borderTopLeftRadius:8,
            borderTopRightRadius:8,
            }}>
            <Typography
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                color={"HighlightText"}
                variant="h6"
                sx={{ 
                    fontSize:{ xs: 14, sm: 18 },
                    textAlign: "center",
                    }}
                >
            Designed And Developed By
                <Button 
                component="a"
                href="https://www.linkedin.com/in/ahmed-elhamamy-a63713241/"
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                    mx:0.5,
                    fontSize:{ xs: "14px", sm: "18px" },
                    textTransform:"capitalize",
                    color:"#ff7790"
                }}>ahmed elhamamy</Button>
                &copy; {currentYear}
            </Typography>
        
        </Box>

    )
}
