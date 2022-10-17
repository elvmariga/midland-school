import React from "react";
import { TopNav } from "./components/topNav/TopNav";
import { Navbar } from "./components/navbar/Navbar";
import { Homepage } from "./components/homepage/Homepage";
import { Strive } from "./components/strive/Strive";
import { Glance } from "./components/glance/Glance";
import { Whatweoffer } from "./components/what-we-offer/Whatweoffer";
import { Events } from "./components/events/Events";
import { Ourteam } from "./components/ourTeam/Ourteam";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Footer } from "./components/footer/Footer";
import { History } from "./components/history/History";
import { Mission } from "./components/mission/Mission";
import { Vision } from "./components/vision/Vision";
import { Contact } from "./components/contact/Contact";
import { ModalInquiry } from "./components/modalInquiry/ModalInquiry";

import { Socials } from "./components/socials/Socials";
import { Route, Routes } from "react-router-dom";
export const App = () => {
  const [showModal, setShowModal]= React.useState(false);
  const getModalState = (modalState) =>{  
  setShowModal(modalState) ;
  }
  return (
    <section>
      <TopNav />
      <Navbar getModalState={getModalState} />
      {showModal && <ModalInquiry getModalState={getModalState}  />}

      <Routes>
        <Route path="*" element={<ModalInquiry />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/contactUs" element={<Contact />}
        />
      </Routes>
      <Footer />
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Homepage />
      <Strive />
      <Glance />
      <hr></hr>
      <Whatweoffer />
      <Events />
      <Ourteam />
      <Testimonials />
    </>
  );
};

export const About = () => {
  return (
    <>
      
      <History />
      <Mission />
      <Vision />
    </>
  );
};



