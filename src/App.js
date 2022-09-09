import './App.css';
import React from 'react';
import Axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import TodoItem from './Components/TodoItem/index';
import State from './Components/State';
import Home from './Pages/Home';
import Twit from './Components/Twit';

class App extends React.Component{

  // Lifecycle Method: 1. Mounting(ComponendDidMount), 2. Update(ComponentDidUpdate), 3. Unmount(ComponentWillUnmount)

  state = {
    todos: []
  } 

  // componentDidMount(){
  //   console.log('Component Did Mount Running!')
  // }

  // componentDidUpdate(){
  //   console.log('Component Did Update Running!')
  // }

  // onGetData = () => {
  //   Axios.get('http://localhost:2000/data')
  //   .then((res) => {
  //     this.setState({todos: [...res.data]})
  //   })
  // }
  
  // onDeleteData = (idx) => {
  //   console.log(idx)
  //   let result = this.state.todos.filter((value, index) =>{
  //     return value.id != idx
  //   })

  //   this.setState({todos: result})
  // }

  // onMappingData = () => {
  //   return this.state.todos.map((value) => {
  //     return <TodoItem key={value.id} todo={value.todo} number={value.id} onDelete={this.onDeleteData} />
  //   })
  // }

  render(){
    return(
      <div>
        <Routes>
          <Route path='/todoitem' element={<TodoItem />} />
          <Route path='/state' element={<State />} />
          <Route path='/' element={<Home />} />
          <Route path='/twit' element={<Twit />} />
        </Routes>
        {/* <State /> */}
      </div>
    )
  }
}

export default App;
