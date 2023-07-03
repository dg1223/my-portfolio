const Banner = () => {
  return (
    <div className="flex items-center">
      <div className="">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
          Best Deal
        </h1>
        <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
          Save upto <span className="font-bold">50%</span>
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="https://i.ibb.co/d7FrQrx/profile-photo-trimmed.png"
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="bg-gray-100 py-10">
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
    </div> */
}
