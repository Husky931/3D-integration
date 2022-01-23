import { useVisibilityObserver } from "@lincode/hooks"
import React, { useEffect, useRef } from "react"
import { isSafari } from "react-device-detect"

interface VideoProps {
    src: string
    poster: string
}

const WebVideo: React.FC<VideoProps> = ({ src, poster }) => {
    const [setVisibleEl, visible] = useVisibilityObserver(0.8)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (visible)
            videoRef.current?.play()
        else
            videoRef.current?.pause()
    }, [visible])

    return (
        <div className="w-full h-full" ref={setVisibleEl}>
            <video
             ref={videoRef}
             className="rounded-xl sm:rounded-3xl mx-auto"
             muted
             playsInline
             loop
             src={src}
             poster={poster}
            />
        </div>
    )
}

const SafariVideo: React.FC<VideoProps> = ({ src, poster }) => {
    return (
        <div className="w-full h-full">
            <video
             className="rounded-xl sm:rounded-3xl mx-auto"
             muted
             playsInline
             loop
             autoPlay
             src={src}
             poster={poster}
             onPlay={() => document.querySelectorAll("video").forEach(v => v.play())}
            />
        </div>
    )
}

const WechatVideo: React.FC<VideoProps> = ({ src, poster }) => {
    return (
        <div className="w-full h-full">
            <video
             className="rounded-xl sm:rounded-3xl mx-auto"
             muted
             playsInline
             loop
             src={src}
             poster={poster}
             controls
             />
        </div>
    )
}

const isWechat = /micromessenger/i.test(navigator.userAgent)

const Video: React.FC<VideoProps> = ({ src, poster }) => {
    return isWechat
        ? <WechatVideo src={src} poster={poster} /> : isSafari
        ? <SafariVideo src={src} poster={poster} />
        : <WebVideo src={src} poster={poster} />
}

export default Video