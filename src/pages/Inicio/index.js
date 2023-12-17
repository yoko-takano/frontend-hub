import Cabecalho from "components/Cabecalho";
import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import Projeto from "components/Projeto";
import data from "json/db.json";
import styles from "./Inicio.module.css";
import { Fragment } from "react";
import Home from "components/Home";
import Navbar from "components/Navbar";

const Inicio = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Banner imagem="home" />
      <Titulo>
        <h1>
          <br />
          Venha conhecer os nossos Projetos
        </h1>
      </Titulo>

      <section className={styles.formulario}>
        {data.map((project) => {
          return <Projeto {...project} key={project.id} />;
        })}
      </section>
      <Rodape />
    </Fragment>
  );
};

export default Inicio;
