import { useRouter } from "next/dist/client/router";
import HomePage from "../components/Homepage/HomePage";
import Pricing from "../components/Pricing";
import ForProperties from "../components/ForProperties";
import ForRenters from "../components/ForRenters";

export default function Home() {
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
}
