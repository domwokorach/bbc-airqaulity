import React, { Component } from "react";
import good from "../../img/0-50cig.png";
import moderate from "../../img/51-100cig.png";
import bad from "../../img/101-150cig.png";
import extreme from "../../img/151>cig.png";

export default class AirQuality extends Component {
  getFace() {
    if (this.props.aqi <= 50) {
      return <img src={good} alt="Good" className="aqiFace-white" />;
    } else if (this.props.aqi > 50 && this.props.aqi <= 100) {
      return <img src={moderate} alt="Moderate" className="aqiFace-black" />;
    } else if (this.props.aqi > 100 && this.props.aqi <= 150) {
      return <img src={bad} alt="Bad" className="aqiFace-white" />;
    } else if (this.props.aqi > 150) {
      return <img src={extreme} alt="extreme face" className="aqiFace-white" />;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
        <h1 className="aqi">{this.props.aqi}</h1>
        <h3 className="subtitle">Current Air Quality</h3>
        <br />
        {this.getFace(this.props.aqi)}
      </div>
    );
  }
}
