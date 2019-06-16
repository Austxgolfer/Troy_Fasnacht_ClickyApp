import React from "react";

class GridLayout extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const pictures = this.props.images;
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
              <h2>Current Successful Clicks: {this.state.count} /High Score</h2>
            </li>
          </ul>
        </div>
        {pictures.map(pic => (
          <span className="imageDiv">
            <img
              className="image"
              key={pic.id}
              src={pic.link}
              onClick={this.handleIncrement}
              alt=""
            />
          </span>
        ))}
        ;
      </section>
    );
  }
}
export default GridLayout;
