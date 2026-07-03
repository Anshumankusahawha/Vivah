import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "New Collection 2026",
    subtitle: "Up to 50% OFF",
    image: "https://picsum.photos/700/450?random=1",
  },
  {
    title: "Latest Electronics",
    subtitle: "Shop Smart Today",
    image: "https://picsum.photos/700/450?random=2",
  },
  {
    title: "Fashion Sale",
    subtitle: "Trending Products",
    image: "https://picsum.photos/700/450?random=3",
  },
];

const HeroSlider = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-5">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 items-center bg-gray-100 rounded-3xl overflow-hidden">

              {/* Left */}
              <div className="p-10">
                <h2 className="text-5xl font-bold mb-4">
                  {item.title}
                </h2>

                <p className="text-2xl text-gray-600 mb-6">
                  {item.subtitle}
                </p>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                  Shop Now
                </button>
              </div>

              {/* Right */}
              <div className="flex justify-center p-8">
                <img
                  src={item.image}
                  alt=""
                  className="w-[500px] rounded-2xl"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HeroSlider;