import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component{
    render(){
        return(
            <div className='d-flex'>
                <div><h4>{this.props.number}</h4></div>
                <div className='ml-3 mr-3'><h4 className='color-primary'>{this.props.todo}</h4></div>
                <div><button onClick={() => this.props.onDelete(this.props.number)} className='btn btn-danger'>Delete</button></div>
            </div>
        )
    }
}

export default TodoItem;