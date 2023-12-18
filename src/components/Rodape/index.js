import style from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer className={style.rodape}>
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/hub-tecnologia-e-inova%C3%A7%C3%A3o/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2Flive%2FKyjaFChbQog%3Ffeature%3Dshare&e=AT1AsdOjMUjtmfsXVACQ5WbJF9nnpHYM6xPe8VA1Ayrm3PsltGTSws07rD3tyO_v-yUcSthjsr93xFbUMS23XnxVJw9-knj76e1ljAI9DGehZXpX5uSSQ4Q"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hubtecnologia/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Developed by HUB.</p>
      </section>
    </footer>
  );
};

export default Rodape;
