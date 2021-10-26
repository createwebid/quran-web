import React, { Fragment } from "react";
import BottomNavigation from "./BottomNavigation";
import TopNavigation from "./TopNavigation";

const Navigation = ({ children, bottomMenu }) => {
  return (
    <Fragment>
      <TopNavigation />
      {children}
      <footer>
        <BottomNavigation menu={bottomMenu} />
      </footer>
    </Fragment>
  );
};

export default Navigation;
