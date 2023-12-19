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
