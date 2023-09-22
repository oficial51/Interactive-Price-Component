"use client";
import check from "../../public/icon-check.svg";

import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";

export default function Home() {
  const size = useWindowSize();
  const [value, setValue] = useState(100000);
  const [discount, setDiscount] = useState(false);

  const quit = () => {
    const input = document.getElementById("first_name");
    input.blur();
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const result = value * 0.00016;
  const toPay = result.toFixed(2);
  const discountWithFloat = toPay - (toPay * 1) / 4;
  const offer = discountWithFloat.toFixed(2);

  return (
    <main className="w-screen bg-[#F1F5FE] circles bg-center bg-no-repeat flex flex-col items-center h-screen">
      <div>
        <h1 className=" text-center text-DarkDesaturatedBlue text-xl titulo mt-[95px] lg:mt-[104px] font-extrabold">
          Simple, traffic-based pricing
        </h1>
        <p className="text-center text-sm mt-[22px] lg:mt-[13px] texto text-GrayishBlue">
          Sign-up for our 30-day trial.
          {size.width > 800 ? " No credit card required." : null}
        </p>
        {size.width > 800 ? null : (
          <p className="text-center text-sm text-GrayishBlue">
            No credit card required.
          </p>
        )}
      </div>
      <div className="h-[480px] w-[330px] lg:w-[540px] lg:h-[400px] mt-[70px] lg:mt-[92px] rounded-lg flex flex-col items-center bg-white ">
        <div className="flex lg:gap-[105px]">
          <p className="text-center mt-[38px] lg:mt-[52px] lg:space tracking-widest uppercase font-semibold text-sm lg:text-base text-GrayishBlue">
            {value / 1000}K pageviews
          </p>
          {size.width < 800 ? null : (
            <>
              <div className="flex mt-[42px]  items-center">
                <span className=" text-DarkDesaturatedBlue text-4xl font-extrabold ">
                  ${discount == false ? toPay : offer}
                </span>
                <span className="ml-[12px]  text-sm text-GrayishBlue">
                  / month
                </span>
              </div>
            </>
          )}
        </div>

        <label htmlFor="">
          <input
            id="first_name"
            type="range"
            min="10000"
            onMouseUp={quit}
            onChange={changeValue}
            step="10000"
            max="200000"
            className=" .slider-progress mt-[34px] cursor-grab focus:cursor-grabbing scale-105 "
          />
        </label>

        <div className=" flex items-center mt-[37px]">
          {size.width > 800 ? null : (
            <>
              <span className=" text-DarkDesaturatedBlue text-3xl font-extrabold ">
                ${discount == false ? toPay : offer}
              </span>
              <span className="ml-[12px] text-sm text-GrayishBlue">
                / month
              </span>
            </>
          )}
        </div>
        <div className="flex lg:w-[540px] justify-center mt-[36px] lg:mt-[12px] ml-[21px]">
          <p className="text-xs text-GrayishBlue">Monthly Billing</p>
          <label className="switch bottom-[2px] lg:mx-[18px] mx-[15px]">
            <input onClick={() => setDiscount(!discount)} type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className="text-xs text-GrayishBlue">
            Yearly Billing
            {size.width < 800 ? (
              <span className=" bg-[#FEECE7] text-[#FF8C66] ml-1 px-2 py-[1px] discount rounded-full">
                -25%
              </span>
            ) : (
              <span className="bg-[#FEECE7] text-[#FF8C66] ml-1 px-2 py-[1px] absolute discount rounded-full">
                25% discount
              </span>
            )}
          </p>
        </div>

        <div className="mt-[38px] bg-[#F1F2F4] w-[330px] lg:w-[540px] h-[2px]"></div>
        <div className="mt-[25px] lg:m-auto flex flex-col lg:w-[540px] lg:h-[153px] lg:gap-[133px] lg:flex-row justify-center items-center">
          <div className="">
            <div className=" text-xs text-GrayishBlue items-center flex">
              <Image
                alt="check icon"
                className="w-[10px] mr-[15px] h-[10px]"
                src={check}
              ></Image>{" "}
              <p>Unlimited websites</p>
            </div>
            <div className=" mt-[9px] text-xs text-GrayishBlue items-center flex">
              <Image
                alt="check icon"
                className="w-[10px] mr-[15px] h-[10px]"
                src={check}
              ></Image>{" "}
              <p>100% data ownership</p>
            </div>
            <div className=" mt-[9px] text-xs text-GrayishBlue items-center flex">
              <Image
                alt="check icon"
                className="w-[10px] mr-[15px] h-[10px]"
                src={check}
              ></Image>{" "}
              <p>Email reports</p>
            </div>
          </div>
          <div className="">
            <button className="mt-[36px] lg:m-auto lg:mr- w-[170px] hover:scale-105 ease-in-out duration-200 font-semibold hover:text-white text-[#B8C4EC] rounded-full bg-[#293454] h-[41px] text-xs">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
