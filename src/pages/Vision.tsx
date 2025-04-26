import '../styles/Vision.css';
import HeroSection from '../components/HeroSection';

const Vision = () => {
  return (
    <div className="vision">
      <HeroSection 
        title="Vision"
        subtitle="誰もが第二言語（英語）を使い、夢を掴む社会を目指して"
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      <section className="message">
        <div className="container">
          <h2>創業の背景と理念</h2>
          <div className="message-content">
            <p>経済的な制約により、学びの機会を失う若者を一人でも減らす。</p>
            <p>私たちは、第二言語習得メソッドと伴走型サポートを通じて、確実な成長と挑戦の場を提供します。</p>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <h2>社会課題に対する解決策</h2>
          <div className="solution-grid">
            <div className="solution-card">
              <h3>科学的アプローチ</h3>
              <p>第二言語習得理論に基づいた効果的な学習方法</p>
            </div>
            <div className="solution-card">
              <h3>個別サポート</h3>
              <p>一人一人に合わせた丁寧な伴走型サポート</p>
            </div>
            <div className="solution-card">
              <h3>実践的な環境</h3>
              <p>実際のビジネスシーンを想定した学習プログラム</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem">
        <div className="container">
          <h2>教える側と学ぶ側のエコシステム</h2>
          <div className="ecosystem-content">
            <div className="ecosystem-item">
              <h3>教える側</h3>
              <ul>
                <li>専門知識を持つ講師陣</li>
                <li>経験豊富なコンサルタント</li>
                <li>サポートスタッフ</li>
              </ul>
            </div>
            <div className="ecosystem-item">
              <h3>学ぶ側</h3>
              <ul>
                <li>ビジネスパーソン</li>
                <li>学生</li>
                <li>社会人</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision; 