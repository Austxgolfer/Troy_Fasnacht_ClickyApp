import React from "react";
import GridLayout from "./components/gridLayout";
//import Images from "./images.json";

const Images = [
  {
    id: 0,
    link: "/images/image0.jpg"
  },
  {
    id: 1,
    link: "/images/image1.jpg"
  },
  {
    id: 2,
    link: "/images/image2.jpg"
  },
  {
    id: 3,
    link: "/images/image3.jpg"
  },
  {
    id: 4,
    link: "/images/image4.jpg"
  },
  {
    id: 5,
    link: "/images/image5.jpg"
  },
  {
    id: 6,
    link: "/images/image6.jpg"
  },
  {
    id: 7,
    link: "/images/image7.jpg"
  },
  {
    id: 8,
    link: "/images/image8.jpg"
  },
  {
    id: 9,
    link: "/images/image9.jpg"
  },
  {
    id: 10,
    link: "/images/image10.jpg"
  },
  {
    id: 11,
    link: "/images/image11.jpg"
  }
];

export default function App() {
  return <GridLayout images={Images} />;
}
