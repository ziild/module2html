function About() {
  return (
    <div className = "container">
    <section className="card">
      <h2 className="darktext"style={{ textAlign: "center" } }>
        ABOUT ME
      </h2>
      <img src="src/assets/images/profile.jpg" alt="Profile photo"></img>
      <p>
        I am a dedicated IT student specializing in Web Systems and
        Technologies. Passionate about creating efficient and user-friendly
        web applications, I strive to combine technical expertise with creative
        problem-solving.
      </p>

      <p>
        Email:
        <a href="mailto:blazezildjan123@gmail.com">
          blazezildjan123@gmail.com
        </a>
        </p>

        <p>
        GitHub:
        <a href="https://github.com/ziild" target="_blank" rel="noopener noreferrer">
          github.com/ziild
        </a>
      </p>
    </section>
    </div>
  );
}

export default About;