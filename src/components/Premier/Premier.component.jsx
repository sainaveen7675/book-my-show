import React from 'react';
import Slider from "react-slick";

// Components
import Poster from '../Poster/Poster.component';

// config
import PosterCarouselSettings from '../../config/PosterCarousal.config';
import PremierImages from '../../config/TempPosters.config';

const Premier = () => {
    return (
        <>
        <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new release every friday</p>
        </div>
        <Slider {...PosterCarouselSettings}>
            {PremierImages.map((image) => (
                <Poster{...image} isDark/>
            ))}
        </Slider>
        </>
    )
};

export default Premier;
