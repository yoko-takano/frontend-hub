import Projeto from "components/Projeto";
import data from "json/db.json";
import styles from "./Inicio.module.css";
import { Fragment } from "react";

const Inicio = () => {
  return (
    <Fragment>
      <br /> <br /> <br /> <br /> <br />
      <section className={styles.formulario}>
        {data.map((project) => {
          return <Projeto {...project} key={project.id} />;
        })}
      </section>
    </Fragment>
  );
};

export default Inicio;
