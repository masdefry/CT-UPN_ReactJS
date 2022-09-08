import React from 'react';
import {Link} from 'react-router-dom';

class State extends React.Component{

    state = {
        count: 0,
        count1: 1000
    }

    onCount = () => {
        this.setState({count: 10})
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <h1>
                    {this.state.count1}
                </h1>
                <button className='btn btn-primary' onClick={this.onCount}>Count</button>
                <Link to='/todoitem'>
                    <h1>
                        Goto TodoItem
                    </h1>
                </Link>
            </div>
        )
    }
}

export default State