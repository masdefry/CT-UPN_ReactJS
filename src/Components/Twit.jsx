import { useState } from "react"

let Twit = () => {

    let [text, setText] = useState('')

    let onType = (event) =>{
        if(event.target.value.length <= 10){
            return setText(event.target.value)
        }

        alert('Maximum Character 10')
    }

    return(
        <div className="container mt-5">
            <textarea name='text' value={text} onChange={(event) => onType(event)} />
            <h6 style={{ color: text.length === 10? 'red' : 'black'}}>
                {text.length} / 10
            </h6>
            <button className="btn btn-primary">
                Twit
            </button>
        </div>
    )
}

export default Twit