import React from "react";
import ImagePlacement from "./imagePlacement";

export default function GridLayout(props) {
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
        <ImagePlacement link={props.image} />
      </div>
      <div className="div3">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div4">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div5">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div6">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div7">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div8">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div9">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div10">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div11">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div12">
        <ImagePlacement link={props.image} />
      </div>
      <div className="div13">
        <ImagePlacement link={props.image} />
      </div>
    </section>
  );
}
