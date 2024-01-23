import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if(isOpen){
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  };

  return (
    <nav className="border border-[color:var(--Gray-300,#D0D5DD)] bg-gray-100 lg:flex justify-between gap-5 px-8 py-4 lg:rounded-[100px] border-solid  lg:m-[30px]">
      <div className="flex justify-between items-center">
        <header className="flex gap-2.5 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a830ed11daf686705e7ae2647f70539222e95a70f523acfa01593378e156d437?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="aspect-[0.89] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
            alt="logo"
          />
          <div className="text-blue-500 text-2xl font-semibold self-stretch grow whitespace-nowrap">
            ClearLink<span className="text-blue-500">.</span>
          </div>
        </header>
  
        <GiHamburgerMenu onClick={toggleMenu} className="lg:hidden"/>
      
      </div>
      <div
        className={`lg:flex  ${
          isOpen ? "block " : "hidden"
        } justify-between items-center`}
      >
        <div className="items-stretch flex justify-between gap-1.5">
          <div className="text-gray-500 text-lg font-semibold leading-7 grow whitespace-nowrap">
            <label htmlFor="products">Products</label>
          </div>
          <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b5d59f2b9d955d9e96c6e67d4bc764c1294616a906e38d52b5c18b8e450904?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              alt="product"
            />
          </button>
        </div>
        <div className="items-stretch flex justify-between gap-1.5">
          <div className="text-gray-500 text-lg font-semibold leading-7 grow whitespace-nowrap">
            <label htmlFor="solutions">Solutions</label>
          </div>
          <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b5d59f2b9d955d9e96c6e67d4bc764c1294616a906e38d52b5c18b8e450904?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              alt="solutions"
            />
          </button>
        </div>
        <div className="items-stretch flex justify-between gap-1.5">
          <div className="text-gray-500 text-lg font-semibold leading-7 grow whitespace-nowrap">
            <label htmlFor="resources">Resources</label>
          </div>
          <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b5d59f2b9d955d9e96c6e67d4bc764c1294616a906e38d52b5c18b8e450904?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              alt="resources"
            />
          </button>
        </div>
        <div className="text-gray-500 text-lg font-semibold leading-7 grow whitespace-nowrap">
          <label htmlFor="pricing">Pricing</label>
        </div>
        <div className="items-stretch flex justify-between lg:flex-row flex-col gap-2 lg:hidden">
          <div className="text-gray-900 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Gray-400,#98A2B3)] shadow-sm bg-white grow px-6 py-3.5 rounded-[100px] border-solid max-md:px-5">
            <button type="button" aria-label="Talk to Sales">
              Talk to sales
            </button>
          </div>
          <div className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch shadow-sm bg-blue-700 grow px-6 py-3.5 rounded-[100px] max-md:px-5">
            <button type="button" aria-label="Sign up for free">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <div className="items-stretch flex justify-between lg:flex-row flex-col gap-2 hidden lg:flex">
          <div className="text-gray-900 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Gray-400,#98A2B3)] shadow-sm bg-white grow px-6 py-3.5 rounded-[100px] border-solid max-md:px-5">
            <button type="button" aria-label="Talk to Sales">
              Talk to sales
            </button>
          </div>
          <div className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch shadow-sm bg-blue-700 grow px-6 py-3.5 rounded-[100px] max-md:px-5">
            <button type="button" aria-label="Sign up for free">
              Sign up for free
            </button>
          </div>
        </div>
    </nav>
  );
};

export default Nav;
