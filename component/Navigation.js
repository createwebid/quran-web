import React, { Fragment } from "react";
import BottomNavigation from "./BottomNavigation";

const Navigation = ({ children, bottomMenu }) => {
  return (
    <Fragment>
      {children}
      <footer>
        <BottomNavigation menu={bottomMenu} />
      </footer>
    </Fragment>
  );
};

export default Navigation;
