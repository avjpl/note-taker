import React from 'react';

export default React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },

  render: function() {
    const repos = this.props.repos.map((repo, idx) => {
      return (
        <li key={idx}>
          {
            repo.html_url &&
            <h5>
              <a href={repo.html_url}>{repo.name}</a>
            </h5>
          }
          {
            repo.description &&
              <p>{repo.description}</p>
          }
        </li>
      )
    });

    return (
      <div>
        <p>User Repos</p>
        <ul className="list-reset">{repos}</ul>
      </div>
    );
  }
});