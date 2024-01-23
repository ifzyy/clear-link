import React, { useEffect } from "react";
import Companies from "./Companies";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <Companies />
      <div className="flex flex-col px-10 lg:px-40 mt-[70px] lg:mt-[100px]">
        <header data-aos="zoom-in-right" className="text-blue-700 text-lg leading-7 font-normal font-[600] w-full max-md:max-w-full">
          The ClearLink Advantage
        </header>
        <h1 data-aos="zoom-in-left" className="text-[#1d2939] text-[48px] font-[600] leading-[60px] tracking-tighter w-full mt-3 max-md:max-w-full max-md:text-4xl font-[inter]">
          Why choose ClearLink?
        </h1>
        <p data-aos="zoom-in-up" className="text-gray-500 text-[22px] leading-8 w-[690px] mt-5 max-md:max-w-full">
          In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="flex xl:flex-row flex-col-reverse justify-center items-center lg:px-40 px-[30px] gap-[20px] mt-[100px] mb-[100px]">
        <div className="grid md:grid-cols-2 px-[30px] gap-[4%] md:max-lg:mb-[150px] ">
          <div data-aos="fade-right" className="flex max-w-[360px] flex-col items-start shadow-md p-[20px]">
            <header className="justify-center items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex aspect-square flex-col w-14 h-14 px-4 rounded-[100px] border-solid">
              <div>
                <img loading="lazy" src="images/video.png" className="aspect-square object-contain object-center w-full overflow-hidden" alt="Video Icon"/>
              </div>
            </header>
            <div className="text-gray-900 text-2xl font-semibold leading-8 self-stretch w-full mt-5">
              Crystal-clear HD video
            </div>
            <div className="text-slate-600 text-[18px] leading-7 self-stretch w-full mt-2">
              No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.
            </div>
          </div>
          <div data-aos="fade-left" className="flex max-w-[360px] flex-col items-start shadow-md p-[20px]">
            <header className="justify-center items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex aspect-square flex-col w-14 h-14 px-4 rounded-[100px] border-solid">
              <div>
                <img loading="lazy" src="images/sound.png" className="aspect-square object-contain object-center w-full overflow-hidden" alt="Sound Icon"/>
              </div>
            </header>
            <div className="text-gray-900 text-2xl font-semibold leading-8 self-stretch w-full mt-5">
              Noise-canceling audio
            </div>
            <div className="text-slate-600 text-[18px] leading-7 self-stretch w-full mt-2">
              Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.
            </div>
          </div>
          <div data-aos="fade-right" className="flex max-w-[360px] flex-col items-start shadow-md p-[20px]">
            <header className="justify-center items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex aspect-square flex-col w-14 h-14 px-4 rounded-[100px] border-solid">
              <div>
                <img loading="lazy" src="images/calendar.png" className="aspect-square object-contain object-center w-full overflow-hidden" alt="Calendar Icon"/>
              </div>
            </header>
            <div className="text-gray-900 text-2xl font-semibold leading-8 self-stretch w-full mt-5">
              Scheduling made easy
            </div>
            <div className="text-slate-600 text-[18px] leading-7 self-stretch w-full mt-2">
              Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.
            </div>
          </div>
          <div data-aos="fade-left" className="flex max-w-[360px] flex-col items-start shadow-md p-[20px]">
            <header className="justify-center items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex aspect-square flex-col w-14 h-14 px-4 rounded-[100px] border-solid">
              <div>
                <img loading="lazy" src="images/lock.png" className="aspect-square object-contain object-center w-full overflow-hidden" alt="Lock Icon"/>
              </div>
            </header>
            <div className="text-gray-900 text-2xl font-semibold leading-8 self-stretch w-full mt-5">
              Bank-grade security
            </div>
            <div className="text-slate-600 text-[18px] leading-7 self-stretch w-full mt-2">
              Ensure your team's privacy with our top-of-the-line security measures, keeping your conversations confidential and secure.
            </div>
          </div>
        </div>
        <img data-aos="zoom-in" src="images/main.png" className="w-[70%] lg:w-auto" alt="Main Feature Visualization"/>
      </div>
      <Testimonial />
      <Faq />
      <div className="flex xl:flex-row flex-col gap-[20px] justify-between px-[30px] lg:pl-[100px] mt-[150px]">
        <div data-aos="fade-right">
          <h2 className="text-[#101828] font-[inter] text-[30px] lg:text-[48px] font-normal font-[600] lg:w-[700px] tracking-[-0.96px] leading-[35px] lg:leading-[60px]">
            Ready to clear the path to perfect communication?
          </h2>
          <ul>
          <li className="flex items-center gap-[1%] text-[#475467] p-[10px]">
<svg
  width="28"
  height="29"
  viewBox="0 0 28 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="check-circle">
    <path
      id="Icon"
      d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
      stroke="#175CD3"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>
30 days free trial
</li>
<li className="flex items-center gap-[1%] text-[#475467] p-[10px]">
<svg
  width="28"
  height="29"
  viewBox="0 0 28 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="check-circle">
    <path
      id="Icon"
      d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
      stroke="#175CD3"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>
Cancel at anytime
</li>
<li className="flex items-center gap-[1%] text-[#475467] p-[10px]">
<svg
  width="28"
  height="29"
  viewBox="0 0 28 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="check-circle">
    <path
      id="Icon"
      d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
      stroke="#175CD3"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>
Access to all feature
</li>
<li className="flex items-center gap-[1%] text-[#475467] p-[10px]">
<svg
  width="28"
  height="29"
  viewBox="0 0 28 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="check-circle">
    <path
      id="Icon"
      d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
      stroke="#175CD3"
      stroke-width="2.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>
Personalized onboarding
</li>
          </ul>
          <div className="flex gap-[2%] mt-[30px]">
            <button className="px-[10px] lg:px-[24px] py-[14px] border-[#98a2b3] rounded-[20px] lg:rounded-[100px] border-[2px]">
              Talk to sales
            </button>
            <button className="bg-[#175CD3] text-white px-[10px] lg:px-[24px] py-[14px] rounded-[20px] lg:rounded-[100px]">
              Start your free trial
            </button>
          </div>
        </div>
        <img data-aos="fade-left" src="images/mockup.png" className="w-[]" alt="Product Mockup"/>
      </div>
    </div>
  );
};

export default Main;
