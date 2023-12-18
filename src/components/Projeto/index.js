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
  projectLink,
  tags,
  iconUrl,
  companyIconUrl,
}) => {
  const borderLine = { borderColor: secondaryColor };
  return (
    <section className={styles.formulario}>
      <form>
        <table>
          <a
            href={projectLink}
            target="_blank"
            style={{ color: secondaryColor }}
          >
            <i className={iconUrl}></i>
          </a>{" "}
          <h3 style={borderLine}>{name}</h3>
          <p className={styles.datas}>
            {startDate} ~ {endDate}
          </p>
        </table>

        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Company Name: </strong>
          <i className={companyIconUrl}></i>
          {companyName}
        </p>
        <div className={styles.tags}>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className={styles.container}>
          {members.map((member) => (
            <Card {...member} key={member.name} />
          ))}
        </div>
      </form>
    </section>
  );
};

export default Projeto;
