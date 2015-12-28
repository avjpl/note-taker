import React from 'react';

export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      <div>
        <p>Repos</p>
        <p>Repos: {this.props.repos}</p>
      </div>
    );
  }
});