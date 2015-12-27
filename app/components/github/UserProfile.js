import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div>
        <p>User Profile!</p>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    );
  }
});