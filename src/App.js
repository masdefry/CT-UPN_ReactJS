import './App.css';
import React from 'react';
import Axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Section1 from './Components/Portfolio/Section1';
import Section2 from './Components/Portfolio/Section2';
import Section3 from './Components/Portfolio/Section3';
import Section4 from './Components/Portfolio/Section4';

class App extends React.Component{

  state = {
    todos: []
  } 

  onGetData = () => {
    Axios.get('http://localhost:2000/data')
    .then((res) => {
      this.setState({todos: [...res.data]})
    })
  }
  
  onDeleteData = (idx) => {
    let result = this.state.todos.filter((value, index) =>{
      return index != idx
    })

    this.setState({todos: result})
  }

  // onMappingData = () => {
  //   return this.state.todos.map((value) => {
  //     return <TodoItem todo={value.todo} number={value.id} onDelete={this.onDeleteData} />
  //   })
  // }

  render(){
    return(
      <div>
        {/* <h1>
          Todo Lists
        </h1> */}
        
        {/* {
          this.onMappingData()
        }

        <button className='btn btn-warning' onClick={this.onGetData}>On Get Data</button> */}
        {/* <Routes>
          <Route path='/todoitem' element={<TodoItem />} />
          <Route path='/state' element={<State />} />
        </Routes> */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    )
  }
}

export default App;
