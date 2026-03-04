import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
          Nova Studio
        </Link>
        <nav className="nav-links">
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <a href="#" className="nav-link">
            Studio
          </a>
          <a href="#" className="nav-link">
            Journal
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
