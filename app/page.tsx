import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="container">
        <div className="hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Architecture home"
          />
          <div className="hero-content">
            <h1>Architecture for calm living</h1>
            <p>
              Creating spaces that foster tranquility and connection with the
              natural environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header">
          <h2>Featured Projects</h2>
        </div>
        <div className="grid-2">
          <Link href="/projects/villa-nova" className="project-card">
            <div className="project-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Desert Retreat"
              />
            </div>
            <div className="project-meta">
              <div>
                <div className="project-title">Desert Retreat</div>
                <div className="project-category">Residential</div>
              </div>
              <div className="project-year">Joshua Tree, 2023</div>
            </div>
          </Link>

          <Link href="/projects/villa-nova" className="project-card">
            <div className="project-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop"
                alt="Coastal Haven"
              />
            </div>
            <div className="project-meta">
              <div>
                <div className="project-title">Coastal Haven</div>
                <div className="project-category">Residential</div>
              </div>
              <div className="project-year">Big Sur, 2022</div>
            </div>
          </Link>

          <Link href="/projects/villa-nova" className="project-card">
            <div className="project-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop"
                alt="Urban Loft"
              />
            </div>
            <div className="project-meta">
              <div>
                <div className="project-title">Urban Loft</div>
                <div className="project-category">Interior</div>
              </div>
              <div className="project-year">New York, 2021</div>
            </div>
          </Link>

          <Link href="/projects/villa-nova" className="project-card">
            <div className="project-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop"
                alt="Mountain Cabin"
              />
            </div>
            <div className="project-meta">
              <div>
                <div className="project-title">Mountain Cabin</div>
                <div className="project-category">Residential</div>
              </div>
              <div className="project-year">Aspen, 2020</div>
            </div>
          </Link>
        </div>
        <div className="btn-wrapper">
          <Link href="/projects" className="btn btn-primary">
            VIEW ALL PROJECTS
          </Link>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <h2>Our Philosophy</h2>
          <p>
            We believe architecture should be a silent backdrop to life. Our
            designs prioritize natural light, tactile materials, and spatial
            harmony to create enduring environments that elevate the everyday
            human experience.
          </p>

          <div className="grid-3 services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3>Architecture</h3>
              <p>
                Full-service architectural design for custom homes and boutique
                commercial spaces, rooted in context and proportion.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"></path>
                  <path d="M4 16c0-4 16-4 16 0"></path>
                  <path d="M4 16v4"></path>
                  <path d="M20 16v4"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3>Interior Design</h3>
              <p>
                Curated interiors focusing on natural materials, light, and
                enduring calm, creating spaces that feel lived-in and loved.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21V11"></path>
                  <path d="m5 11 7-8 7 8"></path>
                  <path d="m3 16 9-9 9 9"></path>
                </svg>
              </div>
              <h3>Landscape</h3>
              <p>
                Seamless indoor-outdoor spaces that blend beautifully with their
                surroundings, extending the living experience to nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="contact-cta">
          <div className="contact-cta-content">
            <h2>Ready to start a conversation?</h2>
            <p>
              We are currently accepting new projects for 2024. Reach out to
              discuss your vision with our team.
            </p>
            <a href="mailto:hello@studio.com" className="email-link">
              hello@studio.com
            </a>
          </div>

          <div className="contact-info-grid">
            <div className="contact-col">
              <h4>Studio</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
            <div className="contact-col">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
