import React from 'react'
import Content from '../Components/Content'
import "./Home.css"
import { Add } from '../Components/Add'
import Search from '../Components/Search'
import Header from '../Components/Header'

const Home = ({ state, dispatch, handleDelete }) => {

    return (
        <div className='home-container
        '>
            <Header />
            <Add dispatch={dispatch} />
            <Search dispatch={dispatch} />
            <Content state={state} dispatch={dispatch} handleDelete={handleDelete} />
        </div>
    )
}

export default Home