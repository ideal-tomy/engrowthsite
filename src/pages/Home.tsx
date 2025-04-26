import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>第二言語習得メソッド × 伴走型サポート</h1>
          <p>確実な成長と挑戦の場を提供する</p>
          <Link to="/contact" className="cta-button">無料相談はこちら</Link>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>Engrowthとは</h2>
          <p>経済的な制約により、学びの機会を失う若者を一人でも減らす。</p>
          <p>誰もが第二言語（英語）を使い、夢を掴む社会を目指します。</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>3つの特徴</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>第二言語習得メソッド</h3>
              <p>科学的なアプローチに基づいた効果的な学習方法を提供</p>
            </div>
            <div className="feature-card">
              <h3>伴走型サポート</h3>
              <p>一人一人に合わせた丁寧なサポートで確実な成長を実現</p>
            </div>
            <div className="feature-card">
              <h3>実践的な学習環境</h3>
              <p>実際のビジネスシーンを想定した実践的な学習プログラム</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>あなたに合わせた学習プラン</h2>
          <div className="cta-buttons">
            <Link to="/business" className="cta-button">ビジネスパーソン向け</Link>
            <Link to="/students" className="cta-button">学生向け</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 