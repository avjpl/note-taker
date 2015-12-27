import React from 'react';
import NotesList from './NotesList';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h4>Notes for {this.props.username}</h4>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});