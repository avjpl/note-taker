require('./noteList.scss');

import React from 'react';

const NotesList = ({notes}) => {
  return (
    <ul className="note-list list-reset">
      {notes.map((item, idx) => (
        <li key={idx}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

NotesList.propTypes = {
  notes: React.PropTypes.array.isRequired,
}

export default NotesList;