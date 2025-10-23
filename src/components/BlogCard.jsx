import React from "react";

const BlogCard = ({ image, name, location, bio, status }) => {
  const isOnline = status === "online";

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
      />
      <h2 className="mt-3 font-semibold text-lg">{name}</h2>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="mt-2 text-gray-600 text-sm">{bio}</p>

      <div className="flex items-center mt-3">
        <span
          className={`w-3 h-3 rounded-full mr-2 ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
        <span className="text-sm capitalize">{status}</span>
      </div>

      <button className="mt-4 bg-[#198ae0] text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-[#198ae0] hover:border-[#198ae0] border transition-colors duration-300 ease-in-out">
        Chat Now
      </button>
    </div>
  );
};

export default BlogCard;
