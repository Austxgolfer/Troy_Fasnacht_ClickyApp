import React from "react";
import GridLayout from "./components/gridLayout";
//import Images from "./images.json";

const Images = [
  {
    id: 0,
    link: "../public/images/image0.jpg"
  },
  {
    id: 1,
    link: "../public/images/image1.jpg"
  },
  {
    id: 2,
    link: "../public/images/image2.jpg"
  },
  {
    id: 3,
    link: "../public/images/image3.jpg"
  },
  {
    id: 4,
    link: "../public/images/image4.jpg"
  },
  {
    id: 5,
    link: "../public/images/image5.jpg"
  },
  {
    id: 6,
    link: "../public/images/image6.jpg"
  },
  {
    id: 7,
    link: "../public/images/image7.jpg"
  },
  {
    id: 8,
    link: "../public/images/image8.jpg"
  },
  {
    id: 9,
    link: "../public/images/image9.jpg"
  },
  {
    id: 10,
    link: "../public/images/image10.jpg"
  },
  {
    id: 11,
    link: "../public/images/image11.jpg"
  }
];

export default function App() {
  return <GridLayout images={Images} />;
}
