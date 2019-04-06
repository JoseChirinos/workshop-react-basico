import React from 'react';
import './hello.css';

class Hello extends React.Component{

  constructor(props){
    super();
    this.state = {
      likes: 0
    }
  }
  componentWillMount(){
    console.log('Se ejecuta antes del render');
  }
  componentDidMount(){
    console.log('Se ejecuta despues del render');
  }

  render(){
    console.log(this.props);
    return (
      <div>

        <h2>
          { this.props.nombre }
          <small>
            Cantidad de Alumnos: 
            { this.props.alumnos }
          </small>

          <small className="like-zone">
            { this.props.likes } Me Gusta - 
            <a href="#" onClick={ ()=>{ this.props.addLike(this.props.index) } }> Like </a>
          </small>

        </h2>

      </div>
      
    )
  }
}

export default Hello;