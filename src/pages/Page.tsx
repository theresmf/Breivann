import React from "react";
import { NavLink } from "react-router-dom";

const Page: React.FC = (props) => {
  return (
    <>
      <div>
        <NavLink to={"/"} className="navlink">
          Hjem
        </NavLink>
      </div>
      {props.children}
    </>
  );
};

export default Page;
