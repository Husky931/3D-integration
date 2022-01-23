import { useVisibilityObserver } from "@lincode/hooks"
import { PlayArrow } from "@mui/icons-material"
import { Button } from "@mui/material"
import React from "react"
import TextLoop from "react-text-loop"
import { setVideoDialog } from "../states"

const Title: React.FC = () => {
    const [setEl, visible] = useVisibilityObserver()

    return (
        <div className="my-48 xl:mb-64 font-bold w-full flex justify-center items-center" ref={setEl}>
            <div>
                <span className="text-xl sm:text-4xl xl:text-5xl">
                    Lingo3D<span className="font-normal"> is a next generation</span>
                </span>
                <br />
                {visible && (
                    <TextLoop className="text-2xl sm:text-5xl xl:text-6xl" springConfig={{ stiffness: 50, damping: 5 }}>
                        <span className="text-gradient">Metaverse 3D</span>
                        <span className="text-gradient">Coding Education</span>
                        <span className="text-gradient">Low-Code App</span>
                    </TextLoop>
                )}
                <span className="text-gradient-2 text-2xl sm:text-5xl xl:text-6xl">{" Engine"}</span>
            </div>
        </div>
    )
}

export default Title
