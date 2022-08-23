import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../static/css/Detail_image.css";
// import "swiper/css/navigation";
import { useState } from "react";

export default function App({
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
}) {
    const slides = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
    ];
    console.log(slides);
    // console.log("slides 배열 분석 ", slides);
    const [imagesNavSlider, setImagesNavSlider] = useState(null);
    return (
        <div className="App">
            <section className="slider">
                <div className="slider__flex">
                    <div className="slider__col">
                        <div className="slider__prev">Prev</div>
                        <div className="slider__thumbs">
                            <Swiper
                                onSwiper={setImagesNavSlider}
                                direction="vertical"
                                spaceBetween={20}
                                slidesPerView={4.3}
                                mousewheel={true}
                                className="swiper-container1"
                                breakpoints={{
                                    0: {
                                        direction: "vertical",
                                    },
                                    768: {
                                        direction: "vertical",
                                    },
                                }}
                                modules={[Navigation, Thumbs, Mousewheel]}
                            >
                                {/* for (let i = 0; i < slides.findIndex(v => v = null); i++) { */}
                                {slides.map((slide, index) => {
                                    return slide === null ? null : (
                                        <SwiperSlide key={index}>
                                            <div className="slider__image">
                                                <img src={`http://127.0.0.1:8000${slide}`} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        <div className="slider__next">Next</div>
                    </div>

                    <div className="slider__images">
                        <Swiper
                            thumbs={{ swiper: imagesNavSlider }}
                            direction="horizontal"
                            slidesPerView={1}
                            spaceBetween={32}
                            mousewheel={true}
                            navigation={true}
                            pagination={true}
                            breakpoints={{
                                0: {
                                    direction: "horizontal",
                                },
                                768: {
                                    direction: "horizontal",
                                },
                            }}
                            className="swiper-container2"
                            modules={[Navigation, Pagination, Thumbs, Mousewheel]}
                        >
                            {slides.map((slide, index) => {
                                return slide === null ? null : (
                                    <SwiperSlide key={index}>
                                        <div className="slider__image">
                                            <img src={`http://127.0.0.1:8000${slide}`} alt="" />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
