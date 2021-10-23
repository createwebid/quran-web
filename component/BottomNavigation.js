import React, { Fragment, useState } from "react";
import Image from "next/image";

const BottomNavigation = () => {
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
            className="w-full bg-white fixed bottom-14 z-50"
          >
            <ul className="max-w-screen-md mx-auto flex flex-col-reverse px-4 text-blue-text font-semibold text-base">
              <li className="flex justify-center h-14 bg-white hover:bg-gray-200">
                <button className="w-full h-full flex flex-row items-center px-2">
                  <Image
                    src="/translate.svg"
                    alt="Menu"
                    height="18px"
                    width="18px"
                  />
                  <span className="ml-4">Select Translation</span>
                </button>
              </li>
              <li className="flex justify-center h-14 bg-white hover:bg-gray-200">
                <button className="w-full h-full flex flex-row items-center px-2">
                  <Image
                    src="/feedback.svg"
                    alt="Menu"
                    height="18px"
                    width="18px"
                  />
                  <span className="ml-4">Send Feedback</span>
                </button>
              </li>
              <li className="flex justify-center h-14 bg-white hover:bg-gray-200">
                <button className="w-full h-full flex flex-row items-center px-2">
                  <Image
                    src="/about.svg"
                    alt="Menu"
                    height="18px"
                    width="18px"
                  />
                  <span className="ml-4">About Us</span>
                </button>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
      <div className="w-full bg-white fixed bottom-0 z-50 border-t border-gray-line ">
        <div className="max-w-screen-md mx-auto flex justify-between items-center px-4 pt-3 pb-2">
          <button onClick={() => setShow(!show)}>
            <Image src="/menu.svg" alt="Menu" height="32px" width="32px" />
          </button>
          <button>
            <Image src="/search.svg" alt="Menu" height="28px" width="28px" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomNavigation;
