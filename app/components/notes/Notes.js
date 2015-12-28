import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired,
  },

  render: function () {
    return (
      <div>
        <h4>Notes for {this.props.username}</h4>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});