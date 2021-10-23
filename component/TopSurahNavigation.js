import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const TopSurahNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-blue-text fixed top-0 z-30">
      <div className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-white font-normal text-lg">
        <Link href="/">
          <a>
            <Image src="/back.svg" alt="back" height="24px" width="24px" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TopSurahNavigation;
