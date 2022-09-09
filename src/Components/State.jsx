import React from 'react';

class State extends React.Component{

    state = {
        count: 0
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
                <button className='btn btn-primary' onClick={this.onCount}>Count</button>
            </div>
        )
    }
}

export default State