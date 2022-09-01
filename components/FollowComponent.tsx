import React from "react";
import { TwitterFollowButton } from "react-twitter-embed";

const FollowComponent = () => {
  return (
    <div className="mb-5">
      <div className="px-2">
        <TwitterFollowButton
          onLoad={function noRefCheck() {}}
          options={{
            size: "large",
          }}
          screenName="JHALA_D_S"
        />
      </div>
    </div>
  );
};

export default FollowComponent;
