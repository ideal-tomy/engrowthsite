import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import StylishTitle from '../components/StylishTitle';
import CardComponent from '../components/CardComponent';

// Data for Features section
const featureItems = [
  {
    icon: 'psychology',
    title: '第二言語習得メソッド',
    description: '科学的なアプローチに基づいた効果的な学習方法を提供'
  },
  {
    icon: 'support_agent',
    title: '伴走型サポート',
    description: '一人一人に合わせた丁寧なサポートで確実な成長を実現'
  },
  {
    icon: 'business_center',
    title: '実践的な学習環境',
    description: '実際のビジネスシーンを想定した実践的な学習プログラム'
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection 
        title="第二言語習得メソッド × 伴走型サポート"
        subtitle="確実な成長と挑戦の場を提供する"
        bgColor="gradient"
        textColor="light"
        align="center"
        height="large"
      />

      <section className="home-vision section-padding">
        <div className="container vision-grid">
          <div className="vision-text">
            <h2 className="vision-section-title">私たちが目指す社会</h2>
            <p>
              経済的な制約や学習方法への不安から、多くの人が可能性を閉ざしています。
              私たちは、誰もが挑戦できる社会を目指し、Engrowthを設立しました。
            </p>
            <Link to="/vision" className="secondary-button">私たちの想い</Link> 
          </div>
          <div className="vision-image">
            <img src="/images/vision01.png" alt="Engrowth Vision" />
          </div>
        </div>
      </section>

      <section className="home-features section-padding alt-bg">
        <div className="container">
          <StylishTitle 
            title="Engrowthが提供する独自の価値"
            type="section"
            align="center"
            size="large"
          />
          <div className="feature-grid card-grid">
            {featureItems.map((item, index) => (
              <CardComponent
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="card-icon-top"
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="primary-button">サービス詳細を見る</Link>
          </div>
        </div>
      </section>

      <section className="home-target section-padding">
        <div className="container">
          <StylishTitle 
            title="あなたの目的達成を最適化"
            type="section"
            align="center"
            size="large"
          />
          <div className="target-grid card-grid">
            <CardComponent 
              title="ビジネスパーソン向け" 
              className="target-card"
              backgroundImageUrl="/images/ビジネスミーティング01.jpeg"
            >
              <p>グローバルな舞台で活躍するための実践的な英語力を習得。</p>
              <Link to="/business" className="primary-button">詳細はこちら</Link>
            </CardComponent>
            <CardComponent 
              title="学生向け" 
              className="target-card"
              backgroundImageUrl="/images/キャンパスライフ01.webp"
            >
              <p>留学や就職活動で差をつける、将来に繋がる英語スキルを養成。</p>
              <Link to="/students" className="primary-button">詳細はこちら</Link>
            </CardComponent>
          </div>
        </div>
      </section>

      <section className="home-support section-padding alt-bg">
        <div className="container support-content">
          <StylishTitle 
            title="安心して学習を始めるために"
            type="section"
            align="center"
            size="large"
          />
          <div className="support-links">
            <p>学習方法や料金について</p><p><Link to="/faq">よくあるご質問はこちら</Link></p>
            <Link to="/contact" className="primary-button">無料カウンセリング予約</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 