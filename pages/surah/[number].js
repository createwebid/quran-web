import React from "react";
import { useRouter } from "next/router";
import SurahNavigation from "../../component/SurahNavigation";

const Surah = () => {
  const router = useRouter();
  const { number } = router.query;
  return (
    <SurahNavigation>
      <main>
        <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full mt-12">
          Surah Number : {number}
        </div>
      </main>
    </SurahNavigation>
  );
};

export default Surah;
