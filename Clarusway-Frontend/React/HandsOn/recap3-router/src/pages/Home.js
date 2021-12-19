import React from "react";
import Courses from "../components/Courses";
import courseData from "../data/courseData";

import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="mt-3 text-center">Services</h1>
      <Courses data={courseData} />
    </div>
  );
};

export default Home;
