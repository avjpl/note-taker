require('./main.scss');

import React from 'react';
import SearchGithub from '../SearchGithub';

export default React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <SearchGithub />

        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
});
