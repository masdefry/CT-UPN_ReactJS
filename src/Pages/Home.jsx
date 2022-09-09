import React from 'react';
import Section1 from './../Components/Portfolio/Section1';
import Section2 from './../Components/Portfolio/Section2';
import Section3 from './../Components/Portfolio/Section3';
import Section4 from './../Components/Portfolio/Section4';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    
    componentWillUnmount(){
        alert('Thank You!')
      }
    render(){
        return(
            <>
            <Link to='/todoitem'>
            <h1>
                Menuju TodoItem 
            </h1>
            </Link>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </>
        )
    }
}

export default Home