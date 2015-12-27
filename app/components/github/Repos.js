import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <p>Repos</p>
        <p>Repos: {this.props.repos}</p>
      </div>
    );
  }
});