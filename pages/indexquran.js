import React, { useEffect } from "react";
import { useQueryQuran } from "../lib/queryQuran";
import Navigation from "../component/Navigation";
import QuranListItem from "../component/QuranListItem";
import Link from "next/link";

const indexquran = () => {
  const { getSurahList, surahList } = useQueryQuran();
  useEffect(() => {
    surahList.length !== 0 ? null : getSurahList();
  }, [surahList]);
  return (
    <Navigation>
      <main>
        <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full mt-12">
          <ul>
            {surahList?.map((list) => (
              <li key={list.number}>
                <Link href={`/surah/${list.number}`}>
                  <a>
                    <QuranListItem
                      revelationType={list.revelation.id}
                      arabicName={list.name.short}
                      numOfAyahs={list.numberOfVerses}
                      number={list.number}
                      translation={list.name.translation.id}
                      name={list.name.transliteration.id}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Navigation>
  );
};

export default indexquran;
