import React from "react";
import GridLayout from "./components/gridLayout";
import Images from "./images.json";

export default function App() {
  return <GridLayout image={Images[0].link} />;
}
