import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // メニュー開閉の処理
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Engrowth
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'menu-open' : ''}`}>
          <Link to="/vision" className={location.pathname === '/vision' ? 'active' : ''}>Vision</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/business" className={location.pathname === '/business' ? 'active' : ''}>Business</Link>
          <Link to="/students" className={location.pathname === '/students' ? 'active' : ''}>Students</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>料金</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/contact" className="contact-button">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 