import { useRouter } from "next/router";
import HomePage from "../pagescomponents/HomePage";
import Pricing from "../pagescomponents/Pricing";
import ForProperties from "../pagescomponents/ForProperties";
import ForRenters from "../pagescomponents/ForRenters";

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
