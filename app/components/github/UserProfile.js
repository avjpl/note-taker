import React from 'react';

const UserProfile = ({bio}) => {
  return (
    <ul className="list-reset">
      {bio.avatar_url && <li><img src={bio.avatar_url}/></li>}
      {bio.name && <li>Name: {bio.name}</li>}
      {bio.login && <li>Username: {bio.login}</li>}
      {bio.email && <li>Email: {bio.email}</li>}
      {bio.location && <li>Location: {bio.location}</li>}
      {bio.company && <li>Company: {bio.company}</li>}
      {bio.followers && <li>Followers: {bio.followers}</li>}
      {bio.following && <li>Following: {bio.following}</li>}
      {bio.following && <li>Public Repos: {bio.public_repos}</li>}
      {bio.blog && <li>Blog: <a href={bio.blog}> {bio.blog}</a></li>}
    </ul>
  );
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;