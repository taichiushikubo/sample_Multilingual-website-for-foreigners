# CITY OF KKKKKKKKKK - Official Website

自治体向け外国人情報発信サイト（英語版）のトップページ（SP版）デザインカンプ実装。

## 📋 プロジェクト概要

**用途**: 自治体向けの外国人（主にアメリカ・北米）への情報発信サイト  
**目的**: 生活情報・観光情報を伝え、信頼感を与えるビジュアルデザイン  
**デザインコンセプト**: プロフェッショナルで信頼性のある、モダンな自治体サイト

## 🎨 デザイン仕様

### カラーパレット

#### Primary Colors（信頼感のあるネイビー）
- **Deep Navy**: `#0B1B3A` - メインテキスト、フッター背景
- **Primary Light**: `#1A2F4A` - グラデーション用

#### Accent Colors（メインアクセント）
- **Warm Red**: `#C93434` - ボタン、リンク、重要箇所
- **Accent Hover**: `#B02A2A` - ホバー時
- **Accent Light**: `#E85454` - 軽いアクセント

#### Accent 2（オプション）
- **Muted Teal**: `#0AA6A6` - セカンダリボタン
- **Accent 2 Hover**: `#089595` - ホバー時

#### Background Colors
- **Primary BG**: `#FFFFFF` - メイン背景
- **Secondary BG**: `#F6F6F8` - セクション背景

#### Text Colors
- **Primary Text**: `#111827` - メインテキスト
- **Secondary Text**: `#6B7280` - サブテキスト
- **Light Text**: `#9CA3AF` - 軽いテキスト
- **Inverse Text**: `#FFFFFF` - 反転テキスト

### フォント

- **Primary Font**: `Inter` (Google Fonts)
  - Weights: 400, 500, 600, 700
  - フォールバック: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### タイポグラフィスケール

- **H1 (Hero Title)**: 36px (SP: 28px)
- **H2 (Section Title)**: 28px (SP: 24px)
- **Body Text**: 16px
- **Small Text**: 14px / 13px

## 📁 ディレクトリ構造

```
cloudworks2/
├── index.html          # メインHTML
├── css/
│   └── style.css       # メインスタイルシート
├── js/
│   └── script.js       # JavaScript機能
├── img/                # 画像ファイル格納先
│   ├── hero-image.jpg  # ヒーローセクション画像（差し替え対象）
│   └── tourism-guide.jpg # 観光ガイド画像（差し替え対象）
└── README.md           # このファイル
```

## 🖼️ 画像の差し替え方法

### 1. Hero セクション画像

**ファイルパス**: `img/hero-image.jpg`

**推奨仕様**:
- サイズ: 幅 800px以上推奨（高さは自動調整）
- アスペクト比: 16:9 推奨
- 形式: JPG / WebP
- ファイルサイズ: 200KB以下推奨（パフォーマンス考慮）

**差し替え手順**:
1. `img/` フォルダに新しい画像を配置
2. `index.html` の43行目を編集:
   ```html
   <img src="img/hero-image.jpg" alt="Scenic view of KKKKKKKKKK City" ...>
   ```
3. `alt` 属性のテキストも適切に変更してください

### 2. Tourism Guide セクション画像

**ファイルパス**: `img/tourism-guide.jpg`

**推奨仕様**:
- サイズ: 幅 800px以上推奨
- アスペクト比: 16:9
- 形式: JPG / WebP
- ファイルサイズ: 200KB以下推奨

**差し替え手順**:
1. `img/` フォルダに新しい画像を配置
2. `index.html` の128行目を編集:
   ```html
   <img src="img/tourism-guide.jpg" alt="Beautiful landmarks and attractions..." ...>
   ```

### 3. 画像最適化のヒント

