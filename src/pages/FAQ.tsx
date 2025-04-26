import React, { useState } from 'react';
import '../styles/pages.css';
import HeroSection from '../components/HeroSection';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// FAQデータ
const faqData: FAQItem[] = [
  {
    question: "Engrowthの学習方法はどのように他と違いますか？",
    answer: "Engrowthでは、単なる英語の勉強ではなく、ビジネス場面で即実践できるスキルの習得に焦点を当てています。実際のビジネスシナリオを基にした演習、実践的なロールプレイ、そして個別のフィードバックを通じて、実務で直接活かせる英語力を養います。また、学習者一人ひとりのニーズと目標に合わせたカスタマイズされたアプローチを提供します。",
    category: "learning"
  },
  {
    question: "初心者でも参加できますか？",
    answer: "はい、初心者の方も歓迎します。プログラム開始時に英語レベルを評価し、それに基づいて最適な学習パスを設計します。基礎から始めて、徐々にビジネス英語のスキルを構築していきます。個別指導とグループセッションの組み合わせにより、全ての学習者がサポートを受けながら成長できる環境を整えています。",
    category: "learning"
  },
  {
    question: "どのくらいの期間で上達が期待できますか？",
    answer: "上達の速度は個人の学習ペース、現在の英語レベル、学習に投入できる時間によって異なります。しかし、多くの学習者は3ヶ月程度で明確な進歩を実感し始めます。一貫した学習と実践、そして当社の科学的アプローチに基づく学習法により、6ヶ月後には職場での英語使用に自信を持てるようになる方がほとんどです。定期的な進捗評価とフィードバックセッションで、あなたの成長を確認します。",
    category: "learning"
  },
  {
    question: "料金体系を教えてください",
    answer: "プランは3種類あります。ベーシックプラン（月額28,000円）、プレミアムプラン（月額48,000円）、VIPプラン（月額98,000円）。それぞれ、提供されるレッスン数、個別指導の頻度、追加リソースへのアクセスが異なります。詳細な比較はPricingページをご覧ください。また、6ヶ月または12ヶ月の一括支払いには割引が適用されます。企業向けの団体割引もございますので、お問い合わせください。",
    category: "pricing"
  },
  {
    question: "返金ポリシーはありますか？",
    answer: "はい、私たちは30日間の満足保証を提供しています。プログラム開始から30日以内であれば、全額返金を受けることができます。この期間中に当社のアプローチがご自身に合わないと感じた場合、返金手続きをさせていただきます。ただし、教材費など一部の費用は返金対象外となる場合があります。詳細は利用規約をご参照ください。",
    category: "pricing"
  },
  {
    question: "カスタマイズされた企業トレーニングは提供していますか？",
    answer: "はい、企業固有のニーズに合わせたカスタムトレーニングプログラムを提供しています。特定の業界用語、会社内の通信規約、または特定のビジネス目標に焦点を当てたプログラムを開発することができます。企業向けの詳細については、お問い合わせフォームからご連絡いただくか、直接営業担当までお電話ください。",
    category: "pricing"
  },
  {
    question: "どのようなサポートが利用できますか？",
    answer: "私たちは学習者の成功を確実にするために包括的なサポートを提供しています。個別チュートリアル、グループQ&Aセッション、オンライン学習ポータルへの24時間アクセス、専用アプリ、メール・チャットでの質問対応などが含まれます。プレミアムとVIPプランでは、パーソナルコーチとのより頻繁なセッションや、追加のサポートリソースが提供されます。",
    category: "support"
  },
  {
    question: "レッスンに参加できなかった場合はどうなりますか？",
    answer: "予定されたレッスンに参加できない場合は、24時間前までにキャンセルまたは再スケジュールが可能です。多くのレッスンは録画され、後で視聴することもできます。また、カリキュラムについていくのに問題がある場合は、担当コーチに追加のサポートを依頼することができます。私たちは柔軟性を大切にし、学習者のライフスタイルに合わせたサポートを提供しています。",
    category: "support"
  },
  {
    question: "どのような学習教材が提供されますか？",
    answer: "私たちは総合的な学習体験のために多様な教材を提供しています。インタラクティブなオンラインワークブック、ビデオレッスン、オーディオ練習、ビジネス英語フレーズの辞典、実践的なケーススタディ、シミュレーション演習などが含まれます。すべての教材はデジタルプラットフォームで利用でき、印刷可能なPDF形式でもダウンロードできます。教材は定期的に更新され、最新のビジネストレンドと言語の発展を反映しています。",
    category: "learning"
  }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="faq-page">
      <HeroSection
        title="よくある質問"
        subtitle="Engrowthについてのよくある質問にお答えします。さらに詳しい情報が必要な場合は、お気軽にお問い合わせください。"
      />

      <div className="faq-container">
        <div className="category-filter">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            すべて
          </button>
          <button 
            className={activeCategory === 'learning' ? 'active' : ''} 
            onClick={() => setActiveCategory('learning')}
          >
            学習について
          </button>
          <button 
            className={activeCategory === 'pricing' ? 'active' : ''} 
            onClick={() => setActiveCategory('pricing')}
          >
            料金について
          </button>
          <button 
            className={activeCategory === 'support' ? 'active' : ''} 
            onClick={() => setActiveCategory('support')}
          >
            サポートについて
          </button>
        </div>

        <div className="content-section">
          <div className="faq-list">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 