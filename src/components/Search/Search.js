import React, { Component } from "react";

export default class Search extends Component {
  render(props) {
    return (
      <div>
        <form onSubmit={this.props.updateState}>
          <input type="text" name="city" placeholder="City..." />
          <button>Check Air Quality</button>
        </form>
      </div>
    );
  }
}
