import styles from "./TextAbout.module.css";

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
          <strong>Setor: </strong>
          Pesquisa e desenvolvimento Científico
        </p>
        <p>
          <strong>Sede: </strong>
          Manaus, Amazonas
        </p>
        <p>
          <strong>Fundada em 2015</strong>
        </p>
        <p>
          <strong>Localização:</strong>
          <br />
        </p>
        <div className={styles.mapa}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.039126872829!2d-60.02649393766231!3d-3.092055023588807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1aa452bceae3%3A0x23715ad347502792!2sHub%20Technology%20and%20Innovation!5e0!3m2!1sen!2sbr!4v1702921362279!5m2!1sen!2sbr"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            no{" "}
            <a
              href="https://www.google.com/maps/place/Hub+Technology+and+Innovation/@-3.092055,-60.0264939,15z/data=!3m1!4b1!4m6!3m5!1s0x926c1aa452bceae3:0x23715ad347502792!8m2!3d-3.0920765!4d-60.0161942!16s%2Fg%2F1tfff80y?entry=ttu"
              target="_blank"
            >
              Localização do HUB
            </a>
          </iframe>
        </div>
      </form>
    </section>
  );
};

export default Projeto;
