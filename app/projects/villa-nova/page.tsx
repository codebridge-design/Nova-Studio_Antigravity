import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Nova | Nova Studio",
  description:
    "Villa Nova represents a seamless integration of modern luxury and raw, natural surroundings.",
};

export default function VillaNovaPage() {
  return (
    <main className="container">
      <div className="project-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Villa Nova Exterior"
        />
        <h1>Villa Nova</h1>
      </div>

      <div className="project-content-grid">
        <div className="project-description">
          <h2>Harmonizing with Nature&apos;s Blueprint</h2>
          <p>
            Villa Nova represents a seamless integration of modern luxury and
            raw, natural surroundings. Perched on a coastal cliff, the design
            philosophy centered around minimizing environmental impact while
            maximizing the breathtaking panoramic views of the ocean.
          </p>
          <p>
            The structure utilizes massive cantilevered concrete planes that
            appear to float above the landscape. These striking horizontal
            lines are balanced by expansive floor-to-ceiling glazing,
            dissolving the boundary between interior sanctuaries and the
            rugged exterior terrain.
          </p>
        </div>

        <aside className="project-specs">
          <div className="spec-header">Project Specifications</div>
          <div className="spec-group">
            <div className="spec-label">Area</div>
            <div className="spec-value">850 sqm</div>
          </div>
          <div className="spec-group">
            <div className="spec-label">Year</div>
            <div className="spec-value">2023 - Completed</div>
          </div>
          <div className="spec-group">
            <div className="spec-label">Materials</div>
            <div className="spec-value">
              Board-formed Concrete, Anodized Aluminum, Local Stone
            </div>
          </div>
        </aside>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop"
            alt="Villa Nova Interior"
          />
        </div>
        <div className="gallery-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop"
            alt="Concrete Stairs Detail"
          />
        </div>
      </div>

      <div className="gallery-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop"
          alt="Sunset View Terrace"
        />
      </div>

      <div className="next-project">
        <div className="next-label">Next Project</div>
        <a href="#" className="next-title">
          The Horizon Pavilion
        </a>
      </div>
    </main>
  );
}
