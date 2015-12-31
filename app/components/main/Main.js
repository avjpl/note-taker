require('./main.scss');

import React from 'react';
import SearchGithub from '../SearchGithub';

export default ({history, children}) => {
  return (
    <div className="main-container">
      <SearchGithub history={history}/>

      <div className="row">
        {children}
      </div>
    </div>
  )
}
