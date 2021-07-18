import React from "react";
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1626516962069_honestthief_1280x500_ios.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626343774760_admissionrageproductionsfestival_webshowcase_1280x500.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626372121139_bsm_1280x500_romcom_1.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626086157424_diyartcraftliveworkshopforsunfeastyippee_webshowcase_1280x500_revised.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg"
    ];

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;