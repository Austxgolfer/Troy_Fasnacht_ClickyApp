import React from "react";
import ImagePlacement from "./imagePlacement";

export default function GridLayout() {
  return (
    <section className="container">
      <div className="div1">
        <ul>
          <li>
            <h2>News</h2>
          </li>
          <li>
            <h2>contact</h2>
          </li>
          <li>
            <h2>about</h2>
          </li>
        </ul>
      </div>
      <div className="div2">
        <ImagePlacement />
      </div>
      <div className="div3">
        <ImagePlacement />
      </div>
      <div className="div4">
        <ImagePlacement />
      </div>
      <div className="div5">
        <ImagePlacement />
      </div>
      <div className="div6">
        <ImagePlacement />
      </div>
      <div className="div7">
        <ImagePlacement />
      </div>
      <div className="div8">
        <ImagePlacement />
      </div>
      <div className="div9">
        <ImagePlacement />
      </div>
      <div className="div10">
        <ImagePlacement />
      </div>
      <div className="div11">
        <ImagePlacement />
      </div>
      <div className="div12">
        <ImagePlacement />
      </div>
      <div className="div13">
        <ImagePlacement />
      </div>
    </section>
  );
}
