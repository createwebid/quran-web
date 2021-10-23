import React, { Fragment } from "react";
import BottomNavigation from "./BottomNavigation";
import TopNavigation from "./TopNavigation";

const Navigation = ({ children }) => {
  return (
    <Fragment>
      <TopNavigation />
      {children}
      <footer>
        <BottomNavigation />
      </footer>
    </Fragment>
  );
};

export default Navigation;
