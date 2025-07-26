"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import VideoPlayer from "./VideoPlayer"

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
    }

    const thumbSettings = {
        slidesToShow: 6,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: nav1 as Slider,
    }

    return (
        <div className="space-y-2">
            {/* Main Slider */}
            <Slider {...mainSettings} ref={slider1}>
                {content.map((item, index) =>
                    item.name === "preview_gallery" ? (
                        item.resource_type === "image" ? (
                            <div key={index} className="w-full h-[280px]">
                                <Image
                                    src={item.resource_value}
                                    alt={item.name}
                                    width={392}
                                    height={220}
                                    className="object-contain w-full"
                                />
                            </div>
                        ) : (
                            <VideoPlayer key={index} item={item} />
                        )
                    ) : null
                )}
            </Slider>

            {/* Thumbnail Slider */}
            <Slider {...thumbSettings} ref={slider2}>
                {content.map((item, index) =>
                    item.name === "preview_gallery" && (
                        <div key={index} className="px-1">
                            <Image
                                src={item.thumbnail_url || item.resource_value}
                                alt={item.name}
                                width={100}
                                height={20}
                                className="rounded object-cover w-full h-[40px]"
                            />
                        </div>
                    )
                )}
            </Slider>
        </div>
    )
}

export default CourseTrailer
