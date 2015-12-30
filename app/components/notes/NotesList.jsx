require('./noteList.scss');

import React from 'react';

export default React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },

  render: function () {
    const notes = this.props.notes.map((item, idx) => {
      return (
        <li key={idx}>
          <span>{item['.value']}</span>
        </li>
      )
    });

    return (
      <ul className="note-list list-reset">
        {notes}
      </ul>
    );
  },
});