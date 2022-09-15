import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/exemplo" texto="Exemplo Componente" cor="crimson"/>
      <Navegador destino="/estiloso" texto="Texto com estilo" />
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
      <Navegador destino="/cliente/123" texto="Navegação #02" cor="purple"/>
      <Navegador destino="/integracao" texto="Integracao com API #01" cor="#ffa408"/>
      <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#f7a8eb"/>
    </div>
  );
}