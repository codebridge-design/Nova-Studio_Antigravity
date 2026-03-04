export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
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
          </div>
          <div className="copyright">&copy; 2024 Nova Studio. All rights reserved.</div>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
