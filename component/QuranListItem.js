import React from "react";

const QuranListItem = ({
  number,
  name,
  arabicName,
  translation,
  numOfAyahs,
  revelationType,
}) => {
  return (
    <div className="w-full py-4 my-1 flex flex-col">
      <div className="flex flex-row justify-between items-start">
        <h1 className="text-gray-500 font-normal text-lg">{`${number}. ${name} - ${translation}`}</h1>
        <span className="font-semibold text-gray-500 text-2xl font-quran">
          {arabicName}
        </span>
      </div>
      <div className="flex flex-row justify-between items-start mt-3 pb-2 border-b border-blue-line">
        <span className="font-medium text-blue-text text-base">
          {`Jumlah Ayat: ${numOfAyahs}`}
        </span>
        <span className={`font-medium text-blue-text text-base`}>
          {`${revelationType}`}
        </span>
      </div>
    </div>
  );
};

export default QuranListItem;
