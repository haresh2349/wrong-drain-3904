import { Box } from "@chakra-ui/react";
import React from "react";
import PricingPlans from "../Components/Pricing/PricingPlans";
import Navbar from "./Navbar";

const Pricing = () => {
  return (
    <>
    <Navbar/>
      <PricingPlans />
    </>
  );
};

export default Pricing;
