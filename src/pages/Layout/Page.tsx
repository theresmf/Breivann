import React from "react";
import { NavLink } from "react-router-dom";
import "./Page.css";
import breivann from "../../assets/Breivann.jpeg";

const Page: React.FC = (props) => {
  return (
    <>
      <div className={"navLinkWrap"}>
        <NavLink to={"/"} className="navlink">
          <img id={"homeImage"} src={breivann} alt={"Breivannshytta"} />
        </NavLink>
      </div>
      <PageContent>{props.children}</PageContent>
    </>
  );
};

const PageContent: React.FC = (props) => {
  return <div className="pageContent">{props.children}</div>;
};

export default Page;
