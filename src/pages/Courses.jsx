import React from "react";
import Programs from "../pages/Programs";

function Courses({ CourseObj }) {
  return (
    <div>
      <Programs CourseObj={CourseObj} />
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div className="lg: col-span-2 flex justify-between mt-6">
          <div className="px-12">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] max-w-xs transition duration-300 ease-in-out hover:scale-110">
              {CourseObj.Term},{CourseObj.Date}
            </h1>
            <ul>
              <li>{CourseObj.Course}</li>
              <li>{CourseObj.CourseCode}</li>
            </ul>
          </div>
          <h1>
            {CourseObj.Term},{CourseObj.Date}
          </h1>
          <ul>
            <li>{CourseObj.Course}</li>
            <li>{CourseObj.CourseCode}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;
