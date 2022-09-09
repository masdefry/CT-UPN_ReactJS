import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let About = () => {

    let [count, setCount] = useState(0)

    let onCounting = () => {
        setCount(count + 1)
    }

    useEffect(() => { // Component Did Mount
        alert('Hello, Component Did Mount!')
    }, [])

    useEffect(() => {
        alert('Hello, Component Did Update!')
    }, [count])

    useEffect(() => {
        return () => {
            alert('Thank You')
        }
    }, [])

    return(
        <div>
            <h1>
                Ini Functional Component 
            </h1>
            <h1>
                {count}
            </h1>
            <button className='btn btn-primary' onClick={onCounting}>
                Count
            </button>
            <Link to='/'>
                <h1>
                    Goto Home
                </h1>
            </Link>
        </div>
    )
}

export default About