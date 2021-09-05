import { useRouter } from "next/router";
import HomePage from "../pagecomponent/HomePage";
import Pricing from "../pagecomponent/Pricing";
import ForProperties from "../pagecomponent/ForProperties";
import ForRenters from "../pagecomponent/ForRenters";

import React from "react";

const Home = () => {
  const router = useRouter();
  const page = router.query.page || "home";
  const whichPage = {
    home: HomePage,
    forrenters: ForRenters,
    forproperties: ForProperties,
    pricing: Pricing,
  };
  const Content = whichPage[page] || HomePage;
  return <Content />;
};

export default Home;
