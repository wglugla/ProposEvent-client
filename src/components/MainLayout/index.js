import React, { Component } from 'react';

export class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1> ProposEvent </h1>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
