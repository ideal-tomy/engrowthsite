import '../styles/Vision.css';
import HeroSection from '../components/HeroSection';
import StylishTitle from '../components/StylishTitle';
import CardComponent from '../components/CardComponent';
import IconListComponent from '../components/IconListComponent';
import ecosystemImage from '../assets/images/visionimage01.png'; // Import the image

// Story data (icon removed)
const storyItems = [
  {
    // icon: 'palette',
    text: '私たちは、どんな環境で生まれ育っても、自分が生きたい人生を描き、実現する力をすべての人に持ってほしいと願っています。'
  },
  {
    // icon: 'rocket_launch',
    text: '日本の教育制度や文化的背景の中で、多くの人が英語を学ぶ機会を十分に得られず、グローバル社会での挑戦を遠くに感じているかもしれません。しかし、英語というスキルは単なる言語の習得にとどまらず、新たなビジネスの扉を開き、人生の選択肢を大きく広げる「武器」となります。'
  },
  {
    // icon: 'handshake',
    text: 'Engrowthでは、「パートナー」と呼ぶクライアント一人ひとりが、自らの人生を切り拓くためのサポートを全力で提供しています。ただ英語を教えるだけでなく、より多くの方々が世界とつながり、可能性を最大限に引き出せるような環境を創り上げることを目指しています。'
  },
  {
    // icon: 'groups',
    text: '同時に、コンサルタントもまた、未来への挑戦者です。自身の力で成長し、パートナーの皆様に価値を提供しながら、自らの人生を豊かにしていく。私たちは、すべてのステークホルダーがWin-Winの関係で結ばれることを信念とし、共に日本の未来を切り拓いていく存在でありたいと考えています。'
  },
  {
    // icon: 'flag',
    text: 'Engrowthは、クライアントもコンサルタントも共に「挑戦者」として歩む場所です。可能性を信じ、行動し、未来を変える力を手にする。失敗を恐れず学び、成長し続ける場所となり、真の価値を社会に送り出すプラットフォームを目指します。'
  }
];

// Value Statement data
const valueItems = [
  { icon: 'self_improvement', text: '自律した学習' },
  { icon: 'record_voice_over', text: '誠実な対話' },
  { icon: 'groups', text: '相互成長' },
  { icon: 'volunteer_activism', text: '学び＝社会貢献' }
];

const Vision = () => {
  return (
    <div className="vision-page">
      <HeroSection 
        title="Vision"
        subtitle={[
          "「すべての人に、可能性を信じて生きる力を」", 
          "誰もが第二言語（英語）を使い、夢を掴む社会を目指して"
        ]}
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      <section className="message section-padding">
        <div className="container">
          <StylishTitle 
            title="創業の背景と理念"
            type="section"
            align="center"
            size="large"
          />
          <div className="story-container"> 
            {storyItems.map((item, index) => (
              <div key={index} className="story-item">
                <div className="story-text">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution section-padding alt-bg">
        <div className="container">
          <StylishTitle 
            title="社会課題に対する解決策"
            type="section"
            align="center"
            size="large"
          />
          <div className="solution-lead-text">
            <p>
              Engrowthは、単なる英語学習ではなく、<br/>
              <strong>「自ら学び、共有し、未来に挑む」</strong><br/>
              人材を社会に送り出すための環境を本気で作っています。
            </p>
            <p>
              英語は、単なる言葉ではありません。<br/>
              世界を広げ、可能性を拓き、挑戦を支える力です。<br/>
              私たちは、一人ひとりの中に眠るその力を引き出します。
            </p>
          </div>
          <div className="solution-grid card-grid">
            <CardComponent
              title="自律を育む"
              description="自ら問い、自ら選び、自ら行動できる人へ。"
              className="card-icon-top solution-card-custom"
            />
            <CardComponent 
              title="共有と支援の文化"
              description="成長も葛藤も、共に分かち合い支え合う環境を。"
              className="card-icon-top solution-card-custom"
            />
            <CardComponent 
              title="挑戦と許容の場づくり"
              description="失敗を恐れず挑戦し、可能性を拓く力を育む。"
              className="card-icon-top solution-card-custom"
            />
          </div>
        </div>
      </section>

      <section className="ecosystem section-padding alt-bg">
        <div className="container">
          <StylishTitle 
            title="教える側と学ぶ側のエコシステム"
            type="section"
            align="center"
            size="large"
          />
          <img src={ecosystemImage} alt="Engrowth Ecosystem Concept" className="ecosystem-image" />
          <div className="ecosystem-diagram">
            <div className="ecosystem-diagram-side">
              <CardComponent title="学ぶ側（挑戦者）" className="ecosystem-card">
                <ul>
                  <li><span className="material-symbols-outlined">business_center</span> ビジネスパーソン</li>
                  <li><span className="material-symbols-outlined">school</span> 学生</li>
                  <li><span className="material-symbols-outlined">groups</span> 社会人</li>
                </ul>
              </CardComponent>
            </div>
            <div className="ecosystem-diagram-center">
              <div className="engrowth-hub">
                <span className="material-symbols-outlined">hub</span>
                Engrowth<br/>(共創の場)
              </div>
              <div className="ecosystem-arrows">
                <span className="material-symbols-outlined">arrow_right_alt</span>
                <span className="material-symbols-outlined">arrow_left_alt</span>
              </div>
            </div>
            <div className="ecosystem-diagram-side">
              <CardComponent title="教える側（挑戦者）" className="ecosystem-card">
                  <ul>
                    <li><span className="material-symbols-outlined">school</span> 専門知識を持つ講師陣</li>
                    <li><span className="material-symbols-outlined">person_pin</span> 経験豊富なコンサルタント</li>
                    <li><span className="material-symbols-outlined">support</span> サポートスタッフ</li>
                  </ul>
              </CardComponent>
            </div>
          </div>
          <div className="ecosystem-cycle">
            <span className="material-symbols-outlined">cycle</span>
            教育 → 自立 → 貢献 (社会への価値循環)
          </div>
        </div>
      </section>

      <section className="values section-padding">
        <div className="container">
          <StylishTitle 
            title="私たちが大切にしていること"
            type="section"
            align="center"
            size="large"
          />
          <IconListComponent items={valueItems} className="value-list" />
        </div>
      </section>

      <section className="vision-cta section-padding alt-bg">
        <div className="container">
          <h2 className="cta-title">あなたも、挑戦者として未来を切り拓きませんか？</h2>
          <a href="/contact" className="primary-button">お問い合わせはこちら</a>
        </div>
      </section>

    </div>
  );
};

export default Vision; 