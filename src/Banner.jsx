import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Your animation code here */}
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Data Scientist</h1>
          <p className="text-lg">Your one-line summary of experiences</p>
        </div>
        <div>
          <img
            src="path_to_your_portrait_image.jpg"
            alt="Your Portrait"
            className="w-32 h-32 rounded-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
