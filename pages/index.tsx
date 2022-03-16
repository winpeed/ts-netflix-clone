import type { NextPage } from "next";
import BodyContainer from "../containers/BodyContainer";
import FaqContainer from "../containers/FaqContainer";
import FooterContainer from "../containers/FooterContainer";
import HeroContainer from "../containers/HeroContainer";

const Home: NextPage = () => {
  return (
    <>
      <HeroContainer />
      <BodyContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
