import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img className={styles.logo} src={logo} alt="Logo do HUB"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Projetos</CabecalhoLink>
        <CabecalhoLink url="./Historia">Historia</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;
