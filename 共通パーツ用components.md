---
# Components.md
Engrowthサービスページ用：共通パーツ仕様

## ■ カードコンポーネント（CardComponent）

- **用途**：Reasonページ（Reason1/Reason2/Reason3）で使用
- **デザイン指示**：
  - 角丸：大きめ（`rounded-2xl` 推奨）
  - シャドウ：弱め（`shadow-md`）
  - 枠線：なし（borderなしシンプル）
  - 背景色：白（#ffffff）
  - 配置：PC版3カラム、モバイル版1カラム
  - 内部構成：
    - 上部：タイトル（h3 or h4）
    - 下部：説明文（pタグ、適度に改行）
  
```html
<div class="card">
  <h3>タイトル</h3>
  <p>説明文がここに入ります。モバイルでは1カラムに崩れて表示されます。</p>
</div>
```

## ■ タブコンポーネント（TabComponent）

- **用途**：service.mdでReason1/2/3切り替え用
- **デザイン指示**：
  - タブボタンは横並び（モバイル時は縦並び可）
  - ホバー時に軽いフェードインエフェクト
  - 選択中タブはハイライトカラー（例：テーマカラー #ff7f7f 系）
  - 内容切替はスムーズフェード推奨

```html
<div class="tabs">
  <button>Reason1</button>
  <button>Reason2</button>
  <button>Reason3</button>
</div>
<div class="tab-content">
  <!-- タブで切り替わる各コンテンツ -->
</div>
```

## ■ アイコンリストコンポーネント（IconListComponent）

- **用途**：各Reasonページの特徴説明箇所
- **デザイン指示**：
  - リストの先頭にアイコン（例：チェックマーク、星など）
  - テキストはシンプル・スマートに
  - アイコンサイズは小さめ（16px～20px）
  - 行間はやや広め（読みやすさ重視）

```html
<ul class="icon-list">
  <li><i class="icon-check"></i> 項目テキスト</li>
  <li><i class="icon-check"></i> 項目テキスト</li>
  <li><i class="icon-check"></i> 項目テキスト</li>
</ul>
```

---

# ■備考（全体共通）
- フォントはモダン系（例：Roboto、Noto Sans）
- セクション区切りにほんのりグレー背景（#f9f9f9推奨）
- 余白（padding）は大きめ、間延びしないように
- 高級感・信頼感を損なわないシンプル美重視

---
