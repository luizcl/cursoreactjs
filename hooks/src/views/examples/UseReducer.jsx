import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case "numberAdd2":
            return {...state, number: state.number + 2}
        case "login":
            return {...state, user: {name: action.payload}}
        case "numberMult7":
            return {...state, number: state.number * 7}
        case "numberDiv25":
            return {...state, number: state.number / 25}
        case "parseNumberInt":
            return {...state, number: parseInt(state.number)}
        case "numberAddN":
            return {...state, number: state.number + action.number}
        default:
            return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [num, setNum] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: "numberAdd2"})}>+2</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Não Logado</span>}
                <div>
                    <button className="btn" onClick={() => dispatch({type: "login", payload: "Maria"})}>Login</button>
                </div>
            </div>
            <SectionTitle title="Exercício #03"/>
            <div className="center">
                <div>
                    <button className="btn" onClick={() => dispatch({type: "numberMult7"})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: "parseNumberInt"})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: "numberDiv25"})}>/25</button>
                </div>
                <div>
                    <input type="text" className="input" value={num} onChange={e => setNum(e.target.value)} />
                    <button className="btn" onClick={() => dispatch({type: "numberAddN", number: parseInt(num)})}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
