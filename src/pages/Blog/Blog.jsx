import React from "react";
import BlogHeroSection from "./BlogHeroSection";
import HealthGuide from "./HealthGuide";
import PatientVideoSection from "./PatientVideoSection";
import HealthInfographics from "./HealthInfographics";

const Blog = () => {
  return (
    <div>
      <BlogHeroSection />
      <HealthGuide />
      <PatientVideoSection />
      <HealthInfographics />
    </div>
  );
};

export default Blog;
