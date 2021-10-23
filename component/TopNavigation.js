import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-blue-text fixed top-0 z-30">
      <ul className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-white font-normal text-lg">
        <li
          className={`"p-4 ${
            router.pathname == "/" ? "font-semibold" : "font-normal opacity-50"
          }`}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li
          className={`"p-4 ${
            router.pathname == "/indexquran"
              ? "font-semibold"
              : "font-normal opacity-50"
          }`}
        >
          <Link href="/indexquran">
            <a>Index</a>
          </Link>
        </li>
        <li
          className={`"p-4 ${
            router.pathname == "/bookmarks"
              ? "font-semibold"
              : "font-normal opacity-50"
          }`}
        >
          <Link href="/bookmarks">
            <a>Bookmarks</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavigation;