- **オンラインツール**: [TinyPNG](https://tinypng.com/) や [Squoosh](https://squoosh.app/)
- **コマンドライン**: ImageOptim, optipng など
- **WebP形式**の使用を推奨（対応ブラウザのみ自動対応）

## 🎨 カラーの変更方法

すべてのカラーは `css/style.css` の `:root` 変数で管理されています。

**変更箇所**: `css/style.css` の 3-42行目

```css
:root {
    --color-accent: #C93434;        /* メインアクセント（赤）を変更 */
    --color-primary: #0B1B3A;       /* ネイビーを変更 */
    /* ... その他の変数 */
}
```

主要なカラーを変更する場合は、該当する変数を編集するだけで全体に反映されます。

### カラー変更の推奨パターン

1. **メインアクセント（赤）の変更**: `--color-accent` を変更
2. **背景色の変更**: `--color-bg-primary`, `--color-bg-secondary` を変更
3. **テキストカラーの調整**: `--color-text-primary`, `--color-text-secondary` を変更

## 📝 セクション構成

### 1. Header
- シンプルなナビゲーションヘッダー
- スティッキーヘッダー（スクロール時に固定）

### 2. Hero / First View
- 大きなタイトルとCTAボタン
- 右側にアイキャッチ画像（大きな画像推奨）
- グラデーション背景

### 3. News
- タブによるカテゴリフィルタリング（JavaScriptで動作）
- カード化されたニュースリスト
- ホバーエフェクト付き

### 4. About
- グリッドレイアウトのコンテンツブロック
- カードスタイル、ホバーで浮き上がる効果

### 5. Official Tourism Guide
- 大きな画像と説明テキスト
- カードスタイルで視覚的に強調

### 6. Related Information
- 横スクロールカルーセル
- ナビゲーションドット

### 7. Publications & Official SNS
- ソーシャルメディアボタン
- グラデーション背景

### 8. Footer
- ダークネイビー背景
- ナビゲーションリンクと連絡先情報

## ⚙️ 機能

### JavaScript機能

1. **News タブ切り替え**
   - タブクリックでカテゴリフィルタリング
   - スムーズなフェードイン/アウトアニメーション

2. **スクロールアニメーション**
   - セクションがビューポートに入ったときにフェードイン
   - Intersection Observer API使用

3. **スムーズスクロール**
   - アンカーリンクのスムーズスクロール

4. **画像遅延読み込み**
   - `loading="lazy"` 属性による自動遅延読み込み

## ♿ アクセシビリティ対応

- **ARIA属性**: `aria-label`, `aria-selected`, `role` などを適切に使用
- **フォーカススタイル**: `:focus-visible` でキーボード操作時の視覚的フィードバック
- **コントラスト比**: WCAG AA基準を満たすカラー選択
- **セマンティックHTML**: `header`, `main`, `section`, `footer` などを使用
- **画像のalt属性**: すべての画像に適切な代替テキスト

## 🔧 カスタマイズポイント

### フォント変更

`index.html` の10行目と `css/style.css` の `--font-family` 変数を編集:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet">
```

```css
--font-family: 'YOUR_FONT', sans-serif;
```

### 余白の調整

`css/style.css` の `:root` セクションのスペーシング変数を編集:

```css
--spacing-lg: 24px;  /* 大きな余白を変更 */
```

### 影の強度調整

`css/style.css` の `:root` セクションのシャドウ変数を編集:

```css
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), ...;
```

## 📱 レスポンシブ対応

- **SP版最適化**: 375px〜480px幅を主に考慮
- **メディアクエリ**: `@media (max-width: 480px)` でフォントサイズなど調整
- **フレックスボックス/グリッド**: モダンなレイアウト手法を使用

## 🚀 パフォーマンス最適化

- **画像の遅延読み込み**: `loading="lazy"` 属性
- **フォントの事前読み込み**: `preconnect` でGoogle Fontsを最適化
- **CSS変数の使用**: ブラウザキャッシュを活用
- **JavaScriptの最適化**: イベントリスナーの適切な管理

## 📄 ライセンス

このプロジェクトは自治体向けの公式サイトデザインとして制作されています。

## 🔄 更新履歴

- **2025-03-XX**: 初版リリース（トップページ5セクション完成）
- 残りセクション（Related Info / Publications / Footer）は追って追加予定

## 📞 サポート

技術的な質問やカスタマイズのご相談は、プロジェクト管理者までお問い合わせください。

---

**制作意図**:  
このデザインは、アメリカ・北米の外国人訪問者に対して信頼感と親しみやすさを両立させたビジュアルを目指しています。赤系のアクセントカラーで親しみやすさを、ネイビー系のプライマリカラーで信頼感を表現しています。モダンなカードデザインとスムーズなアニメーションにより、プロフェッショナルな印象を与えます。

