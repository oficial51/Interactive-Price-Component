"use client";

import { useEffect, useState } from "react";
import dice from "../../public/icon-dice.svg";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  async function fetchData() {
    setData([])
    let res = await fetch("https://api.adviceslip.com/advice");
    let advice = await res.json();
    setData(advice.slip);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className=" bg-DarkBlue h-screen w-screen flex justify-center lg:items-center ">
      {loader == true ? (
        <div>loading...</div>
      ) : (
        <div className=" h-max min-h-[320px] lg:[335px] relative w-[345px] lg:w-[540px] flex flex-col items-center bg-[#313A49] bg rounded-xl mt-[133px] lg:mt-0 ">
          <div className="flex flex-col items-center mt-[45px] mx-[30px]">
            <h1 className=" text-sm text-NeonGreen">ADVICE #{data.id}</h1>

            <p className="text-white font-extrabold mt-[35px] text-[28px] text-center">
            &#8220;{data.advice}&#8221;
            </p>

            <div className="bg-mobile bg-center mt-[30px] h-[18px] w-[285px] bg-cover lg:bg-desktop"></div>
            <button
              onClick={fetchData}
              className="p-5 absolute transition-all duration-200 ease-out bottom-[-33px] bg-NeonGreen rounded-full"
            >
              <Image alt="dice" src={dice} className=" "></Image>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
