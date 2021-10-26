import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-gray-200 border-gray-100 fixed top-0 z-30 border-b-2"></div>
  );
};

export default TopNavigation;
