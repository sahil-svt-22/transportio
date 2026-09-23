import { useEffect, useState } from 'react';

const serviceCards = [
  {
    number: '01',
    icon: 'home-outline',
    title: 'Home & office moves',
    text: 'Careful, scheduled transport for the things that matter to you.',
    link: 'Plan a move',
  },
  {
    number: '02',
    icon: 'cube-outline',
    title: 'Goods & deliveries',
    text: 'Reliable point-to-point delivery for your business, big or small.',
    link: 'Send a request',
  },
  {
    number: '03',
    icon: 'business-outline',
    title: 'Business transport',
    text: 'Flexible capacity and a dependable partner for your operations.',
    link: 'Talk to our team',
  },
];

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    text: 'Share your locations, timing, and the kind of vehicle your move calls for.',
  },
  {
    number: '02',
    title: 'We match the right partner',
    text: 'Our team reviews your request and finds the best available transport for it.',
  },
  {
    number: '03',
    title: 'Track it all the way',
    text: 'Get updates from confirmation to delivery, with support whenever you need it.',
  },
];

const tripOptions = ['one-way', 'round-trip', 'multiple'];

function App() {
  const [activeTrip, setActiveTrip] = useState('one-way');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setIsNavOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <>
      <header className={`site-header${isScrolled ? ' scrolled' : ''}`} data-header>
        <div className="container header-inner">
          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <ion-icon name="menu-outline" />
          </button>
          <a className="brand" href="#top" aria-label="NRCtransports home">
            <span className="brand-mark">N</span> NRCtransports
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
          </nav>
          <div className="header-actions">
            <a className="sign-in" href="#contact">Sign in</a>
            <a className="button button-small" href="#book">
              Request a vehicle <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </div>

        <div
          className={`mobile-backdrop${isNavOpen ? ' active' : ''}`}
          aria-hidden="true"
          onClick={closeNav}
        />

        <nav className={`mobile-nav${isNavOpen ? ' active' : ''}`} aria-label="Mobile navigation">
          <div className="mobile-nav-head">
            <a className="brand mobile-brand" href="#top" aria-label="NRCtransports home">
              <span className="brand-mark">N</span> NRCtransports
            </a>
            <button className="menu-close" aria-label="Close menu" onClick={closeNav}>
              <ion-icon name="close-outline" />
            </button>
          </div>
          <a href="#services" onClick={closeNav}>Services</a>
          <a href="#how-it-works" onClick={closeNav}>How it works</a>
          <a href="#contact" onClick={closeNav}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="book">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-copy-inner">
                <div className="hero-slide hero-slide-head">
                  <p className="eyebrow">
                    <span className="pulse-dot" /> On-demand transport, built around you
                  </p>
                  <h1>
                    Move your world.<br />
                    <span>We'll handle the road.</span>
                  </h1>
                </div>
                <div className="hero-slide hero-slide-text">
                  <p className="hero-text">
                    Book the right vehicle for your delivery, relocation, or business request.
                    Tell us what you need and our transport team will take it from there.
                  </p>
                </div>
                <div className="hero-slide hero-slide-proof">
                  <div className="hero-proof">
                    <div className="avatar-stack">
                      <span>AK</span>
                      <span>RM</span>
                      <span>PS</span>
                    </div>
                    <p>
                      <strong>4.9/5</strong> from 2,000+ completed moves
                    </p>
                  </div>
                </div>
                <div className="hero-slide hero-slide-empty" aria-hidden="true" />
              </div>
            </div>

            <div className="booking-card">
              <div className="booking-heading">
                <div>
                  <p className="card-kicker">GET MOVING</p>
                  <h2>Request a vehicle</h2>
                </div>
                <span className="secure-label">
                  <ion-icon name="shield-checkmark-outline" /> Secure
                </span>
              </div>

              <div className="trip-tabs" role="tablist" aria-label="Request type">
                {tripOptions.map((trip) => (
                  <button
                    key={trip}
                    type="button"
                    role="tab"
                    aria-selected={activeTrip === trip}
                    className={`trip-tab${activeTrip === trip ? ' active' : ''}`}
                    onClick={() => setActiveTrip(trip)}
                  >
                    {trip === 'one-way' ? 'One way' : trip === 'round-trip' ? 'Round trip' : 'Multiple stops'}
                  </button>
                ))}
              </div>

              {!isSubmitted ? (
                <form id="booking-form" onSubmit={handleSubmit} noValidate>
                  <div className="location-fields">
                    <label className="field location-field">
                      <span className="location-dot pickup-dot" />
                      <ion-icon name="locate-outline" />
                      <span className="field-content">
                        <small>Pick up from</small>
                        <input id="pickup" type="text" placeholder="Enter pickup location" required />
                      </span>
                    </label>
                    <span className="route-line" />
                    <label className="field location-field">
                      <span className="location-dot dropoff-dot" />
                      <span className="field-content">
                        <small>Deliver to</small>
                        <input id="dropoff" type="text" placeholder="Enter destination" required />
                      </span>
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <ion-icon name="calendar-clear-outline" />
                      <span className="field-content">
                        <small>When</small>
                        <input id="date" type="date" required />
                      </span>
                    </label>
                    <label className="field">
                      <ion-icon name="time-outline" />
                      <span className="field-content">
                        <small>Preferred time</small>
                        <select id="time">
                          <option>As soon as possible</option>
                          <option>Morning, 8am - 12pm</option>
                          <option>Afternoon, 12pm - 4pm</option>
                          <option>Evening, 4pm - 8pm</option>
                        </select>
                      </span>
                    </label>
                  </div>

                  <p className="form-note form-note-top">
                    <ion-icon name="information-circle-outline" /> Final pricing is confirmed by our transport team.
                  </p>
                  <label className="vehicle-choice">
                    <span>Choose vehicle type</span>
                    <select id="vehicle" name="vehicle">
                      <option value="Mini truck" data-price="850">
                        Mini truck · Up to 500 kg · ₹850+
                      </option>
                      <option value="Pickup van" data-price="1200">
                        Pickup van · Up to 1,000 kg · ₹1,200+
                      </option>
                      <option value="Large truck" data-price="2200">
                        Large truck · Up to 3,000 kg · ₹2,200+
                      </option>
                    </select>
                  </label>

                  <button className="button button-primary" type="submit">
                    Get an estimate <ion-icon name="arrow-forward-outline" />
                  </button>
                </form>
              ) : (
                <div className="booking-success visible" id="booking-success" role="status">
                  <ion-icon name="checkmark-circle-outline" />
                  <div>
                    <strong>Request received.</strong>
                    <span>Our team will contact you shortly with a confirmed quote.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="scroll-cue">
            <span /> Scroll to explore
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div>
              <strong>15k+</strong>
              <span>moves completed</span>
            </div>
            <div>
              <strong>30 min</strong>
              <span>average response</span>
            </div>
            <div>
              <strong>250+</strong>
              <span>verified partners</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>human support</span>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow dark">ONE PLATFORM, EVERY MOVE</p>
                <h2>
                  Whatever needs moving,<br />
                  <em>we're ready.</em>
                </h2>
              </div>
              <p>
                From a single parcel to a full office relocation, NRCtransports connects your request to a capable local vehicle and a crew that cares.
              </p>
            </div>

            <div className="service-grid">
              {serviceCards.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  {service.icon === 'home-outline' ? (
                    <div className="service-visual visual-home">
                      <ion-icon name={service.icon} />
                      <span className="visual-road" />
                    </div>
                  ) : (
                    <div className="service-icon">
                      <ion-icon name={service.icon} />
                    </div>
                  )}
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#book">
                    {service.link} <ion-icon name="arrow-forward-outline" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how-it-works" id="how-it-works">
          <div className="container process-layout">
            <div>
              <p className="eyebrow dark">THE NRCtransports WAY</p>
              <h2>
                Simple from request<br />
                to <em>arrival.</em>
              </h2>
              <p className="process-copy">
                No confusing dashboards. No endless calls. Just a clear request, a real person, and a vehicle that shows up ready.
              </p>
              <a className="text-link" href="#book">
                Start your request <ion-icon name="arrow-forward-outline" />
              </a>
            </div>

            <ol className="process-list">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow">NEED A CUSTOM SOLUTION?</p>
              <h2>
                Let's move something<br />
                great together.
              </h2>
            </div>
            <a className="button button-light" href="mailto:hello@nrctransports.in">
              Talk to our team <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">N</span> NRCtransports
          </a>
          <p>Transport made human.</p>
          <div className="footer-links">
            <a href="#book">Book a move</a>
            <a href="#services">Services</a>
            <a href="mailto:hello@nrctransports.in">hello@nrctransports.in</a>
          </div>
          <small>© 2026 NRCtransports. Built for every move.</small>
        </div>
      </footer>

      <a
        href="#top"
        className={`back-top-btn${isScrolled ? ' active' : ''}`}
        aria-label="Back to top"
      >
        <ion-icon name="arrow-up-outline" />
      </a>
    </>
  );
}

export default App;
