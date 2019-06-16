import React from "react";

class GridLayout extends React.Component {
  state = {
    count: 0,
    clickedImage: []
  };

  handleIncrement = value => {
    let clicked = this.state.clickedImage;
    if (clicked.length >= 1) {
      if (clicked.includes(value)) {
        this.setState({ count: 0 });
        this.setState({ clickedImage: [] });
      } else {
        clicked.push(value);
        this.setState({ count: this.state.count + 1 });
        console.log("click>1", value);
      }
    } else {
      this.setState({ count: this.state.count + 1 });
      clicked.push(value);
      console.log("click=0", value);
    }
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
          <span
            className="imageDiv"
            key={pic.id}
            onClick={() => this.handleIncrement(pic.id)}
          >
            <img className="image" src={pic.link} alt="" />
          </span>
        ))}
        ;
      </section>
    );
  }
}
export default GridLayout;
