import React, { useState } from 'react';
import '../styles/Business.css'; // CSSファイルを正しくインポート
// 共通コンポーネントをインポート
import SimulationSection from '../components/SimulationSection';
import HeroSection from '../components/HeroSection';

// 3. 9つの強み グリッド表示 - 内容：アイコン＋強調テキスト＋補足テキスト
const strengthsData = [
  { icon: '👨‍🏫', title: '専任のコンサルタントによる 毎日の学習サポート', description: '毎週のオンラインセッション' },
  { icon: '📱', title: 'エングロース受講生 専用アプリの提供', description: '' },
  { icon: '🧠', title: '脳科学×AIの 学習サービスを提供', description: '' },
  { icon: '🔄', title: 'アダプティブラーニング※1を 採用したカスタムカリキュラム', description: '' },
  { icon: '🎓', title: '世界の名門大学出身 コンサルタントが マンツーマンであなたに伴走', description: '' },
  { icon: '🌍', title: '現地で使える"生きた英語"の 習得をサポート', description: '' },
  { icon: '📝', title: '卒業後の学習プランも 専任コンサルタントが提案', description: '' },
  { icon: '🏠', title: '全国どこからでも受講可能 セッション時間も柔軟に対応', description: '' },
  { icon: '🤖', title: 'AIによる発音、会話判定で 1人でも英会話練習が可能', description: '' },
];

