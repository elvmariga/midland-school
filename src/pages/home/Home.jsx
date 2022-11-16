import React from "react";
import { Homepage, Intro, Strive, Whatweoffer, Glance , Ourteam, Events, Testimonials } from "../../components";

export const Home = () => {
    return(
      <>
        <Homepage />
        <Intro/>
        <Strive />
        <Glance />
        <Whatweoffer />
        <Events />
        <Ourteam />
        <Testimonials />
      </>
    );
  };