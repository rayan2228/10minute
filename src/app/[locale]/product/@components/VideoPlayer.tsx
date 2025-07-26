"use client"
import { useState } from "react"

const VideoPlayer = ({
    item,
}: {
    item: {
        resource_type: string
        resource_value: string
        name: string
        thumbnail_url?: string
    }
}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true)
    }

    return (
        <div className="relative w-full h-[280px]">
            {isPlaying ? (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1&si=BgOmQ9uolhqglFah`}
                    title={item.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            ) : (
                <div
                    className="w-full h-full bg-cover bg-center cursor-pointer relative"
                    style={{
                        backgroundImage: `url(${item.thumbnail_url || `https://img.youtube.com/vi/${item.resource_value}/hqdefault.jpg`})`,
                    }}
                    onClick={handleClick}
                >
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <svg
                            className="w-14 h-14 text-[#1CAB55] shadow-one"
                            fill="currentColor"
                            viewBox="0 0 84 84"
                        >
                            <circle cx="42" cy="42" r="42" fill="white" />
                            <polygon points="33,24 33,60 60,42" fill="text-[#1CAB55]" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
