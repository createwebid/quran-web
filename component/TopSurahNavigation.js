import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQueryQuran } from "../lib/queryQuran";

const TopSurahNavigation = ({ arabicName, number }) => {
  const [val, setVal] = useState("");
  const { loading } = useQueryQuran();
  const doSearch = (e) => {
    e.preventDefault();
    if (val < 2) {
      window.scrollTo(0, 0);
      setVal("");
      return;
    }
    if (val > number) {
      document
        .getElementById(number - 1)
        .scrollIntoView({ behavior: "smooth" });
      setVal("");
      return;
    }
    document.getElementById(val - 1).scrollIntoView({ behavior: "smooth" });
    setVal("");
    return;
  };
  return (
    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gray-200 border-gray-100 fixed top-0 z-30 border-b-2">
      <div className="max-w-screen-md mx-auto p-4 flex flex-col items-center justify-between text-blue-text font-normal text-lg">
        <div className="w-full flex flex-row justify-between">
          <Link href="/" className="outline-none flex items-center">
            <a>
              <Image src="/back.svg" alt="back" height="24px" width="24px" />
            </a>
          </Link>
          {loading ? (
            <svg
              fill="none"
              className="w-6 h-6 animate-spin"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <h1 className="text-lg font-semibold tracking-wide">
              {`Surah ${arabicName}`}
            </h1>
          )}
          <div></div>
        </div>

        <div className="w-full mt-2">
          <form
            onSubmit={(e) => doSearch(e)}
            className="bg-blue-text py-1 px-3 flex justify-between rounde-md rounded-md"
          >
            <input
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              className="w-32 tracking-wider flex-grow outline-none placeholder-white placeholder-opacity-50 bg-blue-text text-white focus:text-white"
              type="number"
              placeholder="Navigasi Ayat"
            />
            <button aria-label="search-btn" name="SearchButton" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-white transition duration-100 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopSurahNavigation;
