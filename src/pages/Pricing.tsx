import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pricing.css'; // 新しいCSSファイルをインポート
import StylishTitle from '../components/StylishTitle';
import HeroSection from '../components/HeroSection'; // オプション: ページタイトル用

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* ヒーローセクション */}
      <HeroSection 
        title="料金プラン"
        subtitle="あなたに最適なプランをお選びいただけます"
        bgColor="light" // 他ページに合わせて調整 (例: light)
        textColor="dark" // 背景色に合わせて調整 (例: dark)
        align="center" // 他ページに合わせて調整 (例: center)
        height="medium" // 他ページに合わせて調整 (例: medium)
      />

      <div className="container section-padding">
        
        {/* --- ビジネスパーソン向け料金 --- */}
        <section className="pricing-section">
          <StylishTitle 
            title="ビジネスパーソン向け料金"
            type="section"
            align="center"
            size="large"
          />
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th></th>
                  <th>受講料</th>
                  <th>1ヶ月あたり</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1ヶ月</td>
                  <td>$1,480 <sup className="footnote-marker">※1</sup></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3ヶ月</td>
                  <td><s className="original-price">$4,400</s> → <strong>$3,980</strong></td>
                  <td><s className="original-price">$1,480</s> → <strong>$1,326</strong></td>
                </tr>
                <tr>
                  <td>6ヶ月</td>
                  <td><s className="original-price">$8,880</s> → <strong>$7,480</strong></td>
                  <td><s className="original-price">$1,480</s> → <strong>$1,246</strong></td>
                </tr>
                <tr>
                  <td>12ヶ月</td>
                  <td><s className="original-price">$17,760</s> → <strong>$13,980</strong></td>
                  <td><s className="original-price">$1,480</s> → <strong>$1,165</strong></td>
                </tr>
              </tbody>
            </table>
            <p className="footnote"><sup className="footnote-marker">※1</sup> 1ヶ月プランは3ヶ月プラン以上を修了者のみが契約可</p>
          </div>
        </section>

        {/* --- 学生向け料金 --- */}
        <section className="pricing-section">
           <StylishTitle 
            title="学生向け料金"
            type="section"
            align="center"
            size="large"
          />
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th></th>
                  <th>受講料</th>
                  <th>1ヶ月あたり</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1ヶ月</td>
                  <td>$1,780 <sup className="footnote-marker">※1</sup></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3ヶ月</td>
                  <td><s className="original-price">$5,340</s> → <strong>$4,980</strong></td>
                  <td><s className="original-price">$1,780</s> → <strong>$1,660</strong></td>
                </tr>
                <tr>
                  <td>6ヶ月</td>
                  <td><s className="original-price">$10,680</s> → <strong>$9,480</strong></td>
                  <td><s className="original-price">$1,780</s> → <strong>$1,580</strong></td>
                </tr>
                <tr>
                  <td>12ヶ月</td>
                  <td><s className="original-price">$21,360</s> → <strong>$17,980</strong></td>
                  <td><s className="original-price">$1,780</s> → <strong>$1,498</strong></td>
                </tr>
              </tbody>
            </table>
            <p className="footnote"><sup className="footnote-marker">※1</sup> エッセイ添削のみ。3ヶ月プラン修了者は$1,490、6ヶ月プラン修了者は$780で利用可</p>
          </div>
        </section>

        {/* --- サービス概要と詳細へのリンク --- */}
        <section className="service-summary-section">
          <StylishTitle 
            title="各プランに含まれる主なサービス"
            type="feature" // 指示書通り feature を使用
            align="left" // 指示書通り left を使用
            size="medium"
          />
          {/* === 概要テキストは要調整 === */}
          <p>すべてのプランには、基本的な学習サポート、オンライン教材へのアクセス、定期的な進捗確認が含まれます。個別のニーズに合わせたカスタマイズも可能です。</p>
          <p>より詳しいサービス内容や、各プラン独自の特典については、以下のページをご覧ください。</p>
          
          <div className="action-buttons">
            <Link to="/services" className="secondary-button">サービス全体について</Link>
            <Link to="/business" className="primary-button">ビジネスパーソン向け詳細</Link>
            <Link to="/students" className="primary-button">学生向け詳細</Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pricing; 