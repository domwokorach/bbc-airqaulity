import React, { Component } from "react";

export default class Search extends Component {
  render(props) {
    return (
      <div>
        <form onSubmit={this.props.updateState}>
          <input
            className="input-put"
            type="text"
            name="city"
            placeholder="City..."
          />
          <button className="btn-search">Get Air Quality</button>
        </form>
      </div>
    );
  }
}
