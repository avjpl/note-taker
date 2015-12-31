import React from 'react';

const Repos = ({repos}) => {
  return (
    <div>
      <p>User Repos</p>
      <ul className="list-reset">{repos.map((repo, idx) => {
        return (
          <li key={idx}>
            { repo.html_url &&
            <h5>
              <a href={repo.html_url}>{repo.name}</a>
            </h5> }
            { repo.description && <p>{repo.description}</p> }
          </li>
        )
      })}</ul>
    </div>
  );
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
}

export default Repos;