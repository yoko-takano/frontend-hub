import styles from "./TextAbout.module.css";

const Projeto = () => {
  return (
    <section className={styles.formulario}>
      <form>
        <table>
          <h3>About Us</h3>
        </table>
        <p>
          <strong>Overview: </strong>The Technology and Innovation Hub is a
          technological hub located at the School of Technology of UEA in
          Manaus/AM. Currently composed of the LSE (embedded systems), ILUM
          (chemistry), and Industry 4.0 (digital technology integration)
          laboratories, the Hub's mission is to enhance the technical and
          personal development of our partners by providing technological,
          innovative, and sustainable solutions. Learn more about our projects
          and follow our work here.
        </p>
        <p>
          <strong>Sector: </strong>
          Research and Scientific Development
        </p>
        <p>
          <strong>Headquarters: </strong>
          Manaus, Amazonas
        </p>
        <p>
          <strong>Founded em 2015</strong>
        </p>
        <p>
          <strong>Location:</strong>
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
