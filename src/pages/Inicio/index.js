import Rodape from "components/Rodape";
import Projeto from "components/Projeto";
import data from "json/db.json";
import styles from "./Inicio.module.css";
import { Fragment } from "react";
import Navbar from "components/Navbar";

const Inicio = () => {
  return (
    <Fragment>
      <div className={styles.home}>
        <Navbar />
        <br /> <br /> <br /> <br /> <br />
        <section className={styles.formulario}>
          {data.map((project) => {
            return <Projeto {...project} key={project.id} />;
          })}
        </section>
        <Rodape />
      </div>
    </Fragment>
  );
};

export default Inicio;
