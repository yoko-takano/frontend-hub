import styles from "./Card.module.css";

const Card = ({ name, role, description, photoUrl, primaryColor }) => {
  const cardColor = { backgroundColor: primaryColor };

  return (
    <div className={styles.child}>
      <div className={styles.cabecalho} style={cardColor}>
        <img src={photoUrl} alt={name}></img>
      </div>
      <div className={styles.rodape}>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h6>{description}</h6>
      </div>
    </div>
  );
};

export default Card;
