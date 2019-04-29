import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  padding: 0 2rem;
`;
export class MainLayout extends Component {
  render() {
    return (
      <div>
        <StyledNavbar className="navbar is-light" role="navigation" aria-label="header-navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h1 className="title is-4"> Witaj w aplikacji ProposEvent! </h1>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-start">
              <a
                className="navbar-item"
                href="https://github.com/wglugla"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
              </a>
              <a
                className="navbar-item"
                href="https://github.com/wglugla/ProposEvent-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Repo
              </a>
              <a
                className="navbar-item"
                href="https://github.com/wglugla/ProposEvent-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Repo
              </a>
            </div>
          </div>
        </StyledNavbar>

        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
