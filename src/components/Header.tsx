import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Engrowth
        </Link>
        <nav className="nav">
          <Link to="/vision">Vision</Link>
          <Link to="/services">Services</Link>
          <Link to="/business">Business</Link>
          <Link to="/students">Students</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact" className="contact-button">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 