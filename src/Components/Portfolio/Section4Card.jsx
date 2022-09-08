import React from 'react';

class Section4Card extends React.Component{
    
    render(){
        return(
            <div>
                <div class="card">
                    <h1>
                        {this.props.title}
                    </h1>
                    <ul>
                        {
                            this.props.lists.map(value => {
                                return(
                                    <li>
                                        {value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Section4Card