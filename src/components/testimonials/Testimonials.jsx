import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper';



const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt=""/>
                    </div>
                    <h5 className="client__name">Ernest Achiver</h5>
                    <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi incidunt nulla quas repudiandae sunt ullam! A atque consectetur dicta ea in libero molestias nam provident sint, unde veniam, veritatis?</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt=""/>
                    </div>
                    <h5 className="client__name">Ernest Achiver</h5>
                    <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi incidunt nulla quas repudiandae sunt ullam! A atque consectetur dicta ea in libero molestias nam provident sint, unde veniam, veritatis?</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt=""/>
                    </div>
                    <h5 className="client__name">Ernest Achiver</h5>
                    <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quasi suscipit vitae! Cupiditate eum, facilis fuga iste magni officiis perspiciatis veritatis? Ab alias assumenda at, commodi fugiat id itaque laboriosam magni minus nulla placeat quam quisquam quos recusandae sequi suscipit ullam vel voluptas voluptate voluptatem!</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt=""/>
                    </div>
                    <h5 className="client__name">Ernest Achiver</h5>
                    <small className="client__review">Lorem ipsum dolor sit amet. Architecto eligendi incidunt nulla quas repudiandae sunt ullam! A atque consectetur dicta ea in libero molestias nam provident sint, unde veniam, veritatis?</small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;