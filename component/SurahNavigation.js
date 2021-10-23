import React, { Fragment } from "react";
import BottomNavigation from "./BottomNavigation";
import TopSurahNavigation from "./TopSurahNavigation";

const SurahNavigation = ({ children }) => {
  return (
    <Fragment>
      <TopSurahNavigation />
      {children}
      <footer>
        <BottomNavigation />
      </footer>
    </Fragment>
  );
};

export default SurahNavigation;
