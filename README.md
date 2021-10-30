# 新しい大学シラバスの提案

![image](https://user-images.githubusercontent.com/53786083/139504949-2c6bdbd5-baad-4755-8e27-55ac26e52425.png)

## 製品概要
### 開発背景
「大学のシラバスをより便利に！」を目標として制作しました．  
具体的には，現在の大学のシラバスには以下のような3つの問題があると考えています．

1. 講義が多すぎて，自分の取りたい講義が探しにくい．
2. 参考図書(テキスト)が図書館で借りられるのか調べるのが面倒．
3. 講義の難易度が分からない． 

上記のような問題を解決するために私達は「新しい大学シラバス」を提案します．



### 製品説明
開発背景で示した問題を解決するため，我々の提案するシラバスには次のような機能を追加しました．

1. ある講義に類似する他の講義を表示．
2. シラバスで紹介された教科書や参考書の図書館の貸出状態をリアルタイムで表示．
3. 過去5年分の成績分布を表示．




### 特長
* 便利
* アカウント不要 

### 今後の展望
* 今回のシステムでは2021年度にのみ対応しているが，自動化することで毎年サービスを提供できるようにする．
* 我々学生は立場上こちらの製品を公開することはできないため，大学に今回の製品を提案することで実際に大学シラバスの改善が期待できる．

### 注力したこと（こだわり等）
* 学生として利用者にたった，現システムの問題解決
* できるだけ学生生活を便利に！

## 開発技術
* Doc2Vec, WMD (類似講義検索)
* BeautifulSoup　（シラバスの検索ページおよび本文のスクレイピング）
* 

### 活用した技術（クラウド・API・データ）
* AWS
* 図書館API

#### フレームワーク・ライブラリ・モジュール
* Python, Gensim, MeCab (類似講義検索)
* 

### 独自技術
#### ハッカソンで開発した独自機能・技術・製品に取り入れた研究内容（データ・ソフトウェアなど）
* Doc2vecを用いた類似検索により，類似検索対象を絞ることでWMDで検索する対象を減らした． (類似講義検索)

## フォルダ説明
* similar_search : 類似講義検索に関するプログラム(Python)
