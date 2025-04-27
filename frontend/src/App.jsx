// @ts-nocheck
import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
// @ts-ignore
import Hero    from "./components/hero/Hero"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import IconSection from "./components/hero/IconSection";
import Icons from "./components/hero/Icons";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
    <ThemeProvider 
// @ts-ignore 
    theme={theme}>
    <CssBaseline />
        <Header1/>
        <Header2/>
        <Header3/>

        <Box bgcolor={theme.palette.bgContent.main} padding={10}>

          <Hero />
          {/* <IconSection/> */}
          <Icons/>
          <Main/>
        </Box>
        <Footer/>


        <Scroll/>







    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
