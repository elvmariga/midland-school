import React from "react";
import {Gallery} from '../../components/Gallery/Gallery'
import { Homepage, Intro, Strive, Whatweoffer,  Glance , Ourteam, Events, Testimonials } from "../../components";

export const Home = () => {
    return(
      <>
        <Homepage />
        <Intro/>
        <Strive />

        <Glance />
        <Whatweoffer />
        <Gallery/>
        <Events />
        <Ourteam />
        <Testimonials />
      </>
    );
  };