import React from 'react';
import NotesList from './NotesList';

export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },

  render: function () {
    return (
      <div>
        <h4>Notes for {this.props.username}</h4>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});