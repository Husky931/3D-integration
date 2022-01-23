import { useScroll } from "@lincode/hooks"
import React from "react"

const ScrollUp: React.FC = ({ children }) => {
    const [, scrollTop] = useScroll()

    return (
        <div style={{ transform: `translateY(${-scrollTop * 0.03}px)` }}>
            {children}
        </div>
    )
}

export default ScrollUp