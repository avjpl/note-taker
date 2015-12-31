import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({notes, username, addNote}) => {
  return (
    <div>
      <h4>Notes for {username}</h4>
      <AddNote username={username} addNote={addNote}/>
      <NotesList notes={notes}/>
    </div>
  ); 
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired,
};

export default Notes;