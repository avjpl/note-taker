require('./profile.scss');

import React from 'react';
import Repos from 'github/Repos';
import UserProfile from 'github/UserProfile';
import Notes from 'notes/Notes';
import helpers from 'utils/helpers';
import Rebase from 're-base';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      bio: {},
      repos: []
    };

    this.base = Rebase.createClass('https://r-github-note-tacker.firebaseio.com');
  }

  componentDidMount() {
    this.init(this.props.params.username);
  }

  componentWillUnmount() {
    this.base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    this.base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  init(username) {
    helpers.getGithubInfo(username)
      .then(data => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        });

        this.ref = this.base.bindToState(this.props.params.username, {
          context: this,
          asArray: true,
          state: 'notes'
        });
      });
  }

  handleAddNote = (newNote) => {
    this.base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    return (
      <div>
        <div className="medium-4 columns">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>

        <div className="medium-4 columns">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
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
}
