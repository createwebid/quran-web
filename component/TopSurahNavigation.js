import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const TopSurahNavigation = () => {
  const router = useRouter();
  const { number } = router.query;
  return (
    <div className="w-full bg-blue-text fixed top-0 z-30">
      <div className="max-w-screen-md mx-auto p-4 flex flex-row items-center justify-between text-white font-normal text-lg">
        <div className="flex flex-row">
          <Link href="/">
            <a className="flex items-center">
              <Image src="/back.svg" alt="back" height="24px" width="24px" />
            </a>
          </Link>
          <h1 className="text-lg ml-6 font-semibold tracking-wide">
            {`${number}. Surah Al-Baqarah`}
          </h1>
        </div>
        <button className="outline-none flex items-center">
          <Image src="/settings.svg" alt="back" height="22px" width="22px" />
        </button>
      </div>
    </div>
  );
};

export default TopSurahNavigation;
