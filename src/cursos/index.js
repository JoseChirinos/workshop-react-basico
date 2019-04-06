import React, { Component } from 'react';
//import Hello from './hello/index.js';
import Hello from '../hello';
import Drive from '../data/drive';

class Cursos extends Component {
  constructor(props){
    super();
    this.state = {
      cursos: []
    }
  }
  componentDidMount(){
    this.setState({
      cursos: Drive.getLocalCursos()
    })
  }

  addLike = (key)=>{
    console.log(key);
    const newCursos = this.state.cursos;
    newCursos[key].likes = parseInt(newCursos[key].likes) + 1;
  
    this.setState({
      cursos: newCursos
    },()=>{
      Drive.saveCursos( JSON.stringify(this.state.cursos) );
    })
  }

  render() {
    return (
      <section>
        {
          this.state.cursos.map( (curso, index)=>{
            return(
              <Hello
                key = { index }
                nombre = { curso.nombre }
                alumnos = { curso.alumnos }
                likes = { curso.likes }
                index = { index }
                addLike = { this.addLike }
              />      
            )
          })
        }

      </section>
    );
  }
}

export default Cursos;
