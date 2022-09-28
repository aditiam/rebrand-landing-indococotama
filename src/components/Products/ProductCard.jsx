import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import listProducts from '../../utils/data'
import 'swiper/css';
import 'swiper/css/navigation';

function ProductCard() {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation
            breakpoints={{
                1280: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                578: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            }}>
            {listProducts.map((data, key) => {
                return (
                    <SwiperSlide key={key}>
                        <article className="product-card">
                            <figure className="product-content">
                                <img className="product-img" src={data.productImg} alt={data.productName} />
                                <figcaption className="product-name">{data.productName}</figcaption>
                                <h3 className="product-desc">{data.productDesc}</h3>
                                <Link to={data.slug} className="cta-product">
                                    Learn More
                                </Link>
                            </figure>
                        </article>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default ProductCard