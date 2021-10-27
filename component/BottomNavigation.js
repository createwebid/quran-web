import React, { Fragment, useState } from "react";
import Image from "next/image";
import { useQueryQuran } from "../lib/queryQuran";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();
  const { showTafsir, toggleShowTafsir } = useQueryQuran();
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      {!show ? null : (
        <Fragment>
          <div
            onClick={() => setShow(false)}
            className="opacity-20 fixed inset-0 z-40 bg-black"
          ></div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-gray-100 border border-gray-200 fixed bottom-14 z-50"
          >
            <ul className="max-w-screen-md mx-auto flex flex-col-reverse px-4 text-blue-text font-normal text-base">
              {router.pathname == "/surah/[number]" ? (
                <li className="flex flex-row justify-between h-14 items-center hover:bg-gray-200">
                  <div className="w-full h-full flex flex-row items-center px-1">
                    <Image
                      src="/translate.svg"
                      alt="Menu"
                      height="18px"
                      width="18px"
                    />
                    <span className="ml-4">Tafsir</span>
                  </div>
                  <div className="flex items-center justify-center px-3">
                    <div className="mr-3 font-normal text-base opacity-70">
                      {showTafsir ? "Showed" : "Hidden"}
                    </div>
                    <label
                      htmlFor="toggleB"
                      className="flex flex-row items-center cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleB"
                          readOnly
                          checked={showTafsir}
                          className="sr-only"
                          onClick={() => toggleShowTafsir()}
                        />
                        <div className="bg-dot block bg-red-400 w-10 h-6 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                      </div>
                    </label>
                  </div>
                </li>
              ) : null}
              <li className="flex justify-center h-14  hover:bg-gray-200">
                <button className="w-full h-full flex flex-row items-center px-1">
                  <Image
                    src="/feedback.svg"
                    alt="Menu"
                    height="18px"
                    width="18px"
                  />
                  <span className="ml-4">Kirimkan Masukan</span>
                </button>
              </li>
              <li className="flex justify-center h-14  hover:bg-gray-200">
                <button className="w-full h-full flex flex-row items-center px-1">
                  <Image
                    src="/about.svg"
                    alt="Menu"
                    height="18px"
                    width="18px"
                  />
                  <span className="ml-4">Tentang</span>
                </button>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
      <div
        className={`w-full bg-gray-100 border-t fixed bottom-0 z-50 border-gray-line ${
          !show ? "border-t" : "border-t-0"
        }`}
      >
        <div className="max-w-screen-md max-h-14 mx-auto flex justify-between items-center px-4 pt-3 pb-2">
          <button className="outline-none" onClick={() => setShow(!show)}>
            <Image src="/menu.svg" alt="Menu" height="32px" width="32px" />
          </button>
          <button
            onClick={() => window.scrollTo({ top: 1, behavior: "smooth" })}
            className="px-2 outline-none flex flex-row justify-center items-center"
          >
            <Image
              className="transform rotate-180"
              name="ScrollToTop"
              src="/loadmore.svg"
              alt="Menu"
              height="24px"
              width="24px"
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomNavigation;
