import styles from "./TextAbout.module.css";
import Card from "components/Card";

const Projeto = () => {
  return (
    <section className={styles.formulario}>
      <form>
        <table>
          <h3>Sobre Nós</h3>
        </table>
        <p>
          <strong>Visão Geral: </strong>O Hub Tecnologia e Inovação é um pólo
          tecnológico localizado na Escola Superior de Tecnologia da UEA, em
          Manaus/AM. Atualmente composto pelos laboratórios LSE (sistemas
          embarcados) ILUM (química) Indústria 4.0 (integração de tecnologias
          digitais), o Hub tem como missão potencializar o desenvolvimento
          técnico e pessoal de nossos parceiros, fornecendo soluções
          tecnológicas, inovadoras e sustentáveis. Conheça mais sobre nossos
          projetos e acompanhe aqui nosso trabalho.
        </p>
        <p>
          <strong>Setor: </strong>Pesquisa e desenvolvimento Científico
        </p>
        <p>
          <strong>Sede: </strong>Manaus, Amazonas
        </p>
        <p>
          <strong>Fundada em </strong>2015
        </p>
        <p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KyjaFChbQog?si=7055i2M7NzJyLpxT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
      </form>
    </section>
  );
};

export default Projeto;
