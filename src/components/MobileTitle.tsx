import { useVisibilityObserver } from "@lincode/hooks"
import { PlayArrow } from "@mui/icons-material"
import { Button } from "@mui/material"
import React from "react"
import TextLoop from "react-text-loop"
import { setVideoDialog } from "../states"

const MobileTitle = () => {
    const [setEl, visible] = useVisibilityObserver()

    return (
        <div className="my-48 font-bold w-full flex flex-col justify-center items-center" ref={setEl}>
            {visible && (
                <TextLoop
                 className="text-5xl"
                 springConfig={{ stiffness: 50, damping: 5 }}
                >
                    <span className="text-gradient">
                        Metaverse
                    </span>
                    <span className="text-gradient">
                        Education
                    </span>
                    <span className="text-gradient">
                        Low-Code
                    </span>
                </TextLoop>
            )}
            <div className="text-5xl text-gradient-3">
                3D ENGINE
            </div>
            <Button className="mt-10" variant="outlined" size="large" startIcon={<PlayArrow />} onClick={() => setVideoDialog(true)}>
                Play Video
            </Button>
        </div>
    )
}

export default MobileTitle