import React from "react";
import FeaturedProduct from "../featuredProduct/featuredProduct";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import NewArrival from "../NewArrival/NewArrival.jsx";

export default function Home({ userData }) {
  return (
    <>
      <MainSlider></MainSlider>
      <CategorySlider></CategorySlider>
      <FeaturedProduct></FeaturedProduct>
      <NewArrival/>
    </>
  );
}
