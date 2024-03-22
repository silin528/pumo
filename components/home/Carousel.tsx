"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"


export default function Carousel() {

    const settings = {
        dots: true, // 显示导航点
        arrows: true, // 显示箭头
        infinite: true, // 无限循环
        speed: 500, // 切换速度（毫秒）
        slidesToShow: 1, // 每次显示的幻灯片数量
        slidesToScroll: 1 // 每次滚动的幻灯片数量
    };

    let bgImage = ['/bg-3.jpg', '/1-2.jpg', '/p2-m.jpg']

    return (
        <section>
            <div className=" text-gray-600">
                <div className="space-y-5 max-w-full mx-auto w-full text-center">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className="w-full" >
                            <img src={"/1-2.jpg"}
                                width="100%" height={200} alt={""}
                                className="rounded-md cursor-pointer w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="w-full" >
                            <img src={"/1-2.jpg"}
                                width="100%" height={200} alt={""}
                                className="rounded-md cursor-pointer w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="w-full" >
                            <img src={"/1-2.jpg"}
                                width="100%" height={200} alt={""}
                                className="rounded-md cursor-pointer w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="w-full" >
                            <img src={"/1-2.jpg"}
                                width="100%" height={200} alt={""}
                                className="rounded-md cursor-pointer w-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}