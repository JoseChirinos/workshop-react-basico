import React from 'react';
import {
  NavLink
} from 'react-router-dom';

class Main extends React.Component{
  render(){
    return (
      <div>
        <section>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/cursos">
            Cursos
          </NavLink>
        </section>
        <section>
          { this.props.children }
        </section>
      </div>
    );
  }
}
export default Main;