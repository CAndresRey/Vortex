import Blackboard from "../../components/Blackboard";
import { Expert } from "../../components/Experts";
import Hero, { HeroProps } from "../../components/Hero";
import HowWorks from "../../components/HowWorks";
import Layout from "../../components/Layout";

export type HomeProps = {
  banner: HeroProps;
  experts: Expert[];
};
const HomeLoggedOut = ({ banner, experts }: HomeProps) => {
  return (
    <>
      <Layout>
        <Hero
          title={banner.title}
          text={banner.text}
          buttontext={banner.buttontext}
        />
        <HowWorks expertsData={experts} />
        <Blackboard />
      </Layout>
    </>
  );
};

export default HomeLoggedOut;
