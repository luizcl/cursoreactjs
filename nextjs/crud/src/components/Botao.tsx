interface BotaoProps {
    cor?: "green" | "blue" | "gray" | "orange";
    children: any;
    estilo?: string;
    noClick?: () => void;
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray';
    const estiloAlterado = `
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white px-4 py-2 rounded-md
        ${props.estilo ?? ""}
    `;


    return (
        <button onClick={props.noClick} className={estiloAlterado}>
            {props.children}
        </button>
    );
}