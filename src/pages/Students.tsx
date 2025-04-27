import React, { useState } from 'react';
import '../styles/Students.css';
import SimulationSection from '../components/SimulationSection';
import HeroSection from '../components/HeroSection';

// シミュレーションデータ
const simulationTables = [
  {
    title: 'シミュレーション英会話①',
    data: [
      { week: '1-2', topic: '挨拶' },
      { week: '3-4', topic: '自己紹介' },
      { week: '5-6', topic: '道の聞き方/\n聞かれた際の答え方' },
      { week: '7-8', topic: '旅行編\n（チェックイン、観光）' },
      { week: '9-10', topic: 'ホテル\n（チェックイン/アウト）' },
      { week: '11-12', topic: 'カフェ＆レストラン\n（予約、注文）' },
    ],
    accordionItems: [
      { title: '挨拶', content: '基本的な挨拶表現から始まり、時間帯や状況に応じた適切な挨拶方法を学びます。また、初対面での自己紹介の基本も練習します。' },
      { title: '自己紹介', content: '自分の名前、出身、所属学校、趣味などの基本情報を英語で伝える練習をします。また、相手の自己紹介を聞いた後の適切な返答や質問の仕方も学びます。' },
      { title: '道の聞き方/聞かれた際の答え方', content: '道に迷った際に場所を尋ねる表現や、逆に道を尋ねられた時の対応方法を学びます。方向や距離の表現、ランドマークを使った説明方法なども練習します。' },
      { title: '旅行編（チェックイン、観光）', content: '海外旅行でよく使うフレーズを学びます。ホテルでのチェックイン手続き、観光地での案内所でのやり取り、観光スポットでの質問などをロールプレイで練習します。' },
      { title: 'ホテル（チェックイン/アウト）', content: 'ホテルでのチェックインやチェックアウト時のやり取り、部屋のリクエスト、設備の使い方の質問など、宿泊に関する様々なシーンを想定した会話を練習します。' },
      { title: 'カフェ＆レストラン（予約、注文）', content: 'レストランでの席の予約や注文時のやり取り、特別なリクエスト（アレルギー対応など）の伝え方、会計時のやり取りなど、飲食店で必要なコミュニケーションを学びます。' },
    ]
  },
  {
    title: 'シミュレーション英会話②',
    data: [
      { week: '13-14', topic: 'ショッピング（試着、会計）' },
      { week: '15-16', topic: '交通機関（電車、バス）' },
      { week: '17-18', topic: '学校生活・授業' },
      { week: '19-20', topic: '友人関係・交友関係' },
      { week: '21-22', topic: '留学面接準備' },
      { week: '23-24', topic: 'カスタム（自分の興味分野）' },
    ],
    accordionItems: [
      { title: 'ショッピング（試着、会計）', content: 'ショッピング時に使える表現を学びます。商品について尋ねる方法、試着をお願いする表現、サイズや色の交換、支払い方法の確認など、買い物シーンでの会話を練習します。' },
      { title: '交通機関（電車、バス）', content: '電車やバスなどの公共交通機関を利用する際に必要な表現を学びます。切符の買い方、乗り場の尋ね方、遅延や乗り換えに関する質問など、移動時に役立つ会話を練習します。' },
      { title: '学校生活・授業', content: '学校での日常会話や授業に関連する表現を学びます。先生への質問の仕方、グループワークでの意見交換、授業内容についての議論など、学校生活で必要なコミュニケーションスキルを身につけます。' },
      { title: '友人関係・交友関係', content: '友達との会話や関係構築に役立つ表現を学びます。趣味や興味の共有、休日の過ごし方の提案、悩みの相談など、友人関係を深めるための英会話を練習します。' },
      { title: '留学面接準備', content: '留学面接で想定される質問とその回答パターンを学びます。自己PR、志望動機、将来の目標などについて英語で説得力のある回答ができるよう練習します。' },
      { title: 'カスタム（自分の興味分野）', content: '受講者それぞれの興味や目標に特化したシミュレーションを行います。特定の話題（音楽、スポーツ、科学など）について英語で議論できるよう、関連語彙や表現を学びます。' },
    ]
  }
];

