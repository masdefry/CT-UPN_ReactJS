import React from 'react';
import './Section4.css'
import Section4Card from './Section4Card';

class Section4 extends React.Component{
    render(){
        return(
            <div class="section4">
                <div class="title">
                    <h1 style={{ fontSize: '40px', marginBottom: '0px' }}>
                        Capabilities
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                <Section4Card title='Title-1' lists={['List1', 'List2', 'List3']} />
                {/* <Section4Card />
                <Section4Card /> */}
            </div>
        )
    }
}

export default Section4