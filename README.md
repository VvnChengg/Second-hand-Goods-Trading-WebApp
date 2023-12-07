# NTUIM112 - WebApp Final Project: 好市好事

## Introduction

Welcome to the README file for the final project of NTUIM112 - WebApp. Our project, "好市好事," is designed to create a web application that promotes reusing through the development of a second-hand market website. Within this README, you will discover comprehensive instructions on setting up and running the project, as well as the features we have implemented.

## Prerequisites

Before starting the project, make sure you have the following:

- Python installed on your system
- Redis server installed
- A virtual environment (optional but recommended)

## Setup

To set up the project, follow these steps:

Clone the repository to your local machine.

1. Clone the repository to your local machine.
   `git clone https://github.com/VvnChengg/WebApp.git`

2. Navigate to the project directory.
   `cd Second-hand-Goods-Trading-WebApp`

3. (Optional) Create and activate a virtual environment. It is recommended to use virtual environments to isolate project dependencies.

```
python -m venv env
source env/bin/activate  # For Unix/Linux
env\Scripts\activate  # For Windows
```

4. Install the required packages. This project uses a requirements.txt file to manage dependencies. Run the following command to install them.
   `pip install -r requirements.txt`

5. Start the Redis server. Open a new terminal window and run the following command:
   `redis-server`

6. Run the development server. Open another terminal window and run the following command:
   `python manage.py runserver`

If you are on macOS, you can also try running `python3 manage.py runserver` if the above command does not work.

7. Access the web application. Once the server is running, open your web browser and go to `http://localhost:8000` to access the "好市好事" web application.

8. To log-in, we have prepared two users account for you to explore around.

- The first account:
Username:
```Owen```
Password:
```1```

- The second account:
Username:
```Josh```
Password:
```1```

## Features

### 1. 帳號系統

- 註冊
  在註冊的時候是以填寫會員的使用者名稱、電子信箱以及設定的密碼（使用者名稱無法與其他人重複），填寫完資料後按註冊便會在資料庫建立相關使用者的資料，而其中若有已經註冊過的會員，點選連結可以直接到登入的介面。
- 認證成功
  由於我們的帳號系統有增加信箱驗證功能，必須要到註冊時填寫的信箱點選發送的代碼才可以認證成功。若沒有接受信箱驗證，此時的會員資料在後端會以未被授權的形式表示，也就是無法成功登入。
- 登入
  登入的介面就是以註冊時填寫的使用者名稱以及密碼登入，按登入鍵後便會到後端資料庫核對資料，其中無法登入的狀況有以下幾種，使用者不存在、帳號並未成功驗證信箱以及密碼錯誤。
- 忘記密碼
  忘記密碼是以填寫使用者名稱的方式回傳給資料庫，查看該使用者名稱註冊時所用的信箱並寄送代碼，若使用者點選該代碼的話，便會跳到更改密碼的介面。
- 更改密碼
  更改密碼是以填寫新的密碼和再輸入一次新密碼，其中兩組填寫的密碼必須一致，否則會有兩組密碼必須相同的提示跳出。填寫完提交後，便會去後端的資料庫更新該名使用者的密碼，讓之後登入時的密碼以新的為主。
- 登出
  按登出鍵會將會員的登入狀態變成登出，跳出會員已成功登出的訊息，並回到原本的登入介面。

### 2. 聊天室

- 用戶列表
  在聊天室頁面的左邊，會列出過往聊天過的用戶名稱、最後上線時間（系統時間比台灣快八小時），使用者可點擊用戶切換聊天對象。
- 對話視窗
  呈現過往聊天內容，對方說的話在左側，使用者自己說的話在右側，並有訊息輸入框可以傳送新訊息。
- 簡單搜索
  可以透過搜索用戶名稱來找到想要對話對象。

### 3. 二手市集

- 現有商品
  不用登入即可看到所有的商品，每個商品會呈現商品名稱、價格、`♡`、＋或－。`♡`代表把該商品加入我的最愛，＋代表聯絡賣家，網頁將導向到聊天室並自動建立買賣方的對話框，而只有賣家自己登入後才會看到－，－代表刪除該商品。
- 商品分類
  i. 對「現有商品」進行分類，不必登入即可使用，點選類別後僅會出現該類別的商品。
  ii. 對「我的商品」進行分類，使用者登入並進到「我的商品」才可使用，點選類別後僅會出現該類別且該使用者販賣的商品。
- 商品資訊
  使用者登入後才可查看商品的詳細資訊，亦即當初賣家提供的所有資訊。每個商品資訊都設有有留言區可讓會員針對該商品提問或發表意見，每個留言都會顯示會員名稱、留言內容、留言時間，並按照留言時間排序。
- 我的最愛
  在網頁上的符號為`♡`，使用者登入後才可使用此功能，此功能類似購物車，讓還在猶豫要不要購買商品的會員可以先將商品加入我的最愛。
- 搜尋商品
  不用登入即可使用此功能，使用者輸入字串並送出後，會篩選出物品名稱含有該字串的物品，若沒有商品符合，則會顯示「沒有找到相符的物品」以及「返回二手市集」的連結。
- 個人商品
  在網頁上的符號為`☺`，使用者須登入後才可查看自己正在販賣的物品，在個人商品中可以新增商品和點選分類。
- 新增商品
  使用者登入後，進入「個人商品」才可使用此功能，使用者必須提供商品名稱、價格、分類、交易方式、數量、商品狀況、圖片等資訊，面交地點則是選填。使用者填完並送出表單後，即可在二手市集看到剛新增的商品。

### 4. 首頁

進入網頁後的主要頁面，也是整個網站系統的跟目錄，包含前往「二手市集」、「聊天室」、「專欄文章」與「活動區」的 navigation bar 與前往登入介面的 top bar。封面為我們的專案名稱 – 好市好事

- 專欄文章
  在專欄文章的部分，我們想提供使用者能夠瀏覽一些與二手市集、環保及垃圾減碳的文章，也貼合我們網站的主要宗旨。目前共有 4 篇文章，使用者可點擊文章區塊觀看完整文章，點擊後將會在畫面中央出現一個半透明的視窗(popup pages)，設有關閉按鈕。使用者亦可以點下專欄文章下方的小點，在文章間進行切換。
- 活動區
  未登入的使用者可以查看到現有的活動，若要新增活動或報名活動則需要登入。新增活動須填寫活動名稱、時間、地點，報名活動後，「報名活動」的按鈕會顯示成「取消報名」，再次點擊即可取消報名該活動，按鈕將變回「報名活動」；而在發布者登入後，活動按鈕也會變成「取消活動」。

## 未完成的 Feature

### 1. 切換語言功能

在切換語言的方面，我們本來打算串接 Google API 裡的 Translator，透過這樣的方式實作切換多種語言的功能，但是在建立 Google project 時發現並非可以翻譯整個的網頁，像是有字數限制、頁面限制等等因素，若要用完整的翻譯必須要付費，加上考慮到翻譯品質的比較不可控，因此我們放棄使用 Google API 並決定移除切換語言的功能。另外，考慮到現在的 Browser 都已經有自家免費的語言翻譯功能，切換語言的功能的做法對網站並沒有很大的需要和價值。

## Contributing

If you would like to contribute to this project, please follow these steps:

Fork the repository on GitHub.
Create a new branch with a descriptive name for your feature or bug fix.
Make the necessary changes and commit them.
Push your changes to your forked repository.
Submit a pull request to the main repository, explaining the changes you have made.

---

Please note that the above instructions assume a Unix/Linux-based system. If you are using a Windows system, make sure to use the appropriate commands or tools as needed.
