import React from "react";
import Courses from "../components/Courses";
import courseData from "../data/courseData";

import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Courses data={courseData} />
    </div>
  );
};

export default Home;
