import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Swiper
      data-aos="zoom in"
      grabCursor={true}
      loop={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
      className="mySwiper2"
    >
      <SwiperSlide>
        <div className="flex xl:flex-row flex-col justify-center items-center  px-[30px] pt-[30px] lg:p-[100px] gap-[4%] bg-[#f9fafb]">
          <div className="grid ">
            <img src="images/shopifysvg.png" alt="Shopify Logo" />
            <img src="images/stars.png" alt="Rating Stars" />
            <p className="lg:text-[40px] mb-[10px] text-[24px] font-[inter] font-normal font-[500] lg:leading-[60px] tracking-[-0.88px] text-[#101828] ">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <img src="images/attr.png" alt="Testimonial Attribution" />
          </div>
          <img src="images/testimonial.png" alt="Testimonial" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="xl:flex justify-center p-[20px] lg:p-[100px] gap-[4%] bg-[#f9fafb]">
          <div className="">
            <img src="images/shopifysvg.png" alt="Shopify Logo" />
            <img src="images/stars.png" alt="Rating Stars" />
            <p className="lg:text-[40px] text-[24px] mb-[10px] font-[inter] font-normal font-[500] lg:leading-[60px] tracking-[-0.88px] text-[#101828]">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <img src="images/attr.png" alt="Testimonial Attribution" />
          </div>
          <img src="images/testimonial.png" alt="Testimonial" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonial;
