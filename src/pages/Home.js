import React from "react";
import Companyabout from '../component/Companyabout';
import CompanyInfo from '../component/CompanyInfo';
import Forms from '../component/Forms';
import Slider from '../component/Slider'
import Card from '../component/Card';
import Read from "../component/Read";


const Home = () => {
  return (
    <div>
      <Slider />
      <CompanyInfo />
      <Companyabout />
      <Card />
      <Forms />
      <Read />
    </div>
  );
};

export default Home;
