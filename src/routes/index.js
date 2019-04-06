import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

/* Components */
import Main from '../main';
import RouterList from './router-list';

class Routes extends React.Component{
  render(){
    return(
      <Router>
        <Main>
          <RouterList/>
        </Main>
      </Router>
    )
  }
}

export default Routes;