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
  }, []);
  return (
    <Fragment>
      <TopSurahNavigation
        number={ayah?.number}
        arabicName={ayah?.name.transliteration.id}
        name={ayah?.name.translation.id}
      />
      <main>
        <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full my-12">
          <div className="flex flex-col">
            {ayah?.verses?.map((item, index) => {
              return (
                <div
                  className={`px-4 flex flex-col ${
                    index % 2 == 0 ? "bg-blue-50" : "bg-gray-50"
                  }`}
                >
                  <p className="text-gray-600 py-4 items-end text-right font-quran text-2xl leading-10">
                    {item.text.arab}
                  </p>
                  <p className="text-gray-500 py-4 text-left font-normal text-base">
                    {item.translation.id}
                  </p>
                </div>
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
