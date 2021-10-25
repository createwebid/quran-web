import React, { useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useQueryQuran } from "../../lib/queryQuran";
import BottomNavigation from "../../component/BottomNavigation";
import TopSurahNavigation from "../../component/TopSurahNavigation";

const Surah = () => {
  const { ayah, getAyah } = useQueryQuran();
  const router = useRouter();
  const { number } = router.query;
  useEffect(() => {
    number && getAyah(number);
  }, [number]);
  const toArabicNumber = (s) =>
    s.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  return (
    <Fragment>
      <TopSurahNavigation
        arabicName={ayah?.name.transliteration.id}
        name={ayah?.name.translation.id}
      />
      <main>
        <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full">
          <div className="flex flex-col mt-12">
            {ayah?.number === 1 ? null : (
              <div className="rounded-lg flex justify-center bg-blue-50 font-quran font-medium text-3xl mt-3 py-3">{`\ufeffبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`}</div>
            )}
            {ayah?.verses?.map((item, index) => {
              return (
                <Fragment>
                  <div
                    className={`flex flex-row rounded-t-lg mt-3 ${
                      index % 2 !== 0 ? "bg-blue-50" : "bg-gray-50"
                    }`}
                  >
                    <h1 className="text-4xl p-4 font-quran text-blue-text">{`${toArabicNumber(
                      item.number.inSurah
                    )}`}</h1>
                  </div>
                  <div
                    className={`px-4 flex flex-col rounded-lg ${
                      index % 2 !== 0 ? "bg-blue-50" : "bg-gray-50"
                    }`}
                  >
                    <p
                      className="text-gray-600 py-3 items-end font-quran text-2xl text-right"
                      style={{ lineHeight: 2.5 }}
                    >
                      {item.text.arab}
                    </p>
                    {/* <p className="text-purple-500 py-1 text-left font-normal text-base">
                      Terjemah:
                    </p>
                    <p className="text-gray-500 pb-4 text-left font-normal text-base">
                      {item.translation.id}
                    </p>

                    <p className="text-pink-500 py-1 text-left font-normal text-base">
                      Tafsir:
                    </p>
                    <p className="text-gray-500 pb-4 text-left font-normal text-base">
                      {item.tafsir.id.long}
                    </p> */}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </main>
      <footer>
        <BottomNavigation />
      </footer>
    </Fragment>
  );
};

export default Surah;
