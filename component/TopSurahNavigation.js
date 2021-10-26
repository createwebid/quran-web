import React from "react";
import Router from "next/router";
import Image from "next/image";

const TopSurahNavigation = ({
  revelation,
  numberOfVerses,
  number,
  arabicName,
  name,
}) => {
  return (
    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gray-200 border-gray-100 fixed top-0 z-30 border-b-2">
      <div className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-blue-text font-normal text-lg">
        <div className="flex flex-row">
          <button
            className="outline-none flex items-center"
            onClick={() => Router.back()}
          >
            <Image src="/back.svg" alt="back" height="24px" width="24px" />
          </button>
          <p className="sm:block hidden text-lg ml-4 font-normal px-2 tracking-wide">
            {`${numberOfVerses} Ayat`}
          </p>
        </div>
        <h1 className="text-lg ml-6 font-semibold px-2 tracking-wide">
          {`${number}. Surah ${arabicName}  (${name})`}
        </h1>
        <h2 className="md:block hidden text-md mr-4 font-normal px-2 tracking-wide">
          {`${revelation}`}
        </h2>
      </div>
    </div>
  );
};

export default TopSurahNavigation;
