import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto py-20">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <div className="flex flex-wrap md:flex-nowrap gap-x-10">
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </div>
    </div>
  );
};

export default Customers;