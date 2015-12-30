require('./profile.scss');

import React from 'react';
import Router from 'react-router';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import Repos from 'github/Repos';
import UserProfile from 'github/UserProfile';
import Notes from 'notes/Notes';
import helpers from 'utils/helpers';

export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  componentDidMount() {
    this.ref = new Firebase('https://r-github-note-tacker.firebaseio.com/');
    this.init(this.props.params.username);
  },

  componentWillUnmount() {
    this.unbind('notes');
  },

  componentWillReceiveProps(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },

  init(username) {
    const childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      });
  },

  handleAddNote: function(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  render: function() {
    return (
      <div>
        <div className="medium-4 columns">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>

        <div className="medium-4 columns">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>

        <div className="medium-4 columns">
          <Notes username={this.props.params.username}
                 notes={this.state.notes}
                 addNote={this.handleAddNote}
            />
        </div>
      </div>
    );
  }
});
