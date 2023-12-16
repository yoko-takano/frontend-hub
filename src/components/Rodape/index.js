import style from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer className={style.rodape}>
      <section>
        <ul>
          <li>
            <a href="#" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por HUB.</p>
      </section>
    </footer>
  );
};

export default Rodape;
