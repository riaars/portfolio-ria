import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <div className="nav-center">
          <div className="nav-header">
            {/* <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}></button> */}
          </div>

          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <button
              className="btn btn-outline-primary"
              style={{borderRadius: 50}}>
              Say Hello
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
