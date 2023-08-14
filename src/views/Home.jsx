import React from "react";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import Header from "../layout/MainLayout/Header";
import Footer from "../reusable/Footer";
import HomeCards from "../components/Reusable/HomeCards";
import HomeDiv2 from "../components/Reusable/HomeDiv2";

const Home = () => {
  return (
    <>
      <Header />
      <HomeCards />
      {/* <About /> */}
      <HomeDiv2 />
      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      <Footer />
    </>
  );
};

export default Home;
