import React from 'react'
import css from './Testi.module.css'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials.js'
import { Swiper, SwiperSlide } from 'swiper/react'
const Testi = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY.
                        EXERCISE JOY MAN CHILDREN REJOICED.</span>
                </div>

                <img src={Hero} alt='' />
                <div className={css.container}>
                    <span>100K</span>
                    <span>HAPPY CUSTOMERS WITH US</span>
                </div>
            </div>
            <div className={css.reviews}> Reviews</div>

            <div className={css.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    breakpoints={
                        {
                            856: {
                                slidesPerView: 3
                            },
                            600: {
                                slidesPerView: 2
                            },
                            0: {
                                slidesPerView: 1
                            }
                        }
                    }
                >
                    {TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt='' />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>


                            </div>
                        </SwiperSlide>
                    ))

                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Testi
