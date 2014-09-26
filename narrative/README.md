# Narrative (Den-Den Landing Page)

## Overview <small>概要</small>

**A Tumblr theme for self-publishers**

セルフパブリッシャー（個人作家）のためのTumblrテーマです。

[デモサイトを見る](http://dendenlp.tumblr.com/)

## Description <small>これは何？</small>

### あなたの本は読者に恵まれていますか？

誰でも手軽に電子書籍を作って販売できる時代になりました。しかし読者を獲得するのは簡単ではありません。 でんでんランディングページはあなたの本の魅力を訪問者に伝え、読者になって貰うお手伝いをします。

### ランディングページとは何でしょう？

ランディングページとは、インターネットマーケティングの分野で検索エンジンやインターネット広告のリンク先となるページを意味する用語です。一般にランディングページは一枚のHTMLページとして作られることが多く、訪問者をコンテンツ
購入や資料請求に結びつけることを目的としています。

### セルフパブリッシャーもランディングページを持つべき

でんでんランディングページは本（主に電子書籍）を多くの人に届けたいと願うセルフパブリッシャー向けに作られたTumblrのテーマです。このテーマをインストールして必要項目を入力するだけで、誰でも簡単に本の宣伝ページが作れます。

### でんでんランディングページの特徴

このTumblrテーマには次のような特徴があります。

- スマートフォンでも読みやすい（レスポンシブデザイン）
- TwitterやFacebookで共有されやすい（OGP/Twitter Card対応）
- 検索エンジンに最適化している（schema.org対応）
- 電子書籍の試し読みが簡単に埋め込める（[EPUB2Twitter](http://www.iineshoten.com/e2t/)と連携が必要です）

## Warning <small>注意事項</small>

このテーマは単独のHTMLページです。一般的なTumblrテーマのような**ブログ機能はありません**。テキストや画像などを投稿しても表示されませんので注意してください。

このテーマでは一つのTumblrブログの中で一冊の本しか紹介できません。別の本を紹介する時には、新たなブログを作成してください。

- 個人・商用利用ともに無料です
- 利用によって発生した損害の責任は負いません
- 改変は自由ですが自己責任でお願いします

### 対応ブラウザ

- Google Chrome、Firefox、Opera、Safariの最新バージョン
- Internet Explorer 10以降

## Install <small>インストール</small>

1. Tumblrのダッシュボード画面で作成したブログが選択して、`カスタマイズ`を押します。
2. テーマの編集画面で`HTMLを編集`を選びます。
3. `HTMLを編集`の画面に表示されたHTMLコードを削除して、代わりに[index.html]() の内容を貼り付けて保存してください。

## Customize <small>カスタマイズ</small>

1. `詳細設定`画面で**デフォルトのモバイルテーマを使用**と**Tumblrを広める**を無効（灰色の状態）にします。
2. `テーマの編集`画面で次の項目を設定します。

### 設定項目

*使い方についてのさらに詳しい利用マニュアル（HTML形式）を外部サイトで販売しています。応援のつもりで購入頂けると嬉しいです。*

#### 外観オプション

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>タイトル</td><td>（外観オプション）タイトル</td><td>本のタイトルを入力します。HTMLタグは使えません。</td>
</tr>
<tr>
  <td>説明文</td><td>（外観オプション）<br />説明</td><td>本の内容やストーリーを紹介する文章を入力します。改行には`<br>`を入力してください。</td>
</tr>
<tr>
  <td>ヘッダ画像</td><td>（外観オプション）<br />ヘッダ画像</td><td>ヘッダーの背景に表示される画像です。</td>
</tr>
<tr>
  <td>プロフィール画像</td><td>（外観オプション）プロフィール画像</td><td>通常のTumblrではブログの著者のアイコンに使われますが、このテーマではサイトのfaviconにしか使われません。出版者か作品に関する画像をアップロードすることをおすすめします。著者のプロフィール画像は後述する `AuthorImage 01〜06`に別途アップロードしてください。</td>
</tr>
</table>

#### テーマオプション：全体に関する設定


<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>テーマ色</td><td>Primary Color</td><td>テーマの色使いを変更します。</td>
</tr>
<tr>
  <td>キーワード</td><td>Keywords</td><td>検索用のキーワードです。キーワードをカンマ`,`で区切って記述します。ページの見た目には影響しません。</td>
</tr>
<tr>
  <td>GoogleアナリティクスID</td><td>GoogleAnalyticsID</td><td>GoogleアナリティクスIDを入力すると、アクセス解析ができるようになります。ページの見た目には影響しません *必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>schema.orgメタデータを有効にする／無効にする</td><td>EnableSchemaOrg</td><td>検索エンジン向けのメタデータの出力を制御します。ページの見た目には影響しません。特に理由がない限り有効にしてください。</td>
</tr>
</table>

#### テーマオプション：ヘッダに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>ページのサブタイトル</td><td>SiteSubtitle</td><td>このページのサブタイトルです（本のサブタイトルではありません）。検索結果のページタイトルに書名とともに表示されます。初期値は `Official Website` です。</td>
</tr>
<tr>
  <td>表紙画像</td><td>CoverImage</td><td>本の表紙画像です。**横幅260px以上**のものを推奨します。</td>
</tr>
<tr>
  <td>キャッチフレーズ（メイン）</td><td>Catchphrase Main</td><td>訪問者の注意を引く、1〜2行程度の短いテキストです。改行には`<br>`を入力してください。</td>
</tr>
<tr>
  <td>キャッチフレーズ（サブ）</td><td>Catchphrase Sub</td><td>キャッチフレーズ（メイン）を補足する1〜4行程度の文章です。改行には`<br>`を入力してください。</td>
</tr>
<tr>
  <td>タイトル</td><td>BookTitle</td><td>本のタイトルです。（外観オプション）タイトルと同じテキストにしてください。**HTMLが使えます。**</td>
</tr>
<tr>
  <td>サブタイトル</td><td>BookSubtitle</td><td>本のサブタイトルです。*必要ない場合は空欄にしてください。*、**HTMLは使えません**</td>
</tr>
<tr>
  <td>シリーズタイトル</td><td>BookCollectionTitle</td><td>本のシリーズ名などを表すタイトルです。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>ヘッダ画像効果 Blur</td><td>HeaderImageEffect Blur</td><td>ヘッダ画像を少しぼかします。キャッチフレーズなどの文字が読みにくい場合に有効にします。</td>
</tr>
<tr>
  <td>ヘッダ画像効果 Darken</td><td>HeaderImageEffect Darken</td><td>ヘッダ画像を少し暗くします。キャッチフレーズなどの文字が読みにくい場合に有効にします。</td>
</tr>
<tr>
  <td>ヘッダテキスト効果 Shadow</td><td>HeaderTextEffect Shadow</td><td>ヘッダの文字の周囲に薄い影を付けます。キャッチフレーズなどの文字が読みにくい場合に有効にします。</td>
</tr>
</table>

#### テーマオプション：内容紹介セクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionDescription</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionDescription Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionDescription Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

#### テーマオプション：キャラクター紹介セクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionCharacters</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionCharacters Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionCharacters Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>カラム数</td><td>ColumnCount Characters</td><td>大きな画面で表示した場合に、何名のキャラクターを1列に表示するのか指定します。推奨値は、キャラクターが1名の場合:`1`、キャラクターが2名の場合:`2`、キャラクターが3名の場合: `3`、キャラクターが4名の場合:`2`または`4`です。</td>
</tr>
<tr>
  <td>キャラクター画像</td><td>CharacterImage 01〜04</td><td>キャラクターの画像です。**128px以上の正方形**の画像を推奨します。指定しない場合はこのテーマが提供する代替画像が表示されます。</td>
</tr>
<tr>
  <td>キャラクター名</td><td>CharacterName 01〜04</td><td>キャラクターの名前です。名前を設定しないキャラクターはページに表示されないので注意してください。</td>
</tr>
<tr>
  <td>キャラクター説明</td><td>CharacterDesc 01〜04</td><td>キャラクターの説明文です。改行には`<br>`を入力してください。</td>
</tr>
</table>

#### テーマオプション：試し読みセクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionPreview</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionPreview Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionPreview Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>埋め込みコード</td><td>PreviewEmbedCode</td><td>EPUB2Twitterを利用して、ページにEPUBのビューワを埋め込むことができます。埋め込むコードを貼り付けてください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>試し読みリンク</td><td>PreviewLink</td><td>試し読みのリンクボタンを設置します。試し読みページや試し読みファイルがある場合に、URLを指定します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>Twitter埋め込みURL</td><td>TwitterPlayerURL</td><td>EPUB2Twitterを利用して試し読みを埋め込む場合、この項目に試し読みのURLを指定すると、ツイートにEPUBのビューワを埋め込むことができます。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

#### テーマオプション：作品詳細セクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionDetails</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionDetails Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionDetails Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>発行日</td><td>SectionDetails DatePublished</td><td>発行日をYYYY-MM-DDの形式で記述します。**この形式を守らないと検索エンジン向けのメタデータが不正になるので注意してください。**。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>出版者名</td><td>SectionDetails PublisherName</td><td>出版者／出版社の名称です。**HTMLタグは使えません**。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>出版者URL</td><td>SectionDetails PublisherURL</td><td>出版者／出版社のウェブサイトなどのURLです。**。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>ISBN</td><td>SectionDetails ISBN</td><td>ISBN番号がある場合にはここに記述してください。**HTMLタグは使えません**。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>電子書籍識別</td><td>Format EBook</td><td>検索エンジン向けの情報です。電子書籍の場合には有効にしてください。ページの見た目には影響しません。</td>
</tr>
<tr>
  <td>言語</td><td>BookLanguage</td><td>本が使用している言語を`Japanese`、`English`のいずれかで指定します。検索エンジン向けの情報です。ページの見た目には影響しません。</td>
</tr>
<tr>
  <td>フォーマット</td><td>SectionDetails FormatDesc</td><td>ファイル形式や判型／ページ数（紙の本の場合）などを説明する文章を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

#### テーマオプション：レビューセクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionReviews</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionReviews Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionReviews Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビュータイトル</td><td>ReviewTitle 01〜03</td><td>レビューのタイトルです。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビューコメント</td><td>ReviewComment 01〜03</td><td>レビューまたは推薦文です。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビュー掲載元タイトル</td><td>ReviewAttributionTitle 01〜03</td><td>レビューが掲載されている記事やサイトのタイトルを入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビュー掲載元URL</td><td>ReviewAttributionURL 01〜03</td><td>レビューが掲載されている記事やサイトのURLを入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビューアー名</td><td>ReviewerName 01〜03</td><td>レビューまたは推薦文を書いてくれた人の名前です。</td>
</tr>
<tr>
  <td>レビューアーURL</td><td>ReviewerURL 01〜03</td><td>レビューアーに関するURLです。レビューアーのウェブサイトやソーシャルアカウントなどのURLを入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>レビューアーの説明</td><td>ReviewerRole 01〜03</td><td>レビューアーの肩書や短い説明文を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

#### テーマオプション：購入リンクセクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionAcquisition</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionAcquisition Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionAcquisition Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>リンクラベル</td><td>AcquisitionLinkLabel 01〜06</td><td>リンクボタンに表示するテキストです。このテキストがないボタンは表示されません。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>リンクURL</td><td>AcquisitionLinkURL 01〜06</td><td>リンクボタンが参照するURLです。販売ストアのページや直接無料配布する場合はファイルのURLを記述します。</td>
</tr>
</table>

#### テーマオプション：関連作品セクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionRelatedWorks</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionRelatedWorks Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionRelatedWorks Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>カラム数</td><td>ColumnCount RelatedWorks</td><td>大きな画面で表示した場合に、幾つの関連作品を1列に表示するのか指定します。推奨値は、関連作品が1の場合:`1`、関連作品が2の場合:`2`、関連作品が3の場合: `3`、関連作品が4の場合:`2`または`4`です。</td>
</tr>
<tr>
  <td>表紙画像</td><td>RelatedWorkImage 01〜04</td><td>関連作品の表紙画像です。**幅200px以上**を推奨します。</td>
</tr>
<tr>
  <td>タイトル</td><td>RelatedWorkImage 01〜04</td><td>関連作品のタイトルです。</td>
</tr>
<tr>
  <td>URL</td><td>RelatedWorkURL 01〜04</td><td>関連作品のURLです。</td>
</tr>
</table>

#### テーマオプション：著者紹介セクションに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>セクションの表示／非表示</td><td>ShowSectionBiographies</td><td>このセクションの表示／非表示にするスイッチです。無効にするとこのセクションはページに表示されません。</td>
</tr>
<tr>
  <td>見出し</td><td>SectionBiographies Heading</td><td>見出しです。</td>
</tr>
<tr>
  <td>リード文</td><td>SectionBiographies Lead</td><td>リード文です。読者の興味を引く短い文章を入力します。改行には`<br>`を入力してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者画像</td><td>AuthorImage 01〜02</td><td>著者の画像です。**128px以上の正方形**の画像を推奨します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者名</td><td>AuthorName 01〜02</td><td>著者の名前です。名前のない著者は他の項目が入力されていてもページには表示されません。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者仮名名</td><td>AuthorNameKana 01〜02</td><td>著者の名前の仮名表記です。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者説明</td><td>AuthorDescription 01〜02</td><td>著者の略歴などの文章を入力します。改行には`<br>`を入力してください。</td>
</tr>
<tr>
  <td>著者URL</td><td>AuthorURL 01〜02</td><td>著者のウェブサイトやブログなどのURLを入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者Twitterアカウント</td><td>AuthorTwitter 01〜02</td><td>著者のTwitterアカウント名から`@`を除いた文字列を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者Facebookアカウント</td><td>AuthorFacebook 01〜02</td><td>著者のFacebookアカウント名を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>著者Google+アカウント</td><td>AuthorGooglePlus 01〜02</td><td>著者のGoogle+アカウント名から`+`を除いた文字列を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者画像</td><td>ContributorImage 01〜02</td><td>協力者の画像です。**128px以上の正方形**の画像を推奨します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者名</td><td>ContributorName 01〜02</td><td>協力者の名前です。名前のない協力者は他の項目が入力されていてもページには表示されません。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者仮名名</td><td>ContributorNameKana 01〜02</td><td>協力者の名前の仮名表記です。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者の役割</td><td>ContributorRole 01〜02</td><td>協力者が作品に果たした役割を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者説明</td><td>ContributorDescription 01〜02</td><td>協力者の略歴などの文章を入力します。改行には`<br>`を入力してください。</td>
</tr>
<tr>
  <td>協力者URL</td><td>ContributorURL 01〜02</td><td>協力者のウェブサイトやブログなどのURLを入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者Twitterアカウント</td><td>ContributorTwitter 01〜02</td><td>協力者のTwitterアカウント名から`@`を除いた文字列を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者Facebookアカウント</td><td>ContributorFacebook 01〜02</td><td>協力者のFacebookアカウント名を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>協力者Google+アカウント</td><td>ContributorGooglePlus 01〜02</td><td>協力者のGoogle+アカウント名から`+`を除いた文字列を入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

#### テーマオプション：フッタに関する設定

<table>
<tr>
  <th>概要</th><th>オプション名</th><th>説明</th>
</tr>
<tr>
  <td>著作権者</td><td>CopyrightHolder</td><td>このページの著作権者名をアルファベットで入力します。紹介する本の著作権者ではないことに注意してください。*必要ない場合は空欄にしてください。*</td>
</tr>
<tr>
  <td>フッタテキスト</td><td>FooterText</td><td>フッタに表示する任意の文章があれば入力します。*必要ない場合は空欄にしてください。*</td>
</tr>
</table>

## Thank you for your support <small>応援してね</small>

- 画像を豊富に使ったわかりやすい利用マニュアルを有償で販売しています。応援のつもりで購入頂けると嬉しいです
- [ほしい物リスト](http://www.amazon.co.jp/registry/wishlist/CHV76NOX7UD) や [グッズ購入](https://suzuri.jp/denshoch) も嬉しいです。

## Licence <small>ライセンス</small>

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author <small>作った人</small>

- [ろす (@lost_and_found) ](https://twitter.com/lost_and_found) from [電書ちゃんねる](http://densho.hatenablog.com/)

## Credits <small>謝辞</small>

- [@fujinyo](https://twitter.com/fujinyo)（[言い値書店](http://www.iineshoten.com/), [EPUB2Twitter](http://www.iineshoten.com/e2t/)）
- [@satorumurmur](https://twitter.com/satorumurmur) ([BiB/i](http://sarasa.la/bib/i/))

また、このテーマは、[@sanographix](https://github.com/sanographix) さんの同人音楽CD特設サイト向けTumblrテーマ [Tokusetsu 2](http://sanographix.github.io/tumblr/tokusetsu2/) に着想を得ています。

この場を借りて皆さんにお礼申し上げます。
