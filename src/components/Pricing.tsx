import React from "react";
import Wordbreak from "./Wordbreak";
import { FaLock } from "react-icons/fa";
import price1 from "@/assets/imgs/price1.png";
import price2 from "@/assets/imgs/price2.png";
import price3 from "@/assets/imgs/price3.png";
import price4 from "@/assets/imgs/price4.png";
import { TiTick } from "react-icons/ti";

const Pricing: React.FC = () => {
  const data = [
    " Free Home Delivery",
    "Monthly Five Comic Books",
    "Download Limited Assets",
    "Free Comic Arts",
  ];

  return (
    <div className="container bg-green-500 py-10 space-y-10">
      <div className="space-y-4">
        <div className="text-[#d71515] lineBefore text-3xl">Price Plan</div>
        <div className="font-extrabold text-white text-6xl leading-[1.15]">
          Read Comics <Wordbreak /> Everyday.
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex bg-white items-center justify-between">
          <div className="hover:scale-105 transition-all duration-700 ease-in-out bg-white text-center w-full space-y-4 py-6 px-6">
            <div className="text-center">
              <div className="text-2xl font-semibold">Starter</div>
              <div className="text-gray-500 text-lg">Per Month</div>
            </div>
            <div className="m-auto">
              <img className="m-auto" src={price1} />
            </div>
            <div className="text-center font-bold text-4xl">Free</div>
            <div className="space-y-2">
              {data?.map((item: string) => {
                return (
                  <div className="flex items-center gap-2">
                    <TiTick className="text-primary text-2xl" />
                    {item}
                  </div>
                );
              })}
            </div>
            <button className="bg-gray-700 font-semibold text-white px-9 py-3 rounded-full w-fit">
              Free Account
            </button>
          </div>
          <div className="hover:scale-105 transition-all duration-700 ease-in-out bg-white text-center w-full space-y-4 py-6 px-6">
            <div className="text-center">
              <div className="text-2xl font-semibold">Basic</div>
              <div className="text-gray-500 text-lg">Per Month</div>
            </div>
            <div className="m-auto">
              <img className="m-auto" src={price2} />
            </div>
            <div className="text-center font-bold text-4xl">$5.99</div>
            <div className="space-y-2">
              {data?.map((item: string) => {
                return (
                  <div className="flex items-center gap-2">
                    <TiTick className="text-primary text-2xl" />
                    {item}
                  </div>
                );
              })}
            </div>
            <button className="bg-gray-700 font-semibold text-white px-9 py-3 rounded-full w-fit">
              Free Account
            </button>
          </div>
          <div className="hover:scale-105 transition-all duration-700 ease-in-out bg-primary relative bottom-[2rem] rounded-md text-white text-center w-full space-y-4 py-6 px-6">
            <div className="">
              <div className="text-2xl font-semibold">Recommended</div>
              <div className="text-white text-lg">Per Month</div>
            </div>
            <div className="">
              <img className="mx-auto airplane-image" src={price3} />
            </div>
            <div className="text-center font-bold text-4xl">$19.9</div>
            <div className="space-y-2">
              {data?.map((item: string) => {
                return (
                  <div className="flex items-center gap-2">
                    <TiTick className="text-white text-2xl" />
                    {item}
                  </div>
                );
              })}
            </div>
            <button className="bg-white font-semibold text-primary px-9 py-3 rounded-full w-fit">
              Free Account
            </button>
          </div>
          <div className="hover:scale-105 transition-all duration-700 ease-in-out bg-white text-center w-full space-y-4 py-6 px-6">
            <div className="text-center">
              <div className="text-2xl font-semibold">Superstars</div>
              <div className="text-gray-500 text-lg">Per Month</div>
            </div>
            <div className="m-auto">
              <img className="m-auto" src={price4} />
            </div>
            <div className="text-center font-bold text-4xl">$29.9</div>
            <div className="space-y-2">
              {data?.map((item: string) => {
                return (
                  <div className="flex items-center gap-2">
                    <TiTick className="text-primary text-2xl" />
                    {item}
                  </div>
                );
              })}
            </div>
            <button className="bg-gray-700 font-semibold text-white px-9 py-3 rounded-full w-fit">
              Free Account
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-primary underline font-medium text-lg">
            Ask Any Question
          </div>
          <div className="flex items-center justify-center text-gray-500 gap-2">
            <FaLock /> All Payments Are Highly Secured.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;