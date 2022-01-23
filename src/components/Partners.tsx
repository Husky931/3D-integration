import React from "react"
//@ts-ignore
import partnersSrc from "../assets/partners.png"
//@ts-ignore
import partnersVerticalSrc from "../assets/partners-vertical.png"
import { useWindowSize } from "@lincode/hooks"

const Partners = () => {
    const [windowWidth] = useWindowSize()

    return (
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-20 md:gap-32 p-10 pt-0 sm:pt-10 xl:p-20 my-10">
            <div className="text-5xl sm:text-3xl lg:text-5xl font-bold text-gradient-3 flex-shrink-0 whitespace-nowrap">
                PARTNERS<br />
                OF AN OPEN<br />
                METAVERSE
            </div>
            <div className="flex-grow">
                <img src={windowWidth > 640 ? partnersSrc : partnersVerticalSrc} />
            </div>
        </div>
    )
}

export default Partners