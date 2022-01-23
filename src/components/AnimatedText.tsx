import { assert } from "@lincode/utils"
import React from "react"

const animateIn = (el: HTMLDivElement, i: number) => {
    el.animate([
        { transform: `translateY(${i%2 ? "100" : "-100"}%)`, opacity: "0" },
        { transform: "translateY(0%)", opacity: "1" }
    ], {
        duration: 250,
        delay: i * 100,
        fill: "both",
        easing: "ease"
    })
}

const animateOut = (el: HTMLDivElement, i: number) => {
    el.animate([
        { transform: "translateY(0%)", opacity: "1" },
        { transform: `translateY(${i%2 ? "100" : "-100"}%)`, opacity: "0" }
    ], {
        duration: 300,
        delay: i * 100,
        fill: "both",
        easing: "ease"
    })
}

interface AnimatedTextProps {
    className?: string
    style?: React.CSSProperties
    offset?: number
    out?: boolean
}

const AnimatedText: React.FC<AnimatedTextProps> = React.memo(({ className, style, offset, out, children }) => {
    assert(typeof children === "string")

    const textArray = [...children]

    return (
        <div className={className} style={style} ref={console.log}>
            {textArray.map((char, i) => (
                <div className={"inline-block " + (char === " " ? "w-4" : "")} key={i} ref={el => {
                    if (out)
                        el && animateOut(el, i + (offset ?? 0))
                    else
                        el && animateIn(el, i + (offset ?? 0))
                }}>
                    {char}
                </div>
            ))}
        </div>
    )
})

export default AnimatedText