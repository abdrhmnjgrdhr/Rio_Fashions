import React from "react";
import { NavBar } from "./Home/Navigation/NavBar";
import NavbarBottom from "./Home/Navigation/NavbarBottom";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import ShoppingCatogaries from "../pages/ShoppingCatogaries";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Footer from "./Home/Footer/Footer";
import BackToTop from "./WatsApp&BackToTop/BackToTop";
import WhatsAppBtn from "./WatsApp&BackToTop/WhatsAppBtn";
import PrivacyPolicy from "../pages/LegalContent/PrivacyPolicy";
import Cart from "../pages/cart";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

const MainNav = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mens_wears" element={<ShoppingCatogaries />} />
        <Route path="/mens_accessories" element={<ShoppingCatogaries />} />
        <Route path="/watches" element={<ShoppingCatogaries />} />
        <Route path="/gadgets" element={<ShoppingCatogaries />} />
        <Route path="/shoes" element={<ShoppingCatogaries />} />

        <Route path="/product" element={<Products/>}>
          <Route path=":productId" element={<Products/>}/>
        </Route>

        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer />
      <WhatsAppBtn />
      <BackToTop />
      <NavbarBottom />
    </>
  );
};

export default MainNav;
