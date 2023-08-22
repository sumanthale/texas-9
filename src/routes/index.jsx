import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// todo lazy loading

import { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import Contact from "../views/Contact";
import AboutView from "../views/AboutView";
import Rates from "../components/Golf/Rates";
import PersonalTraining from "../components/Fitness/PersonalTraining";
import MassageTherapy from "../components/Fitness/MassageTherapy";
import GolfMobility from "../components/Fitness/GolfMobility";
import Yoga from "../components/Fitness/Yoga";
import Memberships from "../components/Golf/Memberships";
import Lessons from "../components/Golf/Lessons";
import Fitness from "../views/Fitness";
import FitnessMembership from "../components/Fitness/FitnessMembership";
import EventView from "../views/EventView";
import Golf from "../views/Golf";
import Tsheet from "../views/Tsheet";
import Services from "../components/Fitness/Services";
import Community from "../views/Community";
const Home = Loadable(lazy(() => import("../views/Home")));

export default function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tee-times" element={<Tsheet />} />
        <Route path="/golf">
          <Route exact path="/golf" element={<Golf />} />
          <Route exact path="/golf/rates" element={<Rates />} />
          <Route exact path="/golf/memberships" element={<Memberships />} />
          <Route exact path="/golf/lessons" element={<Lessons />} />
        </Route>
        <Route path="/fitness">
          <Route exact path="/fitness" element={<Fitness />} />
          <Route exact path="/fitness/services" element={<Services />} />
          {/* <Route
            exact
            path="/fitness/personal-training"
            element={<PersonalTraining />}
          />
          <Route exact path="/fitness/yoga" element={<Yoga />} />
          <Route
            exact
            path="/fitness/massage-therapy"
            element={<MassageTherapy />}
          />
          <Route
            exact
            path="/fitness/golf-mobility"
            element={<GolfMobility />}
          />
        */}
        </Route>
        <Route
          exact
          path="/fitness/fitness-membership"
          element={<FitnessMembership />}
        />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/about" element={<AboutView />} />
        <Route exact path="/event" element={<EventView />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
