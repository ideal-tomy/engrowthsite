import React from 'react';
import '../styles/pages.css';
import TabComponent from '../components/TabComponent';
import Reason1Content from '../components/Reason1Content';
import Reason2Content from '../components/Reason2Content';
import Reason3Content from '../components/Reason3Content';
import HeroSection from '../components/HeroSection';
import StylishTitle from '../components/StylishTitle';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Services: React.FC = () => {
  const tabs: TabItem[] = [
    { id: '1', label: 'ビジネス特化', content: <Reason1Content /> },
    { id: '2', label: '効率的学習', content: <Reason2Content /> },
    { id: '3', label: '結果重視', content: <Reason3Content /> },
  ];

  return (
    <div className="page-container">
      <HeroSection 
        title="メソッドロジー" 
        subtitle="Engrowtだからこそ実現できる3つの特徴" 
        bgColor="gradient" 
        textColor="light" 
        align="center"
        height="medium"
      />
      
      <div className="section intro-section">
        <div className="container">
          <StylishTitle 
            title="Engrowtが選ばれる3つの特徴" 
            subtitle="他社との違いを明確にする私たちの強み" 
            type="section" 
            align="center"
            size="large"
          />
          
          <div className="intro-text">
            <p>
              Engrowtは、ビジネスパーソンのための実践的な英語学習プログラムです。
              効率的な学習方法と、結果重視のアプローチで、短期間で実践的な英語力を身につけることができます。
            </p>
          </div>
          
          <TabComponent tabs={tabs} />
          
          <div className="cta-box">
            <StylishTitle 
              title="あなたの英語習得の旅を始めましょう" 
              type="accent" 
              align="center"
              size="medium"
            />
            <p>
              Engrowtの効果的なメソッドで、ビジネスで通用する英語力を手に入れませんか？
              無料カウンセリングであなたに最適なプランをご提案します。
            </p>
            <div className="action-buttons">
              <a href="/contact" className="primary-button">無料カウンセリングを予約する</a>
              <a href="/pricing" className="secondary-button">料金プランを確認する</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 