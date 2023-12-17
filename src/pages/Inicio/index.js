import Cabecalho from "components/Cabecalho";
import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import Projeto from "components/Projeto";
import Navbar from "components/Navbar";
import data from "json/db.json";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <fragment>
      <Navbar />
      <Banner imagem="home" />
      <Titulo>
        <h1>Venha conhecer os nossos Projetos</h1>
      </Titulo>

      <section className={styles.formulario}>
        {data.map((project) => {
          return <Projeto {...project} key={project.id} />;
        })}
      </section>
      <Rodape />
    </fragment>
  );
};

export default Inicio;
