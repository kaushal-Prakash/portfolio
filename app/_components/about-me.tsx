import styles from "@/app/_styles/about-me.module.css";

const AboutMe = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="heading">
        <h2>About Me</h2>
        <div className="wrapper">
          <p className="subtitle">
            I&apos;m a technology enthusiast with a strong background in
            software development. Based in Mysore, I excel at transforming complex
            challenges into seamless solutions.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Software Development</h3>
            <p>
            With a solid foundation in front-end development and UI design, I specialize in creating responsive, visually captivating, and user-friendly websites by leveraging cutting-edge technologies, frameworks, and design principles. Additionally, I am working on back-end development to provide comprehensive, full-stack solutions that enhance overall functionality and performance.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Languages</h4>
              <p>HTML, CSS, TypeScript, JavaScript, Git, MongoDb, Java</p>
            </div>
            <div>
              <h4>Frameworks</h4>
              <p>Next.js, React</p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Project Management</h3>
            <p>
              I believe that a project is only as good as the team behind it,
              that’s why I take a people-oriented approach, emphasizing
              cooperation and clear communication. Balancing technical knowledge
              with management skills, I’m able to lead teams effectively to
              drive projects to successful completion.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Tools</h4>
              <p>Office 365, Google Workspace, Excel, Github</p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Technical Proficiency</h3>
            <p>
              I am proficient in managing and optimizing technical environments,
              ensuring seamless operations and efficient workflows. My skills in
              system administration and software management help maintain high
              reliability in various settings.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Software</h4>
              <p>Google Analytics, Firebase, Github</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>
                Office 365, Google Workspace, Excel, Figma, Active Directory
              </p>
            </div>
          </div>
        </div>

        {/* <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Certifications</h3>
            <p>
              To back my skills with formal recognition and continuous learning,
              I have earned several certifications that validate my knowledge in
              various domains. These certifications help me stay updated with
              industry standards and best practices.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Foundations of Project Management</h4>
              <p>Google</p>
            </div>
            <div>
              <h4>MTA Windows Server Administration</h4>
              <p>Microsoft</p>
            </div>
          </div>
        </div> */}

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Beyond Work</h3>
            <p>
              Outside of my professional life, I have a passion for exploring
              new technologies, photography, design, and aviation. These
              interests not only fuel my creativity but also enhance my approach
              to problem-solving and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
