import { useAuth0 } from "@auth0/auth0-react";
import { Expert } from "../../components/Experts";
import { HeroProps } from "../../components/Hero";
import HomeLoggedOut from "./HomeLoggedOut";
import HomeLoggedIn from "./HomeLoggedIn";

const HomeContainer = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const Banner: HeroProps = {
    title: "Elevate Your Research Journey",
    text: "Connect with expert academic writers and get personalized support for your research papers.",
    buttontext: "Get Started",
  };

  const sampleExpertsData: Expert[] = [
    //replace with hook to fetch data from api
    {
      name: "Dr. Jane Smith",
      degree: "Ph.D. in Computer Science",
      image: "https://generated.vusercontent.net/placeholder-user.jpg",
    },
    {
      name: "Prof. John Doe",
      degree: "M.Sc. in Artificial Intelligence",
      image: "https://generated.vusercontent.net/placeholder-user.jpg",
    },
    {
      name: "Dr. Emily White",
      degree: "Ph.D. in Mathematics",
      image: "https://generated.vusercontent.net/placeholder-user.jpg",
    },
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return !isAuthenticated ? (
      <HomeLoggedOut banner={Banner} experts={sampleExpertsData} />
    ) : (
      <HomeLoggedIn />
    );
  }
};

export default HomeContainer;
