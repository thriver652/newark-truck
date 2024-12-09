import React from "react";
import { useLocation } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import TopHeader from "./TopHeader";
import Header from "./Header";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection";
import PartScroller from "./PartScroller";
import BrandScroller from "./BrandScroller";
import DidntFind from "./DidntFind/DidntFind";
import JustACall from "./JustACall";
import Cart from "../pages/Cart/Cart";
import FreeShipping from "./FreeShipping";
import Feedback from "./Feedback";
import Subscribe from "./Subscribe";
import Categories from "./Categories";
import VerificationMail from "../pages/SignIn/VerificationMail";
import Parts from "../pages/Parts/Parts";


function Layout({ children }) {
  const location = useLocation();
  const path = location.pathname;
  let content;

  // Using switch-case to handle different paths
  switch (path) {
    case "/signin":
      content = (
        <div className="flex-1">
          <div>{children}</div>
        </div>
      );
      break;

    case "/cart":
      content = (
        <div className="flex-1">
          <Cart />
        </div>
      );
      break;

    case "/categories":
      content = (
        <div className="flex-1">
          <Categories />
        </div>
      );
      break;

    case "/verificationmail":
      content = (
        <div className="flex-1">
          <VerificationMail />
        </div>
      );
      break;

    case "/parts":
      content = (
        <div className="flex-1">
          <Parts />
        </div>
      );
      break;

   

    // Default layout for the homepage and other unspecified routes
    default:
      content = (
        <div className="flex-1">
          <HeroSection />
          <PartScroller />
          <BrandScroller />
          <DidntFind />
          <JustACall />
          <FreeShipping />
          <Feedback />
          <div className="mt-24">
            <Subscribe />
          </div>
        </div>
      );
      break;
  }

  // Checking if the current path is either "/cart" or "/signin" to hide the footer
  const hideFooter = path === "/cart" || path === "/signin";

  return (
    <div className="overflow-hidden">
      {/* Common components for all pages */}
      <AnnouncementBar />
      <TopHeader />
      <Header />

      {/* Render the selected content based on the switch-case result */}
      {content}

      {/* Conditionally render Footer except on the cart and signin pages */}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
