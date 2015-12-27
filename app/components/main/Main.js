require('./main.scss');

import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <div className="row top-bar-container">
          <div className="medium-12 columns">
            <nav className="top-bar" role="navigation">
              <div className="top-bar-left">
                Menu
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
});
