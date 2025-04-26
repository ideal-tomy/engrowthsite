import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services">
      <section className="hero">
        <div className="container">
          <h1>Services</h1>
          <p>Engrowthの学習設計思想とプログラム構造</p>
        </div>
      </section>

      <section className="learning-design">
        <div className="container">
          <h2>学習設計思想</h2>
          <div className="learning-content">
            <p>SLA理論（第二言語習得理論）に基づいた効果的な学習方法を提供します。</p>
            <ul>
              <li>インプット仮説：理解可能な入力の重要性</li>
              <li>アウトプット仮説：産出の必要性</li>
              <li>インタラクション仮説：対話を通じた学習</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="program-structure">
        <div className="container">
          <h2>プログラム構造</h2>
          <div className="structure-grid">
            <div className="structure-card">
              <h3>基礎固め</h3>
              <p>文法・語彙の基礎を固める</p>
            </div>
            <div className="structure-card">
              <h3>実践演習</h3>
              <p>実際のシーンを想定した演習</p>
            </div>
            <div className="structure-card">
              <h3>応用展開</h3>
              <p>ビジネスシーンでの活用</p>
            </div>
          </div>
        </div>
      </section>

      <section className="support">
        <div className="container">
          <h2>サポート体制</h2>
          <div className="support-content">
            <div className="support-item">
              <h3>週1セッション</h3>
              <p>定期的なフィードバックとアドバイス</p>
            </div>
            <div className="support-item">
              <h3>LINE伴走</h3>
              <p>日常的な質問対応とモチベーション維持</p>
            </div>
          </div>
        </div>
      </section>

      <section className="results">
        <div className="container">
          <h2>Before/Afterの成果例</h2>
          <div className="results-grid">
            <div className="result-card">
              <h3>ビジネスパーソンAさん</h3>
              <p>TOEIC 500点 → 800点</p>
              <p>海外出張でのコミュニケーションが可能に</p>
            </div>
            <div className="result-card">
              <h3>大学生Bさん</h3>
              <p>TOEIC 400点 → 700点</p>
              <p>外資系企業への就職が決定</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 