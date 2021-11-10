import React, { useEffect, useState, useRef } from "react";
import { useQueryQuran } from "../lib/queryQuran";
import Navigation from "../component/Navigation";
import ListSurahItem from "../component/ListSurahItem";
import Link from "next/link";
import Image from "next/image";
import Loading from "../component/Loading";

const index = () => {
  const [val, setVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const listSurah = useRef([]);
  const { getSurahList, surahList, loading } = useQueryQuran();
  useEffect(() => {
    surahList.length !== 0 ? null : getSurahList();
    listSurah.current = surahList;
    setFilteredData(listSurah.current);
  }, [surahList]);
  useEffect(() => {
    if (val == "") {
      setFilteredData(listSurah.current);
      return;
    }
    const filtered = listSurah.current.filter((surah) =>
      surah.name.transliteration.id.toLowerCase().replace("-", "").includes(val)
    );
    setFilteredData(filtered);
    return;
  }, [val]);
  const doSearch = (e) => {
    e.preventDefault();
    if (val == "") {
      setFilteredData(listSurah.current);
      return;
    }
    const filtered = listSurah.current.filter((surah) =>
      surah.name.transliteration.id.toLowerCase().includes(val)
    );
    setFilteredData(filtered);
    return;
  };
  return (
    <Navigation>
      <main>
        <div className="max-w-screen-md mx-auto px-3 pt-4 pb-4">
          <div className="shadow-xl w-full py-8 bg-gradient-to-r from-blue-text to-blue-line rounded-lg flex flex-col items-center justify-center">
            <Image src="/quran.svg" alt="Menu" height="160px" width="290px" />
          </div>
        </div>
        <div className="max-w-screen-md mx-auto px-3 my-4 sticky top-1">
          <div className="w-full">
            <form
              onSubmit={(e) => doSearch(e)}
              className="bg-white border-2 border-blue-line py-2 px-3 flex justify-between rounde-md rounded-md"
            >
              <input
                value={val}
                onChange={(e) => {
                  setVal(e.target.value.toLowerCase());
                }}
                className="w-32 tracking-wider flex-grow outline-none placeholder-blue-text placeholder-opacity-50 text-blue-text bg-white focus:text-blue-text"
                type="text"
                placeholder="Cari Nama Surah"
              />
              <button aria-label="submit" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-line hover:text-blue-text transition duration-100 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full">
            <ul>
              {filteredData?.map((list) => (
                <li key={list.number}>
                  <Link
                    className="focus:outline-none"
                    href={`/surah/${list.number}`}
                  >
                    <a>
                      <ListSurahItem
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
        )}
      </main>
    </Navigation>
  );
};

export default index;
