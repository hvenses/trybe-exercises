import React, { Component } from 'react';

const task = (values) => {
  return (
    values.map((item, index) => <li key={index}>{item}</li>)
  );
}

const array = ['tarefa1','tarefa2','tarefa3'];

class Tarefas extends Component {
  render() {
    return (
      <ol>  
        {task(array)}
      </ol>
    )
  }
}

export default Tarefas;