import React from 'react'
import "./Content.css"

const Content = ({ state, dispatch, handleDelete }) => {

    const handleClick = (id) => {
        dispatch({ type: 'Check', payload: { id } });
    }

    return (
        <div className='main-container'>
            <ul className="listItems">
                {state.Items.map((item) => (
                    <li className='per-Item' key={item.id}>
                        <label className={item.checked ? "Tick" : "not-Tick"}>
                            <input
                                type="checkbox"
                                name={`check-${item.id}`}
                                id={`check-${item.id}`}
                                checked={item.checked}
                                onChange={() => handleClick(item.id)}
                            />
                            <span className="checkbox-label">{item.task}</span>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </label>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
