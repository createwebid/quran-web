import React from "react";
import Router from "next/router";
import Image from "next/image";

const TopSurahNavigation = ({ number, arabicName, name }) => {
  return (
    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gray-50 border-gray-100 fixed top-0 z-30 border-b-2">
      <div className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-blue-text font-normal text-lg">
        <div className="flex flex-row">
          <button
            className="outline-none flex items-center bg-white rounded-full"
            onClick={() => Router.back()}
          >
            <Image src="/back.svg" alt="back" height="24px" width="24px" />
          </button>
          <h1 className="text-lg ml-6 font-semibold bg-white rounded-full px-2 tracking-wide">
            {`Surah ${arabicName}  (${name})`}
          </h1>
        </div>
        <button className="outline-none flex items-center bg-white rounded-full">
          <Image src="/settings.svg" alt="back" height="22px" width="22px" />
        </button>
      </div>
    </div>
  );
};

export default TopSurahNavigation;
