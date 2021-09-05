import { useRouter } from "next/dist/client/router";
import HomePage from "../components/HomePage";
import Pricing from "../components/Pricing";
import ForProperties from "../components/ForProperties";
import ForRenters from "../components/ForRenters";

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
