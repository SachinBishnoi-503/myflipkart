import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import sale_is_live from "../assets/images/webp/sale-is-live.png";
const SaleAndSearch = () => {
    return (
        <>
            <div className='pt-6 pb-2'>
                <Swiper
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sale_is_live} alt="saleislive" className="max-h-[200px] mx-auto" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default SaleAndSearch