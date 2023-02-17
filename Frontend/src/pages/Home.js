import React from "react";
import Announcements from "../components/Announcements/Announcements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import Products from "../components/Products";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
