import React from "react";
import { aboutContent } from "../../allData/allData.js";
import { Icon } from "../Icon/Icon";
import "./Contact.css";

const { gitHub, linkedIn, resume, email } = aboutContent;
const iconInfo = [
  {
    type: "Resume",
    link: resume,
    imageSource: "../assets/cv.png",
    altText: "Resume Icon"
  },
  {
    type: "GitHub",
    link: gitHub,
    imageSource: "../assets/gitHub-black.png",
    altText: "GitHub Icon"
  },
  {
    type: "LinkedIn",
    link: linkedIn,
    imageSource: "../assets/linkedIn.png",
    altText: "LinkedIn Icon"
  },
  {
    type: "Email",
    link: email,
    imageSource: "../assets/email.png",
    altText: "Email Icon"
  }
];

export const Contact = () => {
  const displayIcons = () => {
    return iconInfo.map(source => <Icon source={source} key={source.type} />);
  };

  return <article className="about-icon-container">{displayIcons()}</article>;
};
