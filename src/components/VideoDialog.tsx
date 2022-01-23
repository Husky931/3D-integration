import { Fab, Grow, Slide } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import React, { useEffect, useState } from "react"
import { useVideoDialog } from "../states"
//@ts-ignore
import introSrc from "../assets/intro.mp4"
//@ts-ignore
import introPortraitSrc from "../assets/intro-portrait.mp4"
import { TransitionProps } from "@mui/material/transitions"
import { Close } from "@mui/icons-material"
import { useWindowSize } from "@lincode/hooks"

const Transition = React.forwardRef(
    (props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) => (
        <Grow ref={ref} {...props} timeout={500} />
    )
)

const VideoDialog = () => {
    const [open, setOpen] = useVideoDialog()
    const [windowWidth, windowHeight] = useWindowSize()
    const portrait = windowWidth < windowHeight

    return (
        <Dialog
         fullScreen
         open={open}
         onClose={() => setOpen(false)}
         TransitionComponent={Transition}
        >
            <div className="w-full h-full bg-black flex justify-center items-center">
                <video src={portrait ? introPortraitSrc : introSrc} controls autoPlay width="100%" height="100%" />
                <Fab
                 className="absolute left-0 top-0 m-4 sm:m-10 bg-white bg-opacity-25"
                 onClick={() => setOpen(false)}
                 size="small"
                >
                    <Close />
                </Fab>
            </div>
        </Dialog>
    )
}

export default VideoDialog