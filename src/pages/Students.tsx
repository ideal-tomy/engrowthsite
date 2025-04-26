import React from 'react';
import '../styles/Students.css';
import SimulationSection from '../components/SimulationSection';

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

const Students = () => {
  return (
    <div className="students-page">
      <section className="hero">
        <div className="container">
          <h1>Students</h1>
          <p>学生のための英語学習プログラム</p>
        </div>
      </section>

      <section className="persona">
        <div className="container">
          <h2>こんな方におすすめ</h2>
          <div className="persona-grid">
            <div className="persona-card">
              <h3>英語に苦手意識がある</h3>
              <p>文法や単語は知っているのに、実践で使えない方</p>
            </div>
            <div className="persona-card">
              <h3>留学・進学を目指す</h3>
              <p>海外大学への進学や留学を考えている方</p>
            </div>
            <div className="persona-card">
              <h3>就活で必要</h3>
              <p>外資系企業への就職を視野に入れている方</p>
            </div>
          </div>
        </div>
      </section>

      <section className="learning">
        <div className="container">
          <h2>学習ステップ</h2>
          <div className="learning-steps">
            <div className="learning-step">
              <h3>Step 1: 基礎固め</h3>
              <p>TEDやポッドキャストで生きた英語に触れる</p>
            </div>
            <div className="learning-step">
              <h3>Step 2: 瞬間英作文</h3>
              <p>日常的な表現を即座に英語で表現できるように</p>
            </div>
            <div className="learning-step">
              <h3>Step 3: 実践練習</h3>
              <p>ディスカッションやプレゼンテーションで実践</p>
            </div>
          </div>
        </div>
      </section>

      <section className="support">
        <div className="container">
          <h2>支援フロー</h2>
          <div className="support-content">
            <div className="support-item">
              <h3>受講開始</h3>
              <p>現状分析と目標設定を行い、個別カリキュラムを作成</p>
            </div>
            <div className="support-item">
              <h3>LINE学習</h3>
              <p>毎日のLINEでの課題提出と添削指導</p>
            </div>
            <div className="support-item">
              <h3>定着確認</h3>
              <p>週1回のオンラインセッションで学習内容を確認</p>
            </div>
            <div className="support-item">
              <h3>応用展開</h3>
              <p>実践的な場面での英語使用をサポート</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>料金プラン</h2>
          <div className="pricing-card">
            <h3>学生プラン</h3>
            <p className="price">¥20,000/月〜</p>
            <ul>
              <li>週1回のオンラインセッション</li>
              <li>LINE無制限サポート</li>
              <li>オリジナル教材の提供</li>
              <li>学割適用可能</li>
              <li>3ヶ月以上の継続割引あり</li>
            </ul>
          </div>
        </div>
      </section>

      {/* シミュレーション英会話セクション */}
      <SimulationSection tables={simulationTables} />
    </div>
  );
};

export default Students; 