import React from "react";

class GridLayout extends React.Component {
  state = {
    count: 0,
    highScore: 0,
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
      }
    } else {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      clicked.push(value);
      this.setState({ highScore: this.state.highScore + 1 });
    }
    if (this.state.count >= this.state.highScore) {
      this.setState({ highScore: this.state.count });
    }
  };

  render() {
    const pictures = this.props.images;
    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }

    return (
      <section className="container">
        <div className="div1">
          <ul>
            <li className="inst">
              <h2>
                Click on and image. The board with shuffle than click another
                image. See how long you can go with out clicking the same image
              </h2>
            </li>
            <li className="score">
              <h2>
                Current Successful Clicks: {this.state.count} /High Score:
                {this.state.highScore}
              </h2>
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
