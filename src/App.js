import React from "react";
import GridLayout from "./components/gridLayout";

export default function App() {
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
        <GridLayout />
      </div>
      <div className="div3">
        <GridLayout />
      </div>
      <div className="div4">
        <GridLayout />
      </div>
      <div className="div5">
        <GridLayout />
      </div>
      <div className="div6">
        <GridLayout />
      </div>
      <div className="div7">
        <GridLayout />
      </div>
      <div className="div8">
        <GridLayout />
      </div>
      <div className="div9">
        <GridLayout />
      </div>
      <div className="div10">
        <GridLayout />
      </div>
      <div className="div11">
        <GridLayout />
      </div>
      <div className="div12">
        <GridLayout />
      </div>
      <div className="div13">
        <GridLayout />
      </div>
    </section>
  );
}
