import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gray-200 border-gray-100 fixed top-0 z-30 border-b-2">
      <ul className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-blue-text font-normal text-lg">
        <li className="w-full flex justify-center">
          <div
            className={`"p-4 ${
              router.pathname == "/" ? "font-normal" : "font-normal opacity-50"
            }`}
          ></div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="w-full flex justify-center">
          <div
            className={`"p-4 ${
              router.pathname == "/indexquran"
                ? "font-normal"
                : "font-normal opacity-50"
            }`}
          ></div>
          <Link href="/indexquran">
            <a>Index</a>
          </Link>
        </li>
        <li className="w-full flex justify-center">
          <div
            className={`"p-4 ${
              router.pathname == "/" ? "font-normal" : "font-normal opacity-50"
            }`}
          ></div>
          <Link href="/bookmarks">
            <a>Bookmarks</a>
          </Link>
        </li>
      </ul>
      <div className="max-w-screen-md mx-auto px-4 flex flex-row justify-between">
        <div
          className={`w-full h-1 ${
            router.pathname == "/" ? "bg-blue-line" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 ${
            router.pathname == "/indexquran" ? "bg-blue-line" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1 ${
            router.pathname == "/bookmarks" ? "bg-blue-line" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TopNavigation;
