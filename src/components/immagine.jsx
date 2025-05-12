import { Component } from "react";

class Immagin extends Component {
  render() {
    console.log("PROPS", this.props);

    return (
      <div className="immagin">
        <img src={this.props.imageSrc} alt="fiore" width={300} />
      </div>
    );
  }
}

export default Immagin;
