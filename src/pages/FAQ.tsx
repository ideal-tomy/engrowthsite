import { useState } from 'react';
import '../styles/FAQ.css';
import HeroSection from '../components/HeroSection';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    category: '学習について',
    question: '英語が全く話せませんが大丈夫ですか？',
    answer: '問題ありません。一人一人のレベルに合わせた学習プランを提供し、基礎から丁寧にサポートします。'
  },
  {
    category: '学習について',
    question: '1日どのくらい学習時間が必要ですか？',
    answer: '最低30分の学習時間を推奨しています。通勤時間や朝の時間を活用することで、無理なく継続できます。'
  },
  {
    category: '料金について',
    question: '途中解約は可能ですか？',
    answer: '1ヶ月単位での解約が可能です。ただし、長期プランでの割引特典は解約時に通常料金との差額を請求させていただきます。'
  },
  {
    category: '料金について',
    question: '支払い方法は何がありますか？',
    answer: 'クレジットカード払い、銀行振込に対応しています。分割払いについてはご相談ください。'
  },
  {
    category: 'サポートについて',
    question: 'LINEサポートの対応時間は？',
    answer: '基本的に平日9:00〜21:00の間で対応しています。休日でも可能な限り返信いたします。'
  },
  {
    category: 'サポートについて',
    question: 'オンラインセッションの日程変更は可能ですか？',
    answer: '前日までのご連絡で、同週内での振替が可能です。'
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', ...new Set(faqItems.map(item => item.category))];

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="faq">
      <HeroSection 
        title="FAQ"
        subtitle="よくあるご質問"
        bgColor="light"
        textColor="dark"
        align="center"
        height="small"
      />

      <section className="faq-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'すべて' : category}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {filteredItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 