import React from 'react';

export default class AddNote extends React.Component {

  setRef = (ref) => {
    this.note = ref;
  }

  handleSubmit = () => {
    const newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input className="input-group-field" type="text" placeholder="Add New Note" ref={this.setRef}/>

        <div className="input-group-button">
          <input type="submit" className="button" value="Submit" onClick={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}
