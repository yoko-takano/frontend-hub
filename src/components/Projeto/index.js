import styles from "./Projeto.module.css";
import Card from "components/Card";

const Projeto = ({
  id,
  name,
  startDate,
  endDate,
  description,
  companyName,
  secondaryColor,
  members,
  tags,
}) => {
  const borderLine = { borderColor: secondaryColor };
  return (
    <section className={styles.formulario}>
      <form>
        <h3 style={borderLine}>{name}</h3>
        <p className={styles.datas}>
          {startDate} ~ {endDate}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Company Name: </strong>
          {companyName}
        </p>
        <p>
          <strong>Tags:</strong>
        </p>
        <div className={styles.tags}>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className={styles.colaborador}>
          <div className={styles.times}>
            {members.map((member) => (
              <Card {...member} key={member.name} />
            ))}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Projeto;
