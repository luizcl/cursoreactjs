import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, {data} from '../data/DataContext';


const App = props => {
    const [state, setState] = useState(data);

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        });
    }

    return (
        <DataContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState("number", n),
            setText: t => updateState("text", t)}}>

            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App