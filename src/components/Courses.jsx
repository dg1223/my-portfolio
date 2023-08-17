import React from "react";

const courses = [
  "Course 1",
  "Course 2",
  "Course 3",
  // Add other courses as strings in the array
];

const Courses = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Courses and Certifications
      </h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <ul className="list-disc list-inside">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
