import Layout from "../components/Layout";

// Estático será invocado apenas 1x
// export function getStaticProps() {
//     return {
//         props: {
//             numero: Math.random()
//         }
//     }
// }

// Dinâmico
export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    );
}