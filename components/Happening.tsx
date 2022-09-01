import React from "react";
import FollowComponent from "./FollowComponent";
import HappeningComponent from "./HappeningComponent";

/* 
TODO: Add Follow Component + Twitter Embed and make What's happening with props 
*/

const Happening = () => {
  return (
    <>
      <div className="w-[260px] rounded-md  shadow-md mt-5 border-[1px] ">
        <h1 className="w-full text-lg font-semibold p-3 ">What's happening</h1>
        <div className=" flex flex-col space-y-2">
          <HappeningComponent
            subTitle="Football . LIVE"
            title="All the latest from transfer deadline day ⚽"
          />
          <HappeningComponent
            subTitle="War in Ukraine . LIVE"
            title="Latest updates on the war on Ukraine"
          />
          <HappeningComponent subTitle="Trending in India" title="Meesho" />
          <HappeningComponent
            subTitle="FC Barcelona . Trending"
            title="Depay"
          />
          <p className="text-base text-blue-500 px-2 py-1 cursor-pointer ">
            Show more
          </p>
        </div>
      </div>

      <div className="w-[260px] rounded-md  shadow-md mt-10 border-2">
        <h1 className="w-full text-lg font-semibold p-3 ">Who to Follow</h1>
        <div className="flex flex-col space-y-2">
          <FollowComponent />
        </div>
      </div>
    </>
  );
};

export default Happening;
