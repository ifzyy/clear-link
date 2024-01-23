import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="lg:flex justify-between  gap-[4%] px-[30px] lg:px-[100px] mt-[100px]">
      <div className=" flex max-w-[547px] flex-col">
        <header className="text-blue-700 text-lg font-semibold leading-7 w-full max-md:max-w-full">
          Support
        </header>
        <h1 className="text-slate-800 text-5xl font-semibold leading-[60px] tracking-tighter w-full mt-3 max-md:max-w-full max-md:text-4xl">
          FAQs
        </h1>
        <div className="text-gray-500  text-[20px] lg:text-2xl leading-8  w-full mt-5 max-md:max-w-full">
          Everything you need to know about the product and billing. Can't find
          the answer you're looking for? Please chat to our friendly team .
        </div>
      </div>
      <ul className="">

      <div className="p-[20px] text-[#475467] text-[15px] font-[inter] bg-[#f9fafb]">
        <li className="flex justify-between font-bold leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">    
        How many participants can join a clealink video conference?
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          </li>
          ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
      </div>
    

        <li className="flex justify-between p-[20px] font-normal leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">
          can i use clearlink on multiple device?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex justify-between p-[20px] font-normal leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">
          is clearlink compatible with other video conferencing platform?{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex justify-between p-[20px] font-normal leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">
          How does clearlink endure the security of my video conferences?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex justify-between p-[20px] font-normal leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">
          Do i need to download any software to use clealink?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li className="flex justify-between p-[20px] font-normal leading-[30px] text-[#101828] text-[18px] font-[inter] font-[600]">
          what kind of customer support do clearlink have?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
