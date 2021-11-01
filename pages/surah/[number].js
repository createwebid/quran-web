import React, { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import QuranPage from "../../component/QuranPage";
import { useQueryQuran } from "../../lib/queryQuran";
import BottomNavigation from "../../component/BottomNavigation";
import TopSurahNavigation from "../../component/TopSurahNavigation";
import Loading from "../../component/Loading";

const Surah = () => {
  const { ayah, getAyah, loading } = useQueryQuran();
  const router = useRouter();
  const { number } = router.query;
  useEffect(() => {
    number && getAyah(number);
  }, [number]);
  return (
    <Fragment>
      <TopSurahNavigation
        number={ayah?.numberOfVerses}
        arabicName={ayah?.name.transliteration.id}
      />
      <main>
        {loading ? (
          <Loading sty="h-screen" />
        ) : (
          <div className="max-w-screen-md p-4 mt-2 mb-14 bg-white mx-auto min-h-full">
            <div className="flex flex-col mt-24">
              <div className="w-full p-4 bg-gradient-to-r from-blue-text to-blue-line rounded-lg flex flex-col justify-center">
                <h1 className="w-full text-whitefont-quran text-white text-4xl pt-4 pb-2 flex justify-center">
                  {ayah?.name.long}
                </h1>
                <h2 className="w-full text-white  border-b-2  font-normal text-xl pb-2 flex justify-center">
                  {`${ayah?.name.transliteration.id} / ${ayah?.name.translation.id}`}
                </h2>
                <p className="w-full text-white font-normal text-base pt-2 pb-4 flex justify-center">
                  {`${ayah?.revelation.id} \t-\t ${ayah?.numberOfVerses} Ayat`}
                </p>
              </div>
              {ayah?.number === 1 ? null : (
                <div className="rounded-lg flex justify-center bg-blue-50 font-quran font-medium text-3xl mt-3 py-4">{`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`}</div>
              )}
              {ayah?.verses?.map((item, index) => {
                return (
                  <QuranPage
                    key={index}
                    audioSource={item?.audio.primary}
                    number={item?.number.inSurah}
                    arabText={item?.text.arab}
                    terjemah={item?.translation.id}
                    tafsir={item?.tafsir.id.long}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
      <footer>
        <BottomNavigation />
      </footer>
    </Fragment>
  );
};

export default Surah;
