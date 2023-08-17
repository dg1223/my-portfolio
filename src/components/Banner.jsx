const Banner = () => {
  return (
    <div className="md:flex items-center justify-center py-8 bg-gray-50">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
          SHAMIR ALAVI
        </h1>
        <h1 className="text-md lg:text-xl font-semibold text-gray-800 dark:text-white">
          B.Tech., M.A.Sc.
        </h1>
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">
          Data Scientist | Full-stack Engineer
        </h1>
        <p className="text-base lg:text-lg text-gray-800 dark:text-white mt-2 w-2/3 md:w-1/2">
          Data scientist and software engineer with 8 years of experience in
          leading cross-functional teamsat a large enterprise and at a tech
          start-up
        </p>
      </div>
      <div className="flex justify-center mt-8 md:mt-0">
        <img
          src="https://i.ibb.co/GvJQ8kz/profile-photo-trimmed-no-Canvas.png"
          alt=""
          className="w-1/2 rounded-full"
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
