import React from "react";

function Loading({ sty }) {
  return (
    <div
      className={`max-w-screen-md mx-auto p-4 mt-20 h-full z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center ${sty}`}
    >
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
}

export default Loading;
