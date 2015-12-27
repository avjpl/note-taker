require('./profile.scss');

import React from 'react';
import Router from 'react-router';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import Repos from 'github/Repos';
import UserProfile from 'github/UserProfile';
import Notes from 'notes/Notes';

export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Adrian Lawrence'
      },
      repos: ['a', 'b', 'c']
    }
  },

  componentDidMount() {
    this.ref = new Firebase('https://r-github-note-tacker.firebaseio.com/');
    const childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },

  componentWillUnmount() {
    this.unbind('notes');
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
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    );
  }
});
