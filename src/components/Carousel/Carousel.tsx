import React from "react";

// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.style.scss";
import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper/core";

import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
    return (
        <>
            <Swiper
                navigation={true}
                pagination={{
                    type: "progressbar",
                }}
                className="mySwiper2"
                autoplay={{delay: 2500, disableOnInteraction: false}}

            >
                <SwiperSlide>
                    <Link to="/category/amazing">
                        <img
                            src={img1}
                            alt="pic1"
                        />
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/category/amazing">
                        <img
                            src={img2}
                            alt="pic2 "
                        />
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/category/amazing">
                        <img
                            src={img3}
                            alt="pic3"
                        />
                    </Link>

                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
