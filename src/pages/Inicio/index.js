import Projeto from "components/Projeto";
import styles from "./Inicio.module.css";
import { Fragment } from "react";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/yoko-takano/frontend-api/projects"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProjects(dados);
      });
  }, []);

  return (
    <Fragment>
      <br /> <br /> <br /> <br /> <br />
      <section className={styles.formulario}>
        {projects.map((project) => {
          return <Projeto {...project} key={project.id} />;
        })}
      </section>
    </Fragment>
  );
};

export default Inicio;
