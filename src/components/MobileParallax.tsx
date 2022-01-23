import React, { useEffect } from "react"
//@ts-ignore
import bgSrc from "../assets/screen-bg.png"
//@ts-ignore
import fgSrc from "../assets/screen-fg.png"
//@ts-ignore
import fg2Src from "../assets/screen-fg2.png"
import { useSpring, animated } from "react-spring"
import { mapRange } from "@lincode/math"
import { useVisibilityObserver } from "@lincode/hooks"

const width = 600
const height = width * 9 / 16

interface MobileParallaxProps {
}

const MobileParallax: React.FC<MobileParallaxProps> = ({  }) => {
    const [setEl, visible] = useVisibilityObserver()
    const [{ x }, api] = useSpring(() => ({ x: 0 }))
    
    useEffect(() => {
        if (!visible) return

        const cb = () => {
            api.start({ x: mapRange(window.scrollY, 0, height, 0, -height * 0.5) })
        }
        cb()
		document.addEventListener("scroll", cb)
        return () => {
		    document.removeEventListener("scroll", cb)
        }
    }, [visible])

    return (
        <div className="w-full" ref={setEl}>
            <div className="relative" style={{ height, width, perspective: 1000 }}>
                <animated.div className="absolute inset-0 bg-cover" style={{
                    backgroundImage: `url(${bgSrc})`,
                    transform: x.to(val => `rotate3d(0, 1, 0, 45deg) translateX(${val}px)`)
                }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                </animated.div>
                <animated.div className="absolute inset-0 bg-cover" style={{
                    backgroundImage: `url(${fgSrc})`,
                    transform: x.to(val => `rotate3d(0, 1, 0, 45deg) translateX(${val}px) translateZ(100px)`)
                }} />
            </div>
        </div>
    )
}

export default MobileParallax