// 料金プラン
const pricingData = [
  { period: '1ヶ月', price: '¥20,000', note: '<sup>※1</sup>', monthlyPrice: '' },
  { period: '3ヶ月', price: '¥60,000 → ¥54,000', monthlyPrice: '¥20,000 → ¥18,000' },
  { period: '6ヶ月', price: '¥120,000 → ¥102,000', monthlyPrice: '¥20,000 → ¥17,000' },
  { period: '12ヶ月', price: '¥240,000 → ¥192,000', monthlyPrice: '¥20,000 → ¥16,000' },
];

const Students = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className="students-page">
      {/* ヒーローセクション */}
      <HeroSection 
        title="学生"
        subtitle="学生のための英語学習プログラム"
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      {/* 導入セクション */}
      <section className="students-introduction fade-in">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>留学を成功させるために</h2>
            <p>
              海外留学は新しい価値観や環境に触れる貴重な機会です。
              しかし、準備が不十分だと貴重な留学期間を有効に活用できません。
              Engrowthでは、科学的根拠に基づいた英語学習プログラムで、
              自信を持って英語で自己表現できる状態へと導きます。
            </p>
          </div>
          <div className="intro-image">
            <img src="/images/留学生活01.jpeg" alt="海外キャンパスで学ぶ学生" />
          </div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section className="students-persona">
        <div className="container">
          <h2 className="section-title">こんな方におすすめ</h2>
          <div className="persona-grid">
            <div className="persona-card">
              <div className="persona-icon">🎓</div>
              <h3>英語に苦手意識がある</h3>
              <p>文法や単語は知っているのに、実践で使えない方</p>
            </div>
            <div className="persona-card">
              <div className="persona-icon">✈️</div>
              <h3>留学・進学を目指す</h3>
              <p>海外大学への進学や留学を考えている方</p>
            </div>
            <div className="persona-card">
              <div className="persona-icon">💼</div>
              <h3>就活で必要</h3>
              <p>外資系企業への就職を視野に入れている方</p>
            </div>
          </div>
        </div>
      </section>

      {/* 留学成功への3ステップ */}
      <section className="students-steps">
        <div className="container">
          <h2 className="section-title">留学成功への3ステップ</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>基礎英語力の底上げ</h3>
              <p>発話することで聞き取れるようになる脳のメカニズムを活用</p>
              <a href="#step1" className="step-link">詳細を見る</a>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>エッセイ添削の重要性</h3>
              <p>学術的なライティングスキルを習得し、高評価を獲得</p>
              <a href="#step2" className="step-link">詳細を見る</a>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>シミュレーション英会話</h3>
              <p>実践的な場面を想定した会話練習で実践力を養成</p>
              <a href="#step3" className="step-link">詳細を見る</a>
            </div>
          </div>
        </div>
      </section>

      {/* ステップ1：基礎英語力の底上げ */}
      <section id="step1" className="step-detail">
        <div className="container">
          <h2 className="section-title">ステップ1：基礎英語力の底上げ</h2>
          <div className="step-content">
            <div className="step-description">
              <p>
                英語でのコミュニケーションに自信を持つために、まずは基礎固めから始めましょう。
                文法や語彙の理解を深めることよりも、英語を聞くことや話すことになれることが何よりも重要です。
              </p>
              <p>
                スピーキング、リスニングを中心に、発話することで聞き取れるようになる脳のメカニズムを利用し、
                英語への苦手意識や恐怖心が無くなるように基礎英語力の底上げを行います。
              </p>
            </div>
            <div className="step-features">
              <div className="feature">
                <div className="feature-icon">🧠</div>
                <h4>脳科学に基づいたアプローチ</h4>
                <p>言語習得の科学的メカニズムを活用した効率的な学習法</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🔄</div>
                <h4>反復練習の重視</h4>
                <p>適切な間隔での復習により長期記憶への定着を促進</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h4>実用的な内容に焦点</h4>
                <p>実際の留学生活で必要となるフレーズや表現を優先的に学習</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ステップ2：エッセイ添削の重要性 */}
      <section id="step2" className="step-detail alt-bg">
        <div className="container">
          <h2 className="section-title">ステップ2：エッセイ添削の重要性</h2>
          <div className="step-content">
            <div className="step-description">
              <p>
                アメリカの大学で成功するためには、学術的なライティングスキルが必要不可欠です。
                多くの日本人留学生が直面する最大の課題の一つが、英語でのアカデミックライティングの習得です。
              </p>
              <h3>なぜ英語でのエッセイは難しいのか</h3>
              <p>
                英語で記述する論文では、エッセイやレポートの評価において「内容」だけでなく「構造」が重視されます。
                優れた考察や分析を行っても、学術界で求められる独特の形式やルールに従っていなければ、高評価を得ることは困難です。
              </p>
              <ul className="essay-features">
                <li>明確な論理構造が必須（Introduction、Thesis、Body Paragraphs、Conclusion）</li>
                <li>アカデミックな語彙や表現の使用が求められる</li>
                <li>適切な引用方法（APA、MLAなど）の厳密な遵守</li>
                <li>批判的思考に基づく議論の展開</li>
                <li>客観的な証拠や具体例による主張の裏付け</li>
              </ul>
              <p>
                起承転結のような定型的な型が、日本語と英語では異なっており、その違いを理解していないと
                優れた考察に基づく論文やエッセイ、レポートも正当に評価されないといったケースが、留学生の共通した課題です。
              </p>
            </div>
            <div className="support-box">
              <h3>私たちのサポート体制</h3>
              <p>当社では、海外の名門大学出身の専任コンサルタントが、きめ細かな添削サービスを提供しています。</p>
              <ul>
                <li>英語のエッセイで求められる文章構成の基礎から応用まで</li>
                <li>各大学・学部特有の要求事項への対応</li>
                <li>添削だけでなく、改善点の詳細な解説と実践的なアドバイス</li>
                <li>オンラインでの個別相談と継続的なサポート</li>
              </ul>
              <h3>なぜ事前準備が重要か</h3>
              <p>
                海外の大学では、入学後すぐに本格的なアカデミックライティングが求められます。
                準備が不十分な状態で留学を開始すると、授業についていけない、課題をこなせないという事態に陥りかねません。
              </p>
              <p>
                また、間違った引用をしてしまったり、引用先の記載漏れがあっただけで盗用（Plagiarism）とされ、
                Honor Council（学校内の裁判のようなもの）にかけられるなど、海外の大学は非常にプロフェッショナルでシビアです。
                最悪のケースでは、退学処分の場合もあります。
              </p>
              <div className="benefits">
                <h4>事前に正しい知識とスキルを身につけることで</h4>
                <div className="benefit-item">✅ 入学後のスムーズな学習開始</div>
                <div className="benefit-item">✅ 高い学業成績の維持</div>
                <div className="benefit-item">✅ 充実した留学生活の実現</div>
              </div>
              <div className="important-note">
                <p>
                  何より重要なのは、多くの留学生が初期段階で抱える『留学への不安』
                  この不安は、留学先での積極的な活動に大きな障壁となります。
                </p>
                <p>
                  そして、その障壁は学習への積極的な取り組みや、コミュニケーションへの消極的な姿勢に影響を与え、
                  大切な留学期間での成長を著しく阻害してしまいます。
                </p>
                <p>
                  事前の準備は、留学期間すべての学習効率に大きな影響を与えるため、事前の準備が重要なのです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ステップ3：シミュレーション英会話 */}
      <section id="step3" className="step-detail">
        <div className="container">
          <h2 className="section-title">ステップ3：シミュレーション英会話</h2>
          <p className="simulation-intro">
            実際の留学生活で遭遇する様々なシチュエーションを想定し、実践的な英会話スキルを身につけます。
            専任コンサルタントとのロールプレイを通じて、自信を持って英語でコミュニケーションできる力を養います。
          </p>
        </div>
      </section>

      {/* シミュレーション英会話セクション - 共通コンポーネント */}
      <SimulationSection tables={simulationTables} />

      {/* 料金表セクション */}
      <section className="students-pricing">
        <div className="container">
          <h2 className="section-title">料金</h2>
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="price-header">受講料</th>
                  <th className="monthly-header">1ヶ月あたり</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr key={index}>
                    <td className="period-cell">{item.period}</td>
                    <td className="price-cell" dangerouslySetInnerHTML={{ __html: item.price + (item.note || '') }}></td>
                    <td className="monthly-cell">{item.monthlyPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing-note" dangerouslySetInnerHTML={{ __html: '<sup>※1</sup> 1ヶ月プランは3ヶ月プラン以上を修了者のみが契約可' }}></p>
        </div>
      </section>
    </div>
  );
};

export default Students; 