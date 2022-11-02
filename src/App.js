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
import { Login } from "./components/login/Login";
// import {SignUp} from "./components/sign-up/SignUp"
// import { Socials } from "./components/socials/Socials";
import { Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./components/forgot-password/ForgotPassword";
import { Intro } from "./components/intro/Intro";
import { ScrollUp} from "./components/scrollup/ScrollUp";
import { Calendar } from "./components/news/Calendar";
import {Password} from "./components/password/Password";
import { Loading } from "./components/loading/Loading";


export const App = () => {
  const [showModal, setShowModal]= React.useState(false);
  
  const getModalState = (modalState) =>{  
  setShowModal(modalState) ;
  }
  return (
    <section>
      <TopNav />
      {/* <Loading/> */}
      <ScrollUp/>
      <Navbar getModalState={getModalState} />
      {showModal && <ModalInquiry getModalState={getModalState}  />}

      <Routes>
        <Route path="*" element={<ModalInquiry />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/contactUs" element={<Contact />}/>
        <Route path = "/calendar" element ={<Calendar/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/newpassword" element= {<Password/>}/>
        
        
      </Routes>
      <Footer />
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Homepage />
      <Intro/>
      <Strive />
      <Glance />
      {/* <hr></hr> */}
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



