import React from "react";
import TuitsList from "../tuits/TuitsList";
import ExploreComponent from "../explore/index";
import WhatsHappening from "./whats-happening";

const HomeComponent = (
    {
        active="explore"
    }) => {
   return( active === "explore" ? <ExploreComponent/> : <><h1>Home</h1><WhatsHappening/><TuitsList/></>);
};
export default HomeComponent;