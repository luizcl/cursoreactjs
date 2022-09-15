import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [valor, setValor] = useState("");
    const contador = useRef(0);

    useEffect(function() {
        contador.current = contador.current + 1;

    }, [valor]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Contador: </span>
                    <span className="text red">{contador.current}</span>
                </div>

                <input type="text" className="text" value={valor} onChange={e => setValor(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
