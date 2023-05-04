from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import chromedriver_binary
import time
import urllib.parse

import chatgpt

# twitterログイン
def tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, is_reply=False, explore_path=''):
    options = webdriver.ChromeOptions()
    # ヘッドレスモードに
    # options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    # ブラウザーを起動
    driver = webdriver.Chrome(options=options)
    driver.set_window_size('1200', '1000')  #大事。デフォルトが800*600になっている。headlessだと要素部分が表示されないことがあるため。

    twitter_base = TWITTER_BASE + "login/"
    account = LOGIN_ID
    password = PASSWORD

    # ログインページを開く
    driver.get(twitter_base)
    time.sleep(2)

    # account入力
    element_account = driver.find_element_by_name("text")
    element_account.send_keys(account)
    
    # デバッグ1
    driver.save_screenshot('①ログインID入力画面.png')
    
    # 次へボタンクリック
    element_login_next = driver.find_element_by_xpath('//div/span/span[text()="次へ"]')
    #print(element_login_next)
    #driver.close()
    #exit()

    #画像のリンクをクリック
    element_login_next.click()
    time.sleep(2) 

    # パスワード入力
    element_pass = driver.find_element_by_name("password")
    element_pass.send_keys(password)

    # ログインボタンクリック
    element_login = driver.find_element_by_xpath('//div/span/span[text()="ログイン"]')
    #print(element_login)
    #driver.close()
    #exit()

    # デバッグ2
    driver.save_screenshot('②ログインPW入力画面.png')
    #driver.close()
    #exit()
    
    element_login.click()
    time.sleep(5) 

    # デバッグ3
    driver.save_screenshot('③ログイン後の画面.png')

    # ツイートを検索
    # explore_target_url= TWITTER_BASE + "explore"
    # explore_target_url= TWITTER_BASE + "explore/tabs/trending"
    explore_target_url= TWITTER_BASE + "explore" + explore_path
    driver.get(explore_target_url)
    time.sleep(5)
    driver.save_screenshot('ツイート検索画面.png')

    # 注目されているツイートを取得
    trend = driver.find_element_by_xpath('//div[@data-testid="trend"]')
    try:
        trend.click()
        time.sleep(4)
        driver.save_screenshot('トレンドツイート.png')
    except:
        print('trend取得失敗')
        exit()
    
    # ツイートの文章を取得
    trend_tweet_text = driver.find_element_by_xpath('//div[@data-testid="tweetText"]')
    trend_text = trend_tweet_text.get_attribute("innerText")
    # 子要素の最初のspanを取得(タグ取得のため)
    tweet_text_span = trend_tweet_text.find_element_by_xpath('.//span')
    hash_tag = tweet_text_span.get_attribute("textContent")
    ai_tweet_text = chatgpt.get_ai_ans(trend_text, hash_tag)
    time.sleep(10)

    if is_reply:
        # リプライツイート
        reply_target = driver.find_element_by_xpath('//div[@data-testid="reply"]')
        try:
            reply_target.click()
            time.sleep(1)
            reply_target_input_area = driver.find_element_by_xpath('//div[@data-testid="tweetTextarea_0"]')
            reply_target_input_area.send_keys(ai_tweet_text)
        except:
            print('reply failed')
    else:
        # 新規ツイート
        tweet_text = urllib.parse.quote(ai_tweet_text, safe='')
        #print(tweet_text)

        # 新規ツイート(not reply)
        target_url = TWITTER_BASE + "intent/tweet?text=" + tweet_text
        # print(target_url)
        #exit()

        # 投稿画面へ遷移
        driver.get(target_url)
        time.sleep(2)

    # デバッグ4
    driver.save_screenshot('④ツイート画面.png')
    #exit()

    # tweetボタンが読み込まれるまで待機（最大sleep2秒）
    time.sleep(2) 
    elem_tweet_btn = driver.find_element_by_xpath('//div[@data-testid="tweetButton"]')
 
    try:
        elem_tweet_btn.click()
        time.sleep(10)
        print("投稿完了！")

        # デバッグ5
        driver.save_screenshot('⑤ツイート完了画面.png')
                
    except:
        print("投稿エラー")

        # 次の投稿までの待機時間
        time.sleep(10)

    driver.close()