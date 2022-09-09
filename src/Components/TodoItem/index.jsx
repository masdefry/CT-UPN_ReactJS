import React from 'react';
import './TodoItem.css'
import Axios from 'axios';

class TodoItem extends React.Component{

    state = {
        data: [],
        count: 0
    }

    componentDidMount(){
        this.onGetData()
    }

    componentDidUpdate(){
        alert('Fecth Data Success!')
    }

    onGetData = async() => {
        console.log('Running')
        await Axios.get('http://localhost:2000/data')
        .then((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    render(){
        return(
            <div className='container mt-5'>
                
                    {
                        this.state.data.length === 0?
                            <div class="spinner-border text-secondary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        :
                            this.state.data.map(value => {
                                return(
                                    <div className='d-flex'>
                                        <div><h4>{value.id}</h4></div>
                                        <div className='ml-3 mr-3'><h4 className='color-primary'>{value.todo}</h4></div>
                                        <div><button className='btn btn-danger'>Delete</button></div>
                                    </div>
                                )
                            })
                        
                    }
            </div>
        )
    }
}

export default TodoItem;