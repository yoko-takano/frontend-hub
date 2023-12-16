import styles from "./Projeto.module.css";
import Card from "components/Card";

const Projeto = ({
  name,
  startDate,
  endDate,
  description,
  companyName,
  secondaryColor,
  members,
}) => {
  const borderLine = { borderColor: secondaryColor };
  return (
    <section className={styles.formulario}>
      <form>
        <h3 style={borderLine}>{name}</h3>
        <p>
          {startDate} | {endDate}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Company Name: </strong>
          {companyName}
        </p>
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
