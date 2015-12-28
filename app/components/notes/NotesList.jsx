import React from 'react';

export default React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },

  render: function () {
    const notes = this.props.notes.map((item, idx) => {
      return <li key={idx}>{item['.value']}</li>
    });

    return (
      <ul>
        {notes}
      </ul>
    );
  },
});