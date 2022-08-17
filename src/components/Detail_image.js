import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import "swiper/css";
import "../static/css/Detail_image.css"
// import "swiper/css/navigation";
import { useState } from "react";
import duby from "../detail_data.json"

const slides = [
    duby.image1, 
    duby.image2, 
    duby.image3, 
    duby.image4,
    duby.image5,
    duby.image6,
    duby.image7,
    duby.image8,
    duby.image9,
    duby.image10
];

export default function App() {
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
                    spaceBetween={24}
                    slidesPerView={4}
                    mousewheel={true}
                    navigation={{
                    nextEl: ".slider__next",
                    prevEl: ".slider__prev"
                    }}
                    className="swiper-container1"
                    breakpoints={{
                    0: {
                        direction: "vertical"
                    },
                    768: {
                        direction: "vertical"
                    }
                    }}
                    modules={[Navigation, Thumbs, Mousewheel]}
                >
                    {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                        <div className="slider__image">
                            <img src={slide} alt="" />
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
                navigation={{
                    nextEl: ".slider__next",
                    prevEl: ".slider__prev"
                }}
                breakpoints={{
                    0: {
                    direction: "horizontal"
                    },
                    768: {
                    direction: "horizontal"
                    }
                }}
                className="swiper-container2"
                modules={[Navigation, Thumbs, Mousewheel]}
                >
                {slides.map((slide, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <div className="slider__image">
                        <img src={slide} alt="" />
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
