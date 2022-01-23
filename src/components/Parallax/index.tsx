import { mergeRefs, useResizeObserver, useVisibilityObserver, useWindowSize } from "@lincode/hooks"
import React, { useEffect, useState } from "react"
//@ts-ignore
import bgSrc from "../../assets/screen-bg.png"
//@ts-ignore
import fgSrc from "../../assets/screen-fg.png"
//@ts-ignore
import fg2Src from "../../assets/screen-fg2.png"
import ScrollUp from "./ScrollUp"

const scrollHeight = 3000
const section2ScrollTop = scrollHeight * 0.4

const Parallax: React.FC = () => {
    const [status, setStatus] = useState<"notStarted" | "started" | "finished">("notStarted")
    const [section, setSection] = useState(0)
    const [setEl, [elWidth, elHeight], el] = useResizeObserver()
    const [setImageEl, [, imageHeight]] = useResizeObserver()
    const [windowWidth, windowHeight] = useWindowSize()
    const [setVisibleEl, visible] = useVisibilityObserver(0.1)

    const tiltAngle = status === "started" ? 20 : 0
    const aspectRatio = windowWidth / windowHeight
    const centerY = aspectRatio < 1.7 ? window.innerHeight * 0.5 - imageHeight * 0.5 : 100
    
	useEffect(() => {
        if (!el || !visible) return

        const cb = () => {
            setSection(window.scrollY > section2ScrollTop ? 1 : 0)

            const scrollY0 = window.scrollY + window.innerHeight * 0.5 - imageHeight * 0.5
            const scrollY1 = el.offsetTop + elHeight - imageHeight

            if (scrollY0 > scrollY1) {
                setStatus("finished")
                return
            }
            if (window.scrollY > Math.max(el.offsetTop - centerY, 0)) {
                setStatus("started")
                return
            }
            setStatus("notStarted")
		}
        cb()
		document.addEventListener("scroll", cb)
        return () => {
		    document.removeEventListener("scroll", cb)
        }
	}, [imageHeight, elHeight, centerY, visible])

    return (
        <div className="w-full" style={{ height: scrollHeight }} ref={mergeRefs(setEl, setVisibleEl)}>
            <div style={{
                perspective: 1000,
                position: status === "started" ? "fixed" : "absolute",
                width: elWidth,
                top: (status === "finished" && el)
                    ? scrollHeight + el.offsetTop - imageHeight
                    : status === "started" ? centerY : ""
            }}>
                <div
                 className="transition-all duration-1000"
                 style={{
                     transform: status === "started"
                        ? `rotate3d(1, 0, 0, ${tiltAngle}deg) translateZ(${tiltAngle > 0 ? -50 : 0}px)`
                        : status === "notStarted" ? "rotate3d(0, 1, 0, 20deg) translateX(5%)" : ""
                 }}
                >
                    <img ref={setImageEl} src={bgSrc} width="100%" />
                    <div className="absolute inset-0 bg-black transition-all duration-1000" style={{
                        opacity: status === "started" ? 0.75 : status === "notStarted" ? 0.5 : 0
                    }} />
                </div>
                <div
                 className="absolute top-0 transition-all duration-1000"
                 style={{
                     transform: status === "started"
                        ? `translateY(${status === "started"? -20 : 0}px) rotate3d(1, 0, 0, ${tiltAngle}deg)` 
                        : status === "notStarted" ? "rotate3d(0, 1, 0, 20deg) translateZ(100px) translateX(5%)" : ""
                 }}
                >
                    <img src={fgSrc} width="100%" />
                    <div className="text-white center-y transition-all duration-1000" style={{
                        left: "55%", width: "40%", opacity: status === "started" ? 1 : 0
                    }}>
                        <ScrollUp>
                            <div className="transition-all duration-1000" style={{ opacity: section === 0 ? 1 : 0 }}>
                                <div className="text-4xl lg:text-6xl font-bold text-yellow-300">
                                    MindMap
                                </div>
                                <div>
                                    Don't know how to code? No problem! Lingo3d empowers your imagination through MindMap: a drag-and-drop tool that lets you build advanced programs with simple logic trees.
                                </div>
                            </div>
                        </ScrollUp>
                    </div>
                    <div className="absolute inset-0 transition-all duration-1000" style={{ opacity: section === 1 ? 1 : 0 }}>
                        <img src={fg2Src} width="100%" />
                        <div className="text-white center-y transition-all duration-1000" style={{
                            left: "55%", width: "40%", opacity: status === "started" ? 1 : 0
                        }}>
                            <ScrollUp>
                                <div className="text-4xl lg:text-6xl font-bold text-yellow-300">
                                    LingoScript
                                </div>
                                <div>
                                    World's first programming language specifically optimized for 3d content creation. LingoScript is a statically-typed variant of JavaScript that enables static analysis of 3d models and scenes.
                                </div>
                            </ScrollUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax