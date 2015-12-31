import React from 'react';
import { History } from 'react-router';

export default class SearchGithub extends React.Component {

  getRef = (ref) => {
    this.usernameRef = ref;
  }

  handleSubmit = () => {
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState(null, '/profile/' + username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row top-bar-container">
          <div className="medium-12 columns">
            <div className="input-group">
              <input className="input-group-field" type="text" placeholder="Add New Note" ref={this.getRef}/>

              <div className="input-group-button">
                <input type="submit" className="button" value="Search Github" />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SearchGithub.propTypes = {
  history: React.PropTypes.object.isRequired,
};