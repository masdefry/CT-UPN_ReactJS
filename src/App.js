import './App.css';
import React from 'react';
import TodoItem from './Components/TodoItem';

class App extends React.Component{

  state = {
    todos: ['Makan', 'Olahraga', 'Main']
  } 

  onDeleteData = (idx) => {
    let result = this.state.todos.filter((value, index) =>{
      return index != idx
    })

    this.setState({todos: result})
  }

  onMappingData = () => {
    return this.state.todos.map((value, index) => {
      return <TodoItem todo={value} number={index+1} onDelete={this.onDeleteData} />
    })
  }

  render(){
    return(
      <div>
        <h1>
          Todo Lists
        </h1>
        
        {
          this.onMappingData()
        }
      </div>
    )
  }
}

export default App;
