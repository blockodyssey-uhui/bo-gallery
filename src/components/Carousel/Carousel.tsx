"use client";

import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Chart from "./Chart";
import Content from "./Content";

import styles from "./Carousel.module.scss";

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
            pagination
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className={styles.swiper}>
            <SwiperSlide>
                <Chart />
            </SwiperSlide>
            <SwiperSlide>
                <Content />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
