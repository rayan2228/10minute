"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { FC, useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import VideoPlayer from "./VideoPlayer"

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
export const SampleNextArrow: FC<ArrowProps> = ({ className = '', style, onClick }) => {
    return (
        <div
            className={`${className} arrow !top-1/2 !right-3 `}
            style={{ ...style }}
            onClick={onClick}
        >
            <ChevronRight className="text-black w-[20px]" />
        </div>
    );
};




export const SamplePrevArrow: FC<ArrowProps> = ({ className = '', style, onClick }) => {
    return (
        <div
            className={`${className} arrow !top-1/2 !left-3 `}
            style={{ ...style }}
            onClick={onClick}
        >
            <ChevronLeft className="text-black w-[20px]" />
        </div>
    );
};
const CourseTrailer = ({
    content,
}: {
    content: {
        resource_type: string
        resource_value: string
        name: string
        thumbnail_url?: string
    }[]
}) => {
    const slider1 = useRef<Slider | null>(null)
    const slider2 = useRef<Slider | null>(null)

    const [nav1, setNav1] = useState<Slider | null>(null)
    const [nav2, setNav2] = useState<Slider | null>(null)

    useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    }, [])

    const mainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: nav2 as Slider,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    const thumbSettings = {
        arrows: false,
        slidesToShow: 6,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: nav1 as Slider,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    }

    return (
        <div className="space-y-2  lg:p-1">
            {/* Main Slider */}
            <Slider {...mainSettings} ref={slider1}>
                {content.map((item, index) =>
                    item.name === "preview_gallery" ? (
                        item.resource_type === "image" ? (
                            <div className="h-full " ><Image
                                src={item.resource_value}
                                alt={item.name}
                                width={640}
                                height={360}
                            />
                            </div>
                        ) : (
                            <VideoPlayer key={index} item={item} />
                        )
                    ) : null
                )}
            </Slider>

            {/* Thumbnail Slider */}
            <div className="pl-3">
                <Slider {...thumbSettings} ref={slider2}>
                    {content.map((item, index) =>
                        item.name === "preview_gallery" && (
                            <div key={index} className="px-1">
                                <Image
                                    src={item.thumbnail_url || item.resource_value}
                                    alt={item.name}
                                    width={100}
                                    height={20}
                                    className="rounded object-cover"
                                />
                            </div>
                        )
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default CourseTrailer
