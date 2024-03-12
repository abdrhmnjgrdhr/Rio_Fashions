import { NavBar } from "../Components/Home/Navigation/NavBar";
import NavbarBottom from "../Components/Home/Navigation/NavbarBottom";
import Hero from "../Components/Home/Hero/Hero";
import Category from "../Components/Home/Category/Category";
import Banner from "../Components/Home/Banner/Banner";
import Features from "../Components/Home/Features/Features";
import Footer from "../Components/Home/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Banner/>
      <Features/>
    </div>
  );
};
