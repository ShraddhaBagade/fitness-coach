import "./App.css";
import { useState } from "react";
import trainerImage from "./assets/trainer.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    goal: "",
  });

  function handleContactSubmit(event) {
    event.preventDefault();

    const subject = "Free Fitness Consultation";
    const body = `Name: ${contactData.name}
Email: ${contactData.email}
Fitness goal: ${contactData.goal}`;

    window.location.href = `mailto:hello@mayafit.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          MAYA FIT
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu">
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">PERSONAL TRAINING</p>

            <h1>Train stronger. Feel better.</h1>

            <p className="hero-text">
              Simple personal training to help you build strength, confidence,
              and healthy habits.
            </p>

            <a href="#contact" className="button">
              Book a Free Call
            </a>
          </div>

          <div className="hero-image">
            <img
              src={trainerImage}
              alt="Personal trainer coaching a kettlebell workout"
            />
          </div>
        </section>

        <section id="services" className="section">
          <p className="eyebrow">SERVICES</p>

          <h2>Coaching made for real life.</h2>

          <div className="cards">
            <article className="card">
              <span className="card-number">01</span>
              <h3>1:1 Training</h3>
              <p>
                Personal workouts designed around your goals, ability, and
                routine.
              </p>
              <a href="#contact">Learn more →</a>
            </article>

            <article className="card">
              <span className="card-number">02</span>
              <h3>Small Group Training</h3>
              <p>
                Train with friends while receiving expert coaching and
                motivation.
              </p>
              <a href="#contact">Learn more →</a>
            </article>

            <article className="card">
              <span className="card-number">03</span>
              <h3>Online Plans</h3>
              <p>
                Flexible workout plans you can follow at home or in the gym.
              </p>
              <a href="#contact">Learn more →</a>
            </article>
          </div>
        </section>

        <section className="steps-section">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>A simple plan to get you moving.</h2>

          <div className="steps">
            <article>
              <span>1</span>
              <h3>Book a free call</h3>
              <p>
                Tell Maya about your goals, routine, and what you want to
                improve.
              </p>
            </article>

            <article>
              <span>2</span>
              <h3>Get your plan</h3>
              <p>
                Receive coaching and workouts that fit your ability and
                lifestyle.
              </p>
            </article>

            <article>
              <span>3</span>
              <h3>Build consistency</h3>
              <p>
                Train with confidence and make progress you can actually
                maintain.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="section about">
          <p className="eyebrow">ABOUT MAYA</p>

          <h2>Fitness should support your life.</h2>

          <p>
            I help people build sustainable routines without extreme diets or
            intimidating workouts. We start where you are and move forward
            together.
          </p>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">READY TO START?</p>

            <h2>Book your free consultation.</h2>

            <p>
              Tell me a little about your goal, and I’ll get back to you with
              the best next step.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              required
              value={contactData.name}
              onChange={(event) =>
                setContactData({ ...contactData, name: event.target.value })
              }
              placeholder="Jane Doe"
            />

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              required
              value={contactData.email}
              onChange={(event) =>
                setContactData({ ...contactData, email: event.target.value })
              }
              placeholder="jane@example.com"
            />

            <label htmlFor="contact-goal">What is your goal?</label>
            <textarea
              id="contact-goal"
              required
              rows="4"
              value={contactData.goal}
              onChange={(event) =>
                setContactData({ ...contactData, goal: event.target.value })
              }
              placeholder="For example: I want to build strength and improve my fitness."
            />

            <button type="submit" className="button">
              Send Enquiry
            </button>
          </form>
        </section>
      </main>

      <footer>© 2026 Maya Fit. Personal training for everyday strength.</footer>
    </>
  );
}

export default App;
