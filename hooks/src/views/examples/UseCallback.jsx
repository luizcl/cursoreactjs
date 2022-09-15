import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
    const [contador, setContador] = useState(0);

    const incrementar = useCallback(function(delta) {
        setContador(valorCorrente => valorCorrente + delta);
    }, [setContador]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <SectionTitle title="Exercício #01 - Função renderizada somente 1x"/>
            <div className="center">
                <span className="text">{contador}</span>
                <UseCallbackButtons inc={incrementar} />
            </div>
        </div>
    )
}

export default UseCallback
