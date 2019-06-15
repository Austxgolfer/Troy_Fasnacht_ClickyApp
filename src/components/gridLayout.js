import React from "react";
//import ImagePlacement from "./imagePlacement";

export default function GridLayout(props) {
  return (
    <section className="container">
      <div className="div1">
        <ul>
          <li>
            <h2>News</h2>
          </li>
          <li>
            <h2>stuff</h2>
          </li>
          <li>
            <h2>about</h2>
          </li>
        </ul>
      </div>
      <div>
        {props.images.map(item => (
          <span className="imageDiv">
            <img className="image" key={item.id} src={item.link} />
          </span>
        ))}
        ;
      </div>
    </section>
  );
}
