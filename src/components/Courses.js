import React, { useState } from "react";
import "./stylesheets/Courses.css";
import CourseCard from "./CourseCard";

import Zoom from "react-reveal/Zoom";
import * as assets from "../assets";
import { coursesData } from "../utils/DataFile";

function Courses() {
  return (
    <div className="coursesInnerContainer">
      <h2 id="courses" className="sectionHeading">
        {assets.strings.txt_courses}
      </h2>

      <div className="courseGrid">
        {coursesData &&
          coursesData.map((x) => (
            <Zoom>
              <CourseCard
                id={x.id}
                title={x.title}
                company={x.company}
                url={x.url}
                img={x.img}
              />
            </Zoom>
          ))}
      </div>
    </div>
  );
}

export default Courses;
