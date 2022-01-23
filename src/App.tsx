import { useWindowSize } from "@lincode/hooks"
import React from "react"
import MobileParallax from "./components/MobileParallax"
import Parallax from "./components/Parallax"
import Title from "./components/Title"
import MobileTitle from "./components/MobileTitle"
import Navigation from "./components/Navigation"
import { createTheme, ThemeProvider } from "@mui/material"
import VideoSection from "./components/VideoSection"
import ICP from "./components/ICP"
import Partners from "./components/Partners"
import VideoDialog from "./components/VideoDialog"
import SignUpModal from "./components/SignUpModal"

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})

const App: React.FC = () => {
    const [windowWidth] = useWindowSize()

    return (
        <ThemeProvider theme={darkTheme}>
            <Navigation />
            <div className="container mx-auto xl:px-20">
                {windowWidth > 640 ? <Title /> : <MobileTitle />}
                {windowWidth > 640 ? <Parallax /> : <MobileParallax />}
                <VideoSection />
                {/* <Partners /> */}
                {/* <ICP /> */}
            </div>
            {/* <VideoDialog /> */}
            <SignUpModal />
        </ThemeProvider>
    )
}

export default App
