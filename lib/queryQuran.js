import axios from "axios";
import { createContext, useContext, useState } from "react";

const QueryQuranContext = createContext();

export function QueryQuranWrapper({ children }) {
  const [surahList, setSurahList] = useState([]);
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTafsir, setShowTafsir] = useState(false);
  const getSurahList = async () => {
    setLoading(true);
    const res = await axios.get("https://api.quran.sutanlab.id/surah");
    setSurahList(res.data.data);
    setLoading(false);
    return res.data.data;
  };

  const getAyah = async (number) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.quran.sutanlab.id/surah/${number}`
    );
    setAyah(res.data.data);
    setLoading(false);
    return res.data.data;
  };

  const toggleShowTafsir = () => {
    setLoading(true);
    setShowTafsir(!showTafsir);
    setLoading(false);
  };

  return (
    <QueryQuranContext.Provider
      value={{
        showTafsir,
        toggleShowTafsir,
        loading,
        surahList,
        ayah,
        getSurahList,
        getAyah,
        showTafsir,
      }}
    >
      {children}
    </QueryQuranContext.Provider>
  );
}

export function useQueryQuran() {
  return useContext(QueryQuranContext);
}
