import React, { Component } from 'react';

export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="Wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>Welcome home</h1>
          <p>Select a function from the sidebar to start.</p>
        </div>
      </div>
    );
  }
}
