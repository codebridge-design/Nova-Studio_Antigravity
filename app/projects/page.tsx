"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  location: string;
  year: string;
  category: string;
  aspectRatio?: string;
}

const projects: Project[] = [
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    imageAlt: "Cliffside Residence",
    title: "Cliffside Residence",
    location: "Malibu, California",
    year: "2023",
    category: "residential",
  },
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop",
    imageAlt: "Modernist Art Wing",
    title: "Modernist Art Wing",
    location: "London, UK",
    year: "2021",
    category: "interior",
    aspectRatio: "1/1",
  },
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Glass Pavilion",
    title: "Glass Pavilion",
    location: "Kyoto, Japan",
    year: "2020",
    category: "residential",
    aspectRatio: "1/1",
  },
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    imageAlt: "Civic Library",
    title: "Civic Library",
    location: "Seattle, WA",
    year: "2019",
    category: "cultural",
  },
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop",
    imageAlt: "Coastal Haven",
    title: "Coastal Haven",
    location: "Carmel, CA",
    year: "2023",
    category: "residential",
  },
  {
    href: "/projects/villa-nova",
    imageSrc:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Urban Loft Retreat",
    title: "Urban Loft Retreat",
    location: "New York, NY",
    year: "2022",
    category: "interior",
    aspectRatio: "4/3",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Cultural", value: "cultural" },
  { label: "Interior", value: "interior" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category === activeFilter
  );

  return (
    <main className="container">
      <header className="page-header">
        <h1>Selected Works</h1>
        <p>
          An archive of our architectural practice, exploring the intersection
          of space, light, and material across diverse topographies.
        </p>
      </header>

      <div className="filter-pills">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`pill${activeFilter === filter.value ? " active" : ""}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className="project-card"
          >
            <div
              className="project-image-wrapper"
              style={
                project.aspectRatio
                  ? { aspectRatio: project.aspectRatio }
                  : undefined
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                style={
                  project.aspectRatio ? { height: "100%" } : undefined
                }
              />
            </div>
            <div className="project-meta">
              <div>
                <div className="project-title">{project.title}</div>
                <div className="project-location">{project.location}</div>
              </div>
              <div className="project-year">{project.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
