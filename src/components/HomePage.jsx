import React from "react";
import NavBar from "./common/Navbar";
import SaleAndSearch from "./SaleAndSearch";
import Cards from "./Cards";
const HomePage = () => {
  return (
    <div className="max-w-[430px] px-5 mx-auto">
      <NavBar />
      <SaleAndSearch />
      <Cards />
    </div>
  );
};

export default HomePage;
