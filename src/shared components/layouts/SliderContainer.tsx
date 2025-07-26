"use client"

import { ReactNode } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

interface SliderContainerProps {
    children: ReactNode[]
    settings?: object
}

const SliderContainer = ({ children, settings = {}, ...props }: SliderContainerProps) => {

    return <Slider {...settings}{...props}>{children}</Slider>
}

export default SliderContainer
