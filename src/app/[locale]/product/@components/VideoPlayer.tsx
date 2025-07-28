"use client";
import { useState } from "react";

const VideoPlayer = ({
    item,
}: {
    item: {
        resource_type: string;
        resource_value: string;
        name: string;
        thumbnail_url?: string;
    };
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
    };

    const thumbnail =
        item.thumbnail_url ||
        `https://img.youtube.com/vi/${item.resource_value}/hqdefault.jpg`;

    return (
        <div className="relative w-full h-[132px] sm:h-[220px] md:h-[250px] lg:h-[280px] rounded overflow-hidden">
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
                    style={{ backgroundImage: `url(${thumbnail})` }}
                    onClick={handleClick}
                >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-white">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <polygon points="6,4 6,16 16,10" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
