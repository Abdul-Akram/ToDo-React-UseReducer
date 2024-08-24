import React from 'react'
import { useState } from 'react'
import "./Add.css"

export const Add = ({ dispatch
}) => {
    const [inputval, setinputval] = useState('');
    return (
        <div className='Add-con'>
            <form onClick={(e) => e.preventDefault()} className='form'>
                <input type="text" value={inputval} placeholder="Enter a task" onChange={(e) => setinputval(e.target.value)} className='task-in' />
                <button type="submit" className="Add-bt" onClick={() => { dispatch({ type: "Add", payload: inputval }) }}> Add </button>
            </form>
        </div>
    )
}