// 4. 学習スケジュール - 表示：時間ごとのタイムブロック
const weekdaySchedule = [
  { time: '07:00', activity: '起床', type: 'daily' },
  { time: '08:00', activity: '通勤時間に単語学習', type: 'learning', duration: '15-20分' },
  { time: '09:00', activity: '仕事', type: 'daily' },
  { time: '12:00', activity: 'ランチタイムに単語の確認・リスニング', type: 'learning', duration: '20-30分' },
  { time: '13:00', activity: '仕事', type: 'daily' },
  { time: '18:00', activity: '退勤時間にリスニング 専任コンサルタントとチャット', type: 'learning', duration: '15-20分' },
  { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
  { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '30分' },
  { time: '23:00', activity: '就寝', type: 'daily' },
];

// 週末スケジュールを土曜日と日曜日に分ける
const weekendSchedule = {
  saturday: [
    { time: '07:00', activity: '起床', type: 'daily' },
    { time: '08:00', activity: '英語学習・リスニング', type: 'learning', duration: '45-60分' },
    { time: '09:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '12:00', activity: '英会話', type: 'learning', duration: '90分' },
    { time: '15:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
    { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '60分' },
    { time: '23:00', activity: '就寝', type: 'daily' },
  ],
  sunday: [
    { time: '07:00', activity: '起床', type: 'daily' },
    { time: '08:00', activity: '英語学習・リスニング', type: 'learning', duration: '15-20分' },
    { time: '09:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '12:00', activity: 'シミュレーション英会話の復習', type: 'learning', duration: '30分' },
    { time: '15:00', activity: '趣味やプライベートタイム', type: 'daily' },
    { time: '19:00', activity: '夕飯・お風呂・リラックスタイム', type: 'daily' },
    { time: '21:00', activity: 'TEDリスニング・スピーキング 週1回のセッション・シミュレーション英会話', type: 'learning', duration: '60分' },
    { time: '23:00', activity: '就寝', type: 'daily' },
  ],
};

// 6. シミュレーション英会話①② - 表示：週数×場面トピック
const simulationData1 = [
  { week: '1-2', topic: '挨拶' },
  { week: '3-4', topic: '自己紹介' },
  { week: '5-6', topic: '道の聞き方/\n聞かれた際の答え方' },
  { week: '7-8', topic: '旅行編\n（チェックイン、観光）' },
  { week: '9-10', topic: 'ホテル\n（チェックイン/アウト）' },
  { week: '11-12', topic: 'カフェ＆レストラン\n（予約、注文）' },
];

const simulationData2 = [
  { week: '13-14', topic: 'ショッピング（試着、会計）' },
  { week: '15-16', topic: '交通機関（電車、バス）' },
  { week: '17-18', topic: 'ビジネスメール' },
  { week: '19-20', topic: 'ビジネスプレゼンテーション①' },
  { week: '21-22', topic: 'ビジネスプレゼンテーション②' },
  { week: '23-24', topic: 'カスタム' },
];

// シミュレーションのアコーディオンアイテム
const simulationAccordionItems1 = [
  { title: '挨拶', content: '基本的な挨拶表現から始まり、時間帯や状況に応じた適切な挨拶方法を学びます。また、初対面での自己紹介や名刺交換の際のマナーなども練習します。' },
  { title: '自己紹介', content: '自分の名前、出身、所属会社、役職などの基本情報を英語で伝える練習をします。また、相手の自己紹介を受けた後の適切な返答や質問の仕方も学びます。' },
  { title: '道の聞き方/聞かれた際の答え方', content: '道に迷った際に場所を尋ねる表現や、逆に道を尋ねられた時の丁寧な対応方法を学びます。方向や距離の表現、ランドマークを使った説明方法なども練習します。' },
  { title: '旅行編（チェックイン、観光）', content: '海外旅行でよく使うフレーズを学びます。ホテルでのチェックイン手続き、観光地での案内所でのやり取り、観光スポットでの質問などをロールプレイで練習します。' },
  { title: 'ホテル（チェックイン/アウト）', content: 'ホテルでのチェックインやチェックアウト時のやり取り、部屋のリクエスト、設備の使い方の質問、トラブル時の伝え方など、宿泊に関する様々なシーンを想定した会話を練習します。' },
  { title: 'カフェ＆レストラン（予約、注文）', content: 'レストランの予約や注文時のやり取り、特別なリクエスト（アレルギー対応など）の伝え方、会計時のやり取りなど、飲食店で必要なコミュニケーションを学びます。' },
];

const simulationAccordionItems2 = [
  { title: 'ショッピング（試着、会計）', content: 'ショッピング時に使える表現を学びます。商品について尋ねる方法、試着をお願いする表現、サイズや色の交換、値段交渉、支払い方法の確認など、買い物シーンでの会話を練習します。' },
  { title: '交通機関（電車、バス）', content: '電車やバスなどの公共交通機関を利用する際に必要な表現を学びます。切符の買い方、乗り場の尋ね方、遅延や乗り換えに関する質問など、移動時に役立つ会話を練習します。' },
  { title: 'ビジネスメール', content: 'ビジネスシーンで必要なメールの書き方を学びます。件名の付け方、適切な挨拶、用件の伝え方、締めくくりの表現など、フォーマルなメールコミュニケーションのコツを練習します。' },
  { title: 'ビジネスプレゼンテーション①', content: 'プレゼンテーションの基本構成や導入部分の作り方を学びます。聴衆の注意を引く開始方法、アジェンダの説明、背景情報の提供など、効果的なプレゼンテーションの土台作りを練習します。' },
  { title: 'ビジネスプレゼンテーション②', content: 'プレゼンテーションの本編と質疑応答に焦点を当てます。データの説明方法、提案や結論の伝え方、質問への対応方法など、説得力のあるプレゼンテーションスキルを磨きます。' },
  { title: 'カスタム', content: '受講者それぞれの業界や職種に特化したシミュレーションを行います。個別のビジネスシーンに合わせたボキャブラリーや表現方法を学び、実際の業務で即活用できるスキルを身につけます。' },
];

// 7. アコーディオン展開 - 内容：各テーマごとの細かい学習内容
const detailAccordionItems = [
  { title: 'ビジネスEメール特訓', content: '状況に応じた適切な表現、丁寧さのレベル調整、効果的な件名のつけ方など、実践的なEメールライティングスキルを習得します。' },
  { title: 'オンライン会議ファシリテーション', content: '議題設定、発言促進、時間管理、合意形成など、英語でのオンライン会議を円滑に進めるためのスキルをロールプレイ形式で学びます。' },
  { title: '異文化理解とコミュニケーション', content: '多様な文化的背景を持つ相手との円滑なコミュニケーションを図るための知識と対応方法を学びます。誤解を防ぎ、信頼関係を築くためのポイントを解説します。' },
  { title: 'プレゼンテーション実践演習', content: '構成、スライド作成、デリバリー、質疑応答まで、ビジネスシーンで求められる英語プレゼンテーションスキルを総合的にトレーニングします。' },
];

// 8. 料金表セクション - 比較対象：1ヶ月／3ヶ月／6ヶ月／12ヶ月
const pricingData = [
    { period: '1ヶ月', price: '$1,480 ', note: '<sup>※1</sup>', monthlyPrice: '' },
    { period: '3ヶ月', price: '$4,400 → $3,980', monthlyPrice: '$1,480 → $1,326' },
    { period: '6ヶ月', price: '$8,880 → $7,480', monthlyPrice: '$1,480 → $1,246' },
    { period: '12ヶ月', price: '$17,760 → $13,980', monthlyPrice: '$1,480 → $1,165' },
];

// 共通コンポーネント用のシミュレーションデータ
const simulationTables = [
  {
    title: 'シミュレーション英会話①',
    data: simulationData1,
    accordionItems: simulationAccordionItems1
  },
  {
    title: 'シミュレーション英会話②',
    data: simulationData2,
    accordionItems: simulationAccordionItems2
  }
];

const Business = () => {
  const [activeTab, setActiveTab] = useState<'weekday' | 'weekend'>('weekday');
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className="business-page">
      {/* 1. ヒーローセクション */}
      <HeroSection 
        title="ビジネス"
        subtitle="プロフェッショナル向け英語力向上プログラム"
        bgColor="primary"
        textColor="light"
        align="center"
        height="medium"
      />

      {/* 2. 導入：基礎英語力の底上げ */}
      {/*
      mdファイル：
      2. 導入：基礎英語力の底上げ
      形式：テキスト＋画像の2カラム
      内容：「英語でのコミュニケーションに自信を持つために～」
      演出：上品なフェードインアニメーション
      */}
      <section className="business-introduction fade-in">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2>英語でのコミュニケーションに自信を持つために</h2>
            <p>
              グローバル化が進む現代のビジネスシーンにおいて、英語での円滑なコミュニケーション能力は必須スキルです。
              Engrowthでは、忙しいビジネスパーソンが限られた時間の中で最大限の成果を出せるよう設計された、
              科学的根拠に基づく英語学習プログラムを提供します。自信を持って世界と渡り合える英語力を、私たちと共に築き上げましょう。
            </p>
          </div>
          <div className="intro-image">
            {/* 画像はpublic/images/に配置想定 */}
            <img src="/images/ビジネスミーティング01.jpeg" alt="英語でコミュニケーションをとるビジネスパーソン" />
          </div>
        </div>
      </section>

      {/* 3. 9つの強み グリッド表示 */}
      {/*
      mdファイル：
      3. 9つの強み グリッド表示
      形式：3カラム×3行（計9カード）
      内容：アイコン＋強調テキスト＋補足テキスト
      デザイン：カードホバー時に浮き上がり, 背景：#eeeeee, アクセント：#8b0000 または #cc0000
      */}
      <section className="business-strengths">
        <div className="container">
          <h2 className="section-title">Engrowth ビジネスプログラムの9つの強み</h2>
          <div className="strengths-grid">
            {strengthsData.map((item, index) => (
              <div key={index} className="strength-card">
                <div className="strength-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 学習スケジュール（平日／週末切替） */}
      {/*
      mdファイル：
      4. 学習スケジュール（平日／週末切替）
      機能：タブ切替（平日 / 週末）
      表示：時間ごとのタイムブロック
      カラー：学習ブロック：#ffe6e6, 日常ブロック：#f8f8f8, タイトル：#d3d3d3＋アクセント赤
      */}
      <section className="business-schedule">
        <div className="container">
          <h2 className="section-title">ビジネスコースの学習時間</h2>
          <div className="schedule-tabs">
            <button
              className={`tab ${activeTab === 'weekday' ? 'active' : ''}`}
              onClick={() => setActiveTab('weekday')}
            >
              平日
            </button>
            <button
              className={`tab ${activeTab === 'weekend' ? 'active' : ''}`}
              onClick={() => setActiveTab('weekend')}
            >
              週末
            </button>
          </div>
          
          {activeTab === 'weekday' ? (
            <div className="schedule-table-container">
              <table className="schedule-table">
                <tbody>
                  {weekdaySchedule.map((item, index) => (
                    <tr key={index} className={`schedule-item ${item.type}`}>
                      <td className="time-column">{item.time}</td>
                      <td className="activity-column">
                        {item.activity}
                        {item.duration && <span className="duration-tag">{item.duration}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="schedule-table-container weekend-tables">
              <div className="weekend-header">
                <div className="weekend-day">土</div>
                <div className="weekend-day">日</div>
              </div>
              <div className="weekend-tables-container">
                <table className="schedule-table weekend-table">
                  <tbody>
                    {weekendSchedule.saturday.map((item, index) => (
                      <tr key={index} className={`schedule-item ${item.type}`}>
                        <td className="time-column">{item.time}</td>
                        <td className="activity-column">
                          {item.activity}
                          {item.duration && <span className="duration-tag">{item.duration}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <table className="schedule-table weekend-table">
                  <tbody>
                    {weekendSchedule.sunday.map((item, index) => (
                      <tr key={index} className={`schedule-item ${item.type}`}>
                        <td className="time-column">{item.time}</td>
                        <td className="activity-column">
                          {item.activity}
                          {item.duration && <span className="duration-tag">{item.duration}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. 学習デザインの3つの柱 */}
      {/*
      mdファイル：
      5. 学習デザインの3つの柱
      形式：3カラムカード
      内容：生活スタイル対応, 進捗モニタリング, 習熟度に応じた柔軟対応
      演出：グラデ背景・ホバーアニメーション
      */}
       <section className="business-pillars">
        <div className="container">
          <h2 className="section-title">学習デザインの3つの柱</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3><span className="pillar-icon">🔄</span> 生活スタイル対応</h3>
              <p>多忙な日々の中でも無理なく学習を継続できるよう、個々のライフスタイルに合わせた柔軟なプランニングを行います。</p>
            </div>
            <div className="pillar-card">
              <h3><span className="pillar-icon">📊</span> 進捗モニタリング</h3>
              <p>学習データに基づき進捗を可視化。定期的なフィードバックで課題を明確にし、学習効果を最大化します。</p>
            </div>
            <div className="pillar-card">
              <h3><span className="pillar-icon">🧠</span> 習熟度に応じた柔軟対応</h3>
              <p>現在のレベルと目標達成に必要なスキルに基づき、カリキュラムを最適化。常に最適な負荷で学習を進めます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* シミュレーション英会話セクション - 共通コンポーネントを使用 */}
      <SimulationSection tables={simulationTables} />

      {/* 7. アコーディオン展開（詳細学習内容） */}
      {/*
      mdファイル：
      7. アコーディオン展開（詳細学習内容）
      内容：各テーマごとの細かい学習内容
      形式：モバイル対応アコーディオン
      */}
      <section className="business-details">
        <div className="container">
          <h2 className="section-title">選択可能な詳細学習テーマ</h2>
          <div className="details-accordion">
            {detailAccordionItems.map((item, index) => (
              <div key={index} className={`accordion-item ${openAccordionIndex === index ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <span className="accordion-icon">{openAccordionIndex === index ? '-' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 料金表セクション */}
      {/*
      mdファイル：
      8. 料金表セクション
      比較対象：1ヶ月／3ヶ月／6ヶ月／12ヶ月
      デザイン：通常価格：#666, 割引価格：#8b0000, 矢印→で価格推移表現
      */}
      <section className="business-pricing">
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

export default Business;