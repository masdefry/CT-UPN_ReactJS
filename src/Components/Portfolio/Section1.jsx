import React from 'react';
import './Section1.css'
import { Link } from 'react-router-dom';

class Section1 extends React.Component{
    render(){
        return(
            <div className="section1">
                <div>
                    
                </div>
                <div>
                    <h1 style={{ fontSize: '100px', backgroundColor: 'white', width: '500px', marginBottom: '10px' }}>
                        Hello!
                    </h1>
                    <span style={{ fontSize: '35px' }}>
                        I'm Defryan, <br />
                        a Frontend Developer
                    </span>

                    <Link to='/todoitem'>
                        Menuju
                    </Link>
                </div>
            </div>
        )
    }
}

export default Section1