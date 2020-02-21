import React from "react";
import StoryImage from "../Components/Story/StoryImage";
import PartOne from "../Components/Story/PartOne";
import "./Story.css";

const Story = () => {
  return (
    <div className='container'>
      <h4>It all began...with a duck.</h4>
      <StoryImage />
      <PartOne />
    </div>
  );
};

export default Story;
