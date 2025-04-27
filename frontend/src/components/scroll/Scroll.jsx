import { Fab, Zoom } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; // Icon for the button
import useScrollTrigger from "@mui/material/useScrollTrigger";


export default function Scroll() { 

    const trigger = useScrollTrigger({
        disableHysteresis: true, // React immediately on scroll
        threshold: 190, // Trigger after 100px scroll
    });

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                color="primary"
                size="small"
                onClick={handleScrollToTop}
                aria-label="scroll back to top"
                style={{ position: "fixed", bottom: 16, right: 16 }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    )
}
