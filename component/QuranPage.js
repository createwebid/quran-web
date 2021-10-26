import React, { Fragment, useState } from "react";

const QuranPage = ({ number, arabText, terjemah }) => {
  const toArabicNumber = (s) =>
    s.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  return (
    <Fragment>
      <div
        id={number}
        className={`flex flex-row justify-between rounded-t-lg mt-3 ${
          number % 2 !== 0 ? "bg-blue-50" : "bg-gray-50"
        }`}
      >
        <h2 className="text-4xl p-4 font-quran text-blue-text">{`${toArabicNumber(
          number
        )}`}</h2>
      </div>
      <div
        className={`px-4 flex flex-col rounded-lg ${
          number % 2 !== 0 ? "bg-blue-50" : "bg-gray-50"
        }`}
      >
        <p
          className="text-gray-600 py-3 items-end font-quran text-2xl text-right"
          style={{ lineHeight: 2.5 }}
        >
          {arabText}
        </p>
        <p className="text-purple-500 py-1 text-left font-normal text-base">
          Terjemah:
        </p>
        <p className="text-gray-500 pb-4 text-left font-normal text-base">
          {terjemah}
        </p>
        {/*
      <p className="text-pink-500 py-1 text-left font-normal text-base">
        Tafsir:
      </p>
      <p className="text-gray-500 pb-4 text-left font-normal text-base">
        {item.tafsir.id.long}
      </p> */}
      </div>
    </Fragment>
  );
};

export default QuranPage;
