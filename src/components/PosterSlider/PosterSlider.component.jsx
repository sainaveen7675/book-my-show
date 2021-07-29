import React from 'react';

import Slider from 'react-slick';

// Components
import Poster from '../Poster/Poster.component';

// config
import PosterCarouselSettings from '../../config/PosterCarousal.config';

const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PosterCarouselSettings;

    return (
        <>
            <div className="flex flex-col items-start my-2">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
            </div>
            <Slider {...sliderConfig}>
                {props.images.map((image) => (
                    <Poster{...image} isDark={props.isDark} /> // isDark -> used for dark bg
                ))}
            </Slider>
        </>
    )
}

export default PosterSlider;