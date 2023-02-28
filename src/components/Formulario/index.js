import CampoSelect from "../CampoSelect";
import CampoTexto from "../CampoTexto";

import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <form>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto
            label="Imagem"
            placeholder="Informe o endereço da sua imagem"
        />
        <CampoSelect label="Time" />
        </form>
    </section>
  );
};

export default Formulario;
