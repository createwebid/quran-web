import axios from "axios";
import { createContext, useContext, useState } from "react";

const QueryQuranContext = createContext();

export function QueryQuranWrapper({ children }) {
  const [surahList, setSurahList] = useState([]);
  const [ayah, setAyah] = useState(null);
  const [surahNow, setSurahNow] = useState({});
  const [loading, setLoading] = useState(false);
  const getSurahList = async () => {
    const res = await axios.get("https://api.quran.sutanlab.id/surah");
    setSurahList(res.data.data);
    return res.data.data;
  };

  const setSurahForNow = ({ number, name, arabicName }) => {
    setSurahNow({ number: number, name: name, arabicName: arabicName });
    return { number: number, name: name, arabicName: arabicName };
  };

  const getAyah = async (number) => {
    const res = await axios.get(
      `https://api.quran.sutanlab.id/surah/${number}`
    );
    setAyah(res.data.data);
    return res.data.data;
  };

  return (
    <QueryQuranContext.Provider
      value={{
        surahList,
        setSurahForNow,
        surahNow,
        ayah,
        getSurahList,
        getAyah,
      }}
    >
      {children}
    </QueryQuranContext.Provider>
  );
}

export function useQueryQuran() {
  return useContext(QueryQuranContext);
}
