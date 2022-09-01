import React from "react";

interface Props {
  subTitle: string;
  title: string;
}

const HappeningComponent = ({ subTitle, title }: Props) => {
  return (
    <>
      <div className="">
        {/* SubHeading */}
        <p className="text-sm mt-1 text-gray-500 px-2 ">{subTitle}</p>
        {/* Heading */}
        <p className="text-base mb-1 px-2 ">{title}</p>
      </div>
    </>
  );
};

export default HappeningComponent;
