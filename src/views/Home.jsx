import React from "react";
import About from "../components/Home/About";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import Header from "../layout/MainLayout/Header";
import Footer from "../reusable/Footer";
import HomeCards from "../components/Reusable/HomeCards";
import AboutView from "./AboutView";
import HomeDiv2 from "../components/Reusable/HomeDiv2";

const Home = () => {
  return (
    <>
      <Header />
      <HomeCards/>
      {/* <About /> */}
      <HomeDiv2/> 
      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      <Footer />
    </>
  );
};

export default Home;
