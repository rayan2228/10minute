"use client"

import { ReactNode } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

interface SliderContainerProps {
    children: ReactNode[]
    settings?: object
}

const SliderContainer = ({ children, settings = {} }: SliderContainerProps) => {

    return <Slider {...settings} >{children}</Slider>
}

export default SliderContainer
