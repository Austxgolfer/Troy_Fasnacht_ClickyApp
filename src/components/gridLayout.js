import React from "react";

export default function GridLayout(props) {
  return (
    <section className="container">
      <div className="div1">
        <ul>
          <li className="inst">
            <h2>
              Click on and image. The board with shuffle than click another
              image. See how long you can go with out clicky the same image
            </h2>
          </li>
          <li className="score">
            <h2>Current Successful Clicks/High Score</h2>
          </li>
        </ul>
      </div>
      {props.images.map(item => (
        <span className="imageDiv">
          <img className="image" key={item.id} src={item.link} />
        </span>
      ))}
      ;
    </section>
  );
}
