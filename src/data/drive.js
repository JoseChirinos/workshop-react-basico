import cursos from './cursos.json';

const Drive = {
  getCursos: ()=>{
    return cursos;
  },
  saveCursos: (data)=>{
    localStorage.setItem('cursos', data);
  },
  getLocalCursos:()=>{
    if(localStorage.getItem('cursos') == null){
      return Drive.getCursos();
    }else{
      return JSON.parse(localStorage.getItem('cursos'));
    }
  }
}

export default Drive;