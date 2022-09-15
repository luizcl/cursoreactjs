import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';


const UseContext = (props) => {
    const {number, text, setNumber} = useContext(DataContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number -1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
