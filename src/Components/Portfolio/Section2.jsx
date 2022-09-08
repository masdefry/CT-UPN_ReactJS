import React from 'react';
import './Section2.css'

class Section2 extends React.Component{
    render(){
        return(
            <div className="section2">
                <div className="title">
                    <h1 style={{ fontSize: '40px' }}>
                        Profile
                    </h1>
                </div>
                <div>
                    <h1 style={{ fontSize: '20px' }}>
                        About Me 
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum enim ducimus illum voluptas, deserunt veritatis! Ipsa amet beatae eveniet cupiditate perspiciatis ad iusto corrupti voluptas in nam, dolore, aperiam explicabo!
                    </p>
                </div>
                <div className="image">
                    Image
                </div>
                <div>
                    <h1 style={{ fontSize: '20px' }}>
                        Details
                    </h1>
                </div>
            </div>
        )
    }
}

export default Section2