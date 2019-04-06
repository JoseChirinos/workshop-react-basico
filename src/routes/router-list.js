import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

/* Components */
import Home from '../home';
import Cursos from '../cursos';

const RouterList = ()=>{
  return (
    <Switch>
      <Route path="/cursos" component={ Cursos } />
      <Route path="" component={ Home } />
    </Switch>
  );
}

export default RouterList;
