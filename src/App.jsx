import React from "react";
import { TopNav, Navbar, Home, Footer ,ScrollUp, About ,Contact, ForgotPassword  , Login, Calendar, Password}  from "./pages"
import {Navigate,  Route, Routes } from "react-router-dom";


export const App = () => {
  // const [showModal, setShowModal]= React.useState(false);

  //getting the modalstate state from navbar
  // const getModalState = (modalState) =>{  
  //   setShowModal(modalState) ;
  // }
  return (
    <section>
      <TopNav />
      {/* <Loading/> */}
      <ScrollUp/>
      <Navbar  />
      {/* {showModal && <ModalInquiry getModalState={getModalState}  />} */}

      <Routes>
        {/* navigating to the default route */}
        <Route path="/" element={<Navigate to="/home" />} /> 
        <Route  path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/contactUs" element={<Contact />}/>
        <Route path = "/calendar" element ={<Calendar/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/newpassword" element= {<Password/>}/>
        {/* <Route path="*" element={<ModalInquiry />} /> */}

        
        
      </Routes>
      <Footer />
    </section>
  );
};







