import tweet
import auth

import datetime
import time

TWITTER_BASE = "https://twitter.com/"
LOGIN_ID = auth.auth_info['TWITTER_ACCOUNT_ID'] #ツイッターログイン用のメールアドレスかユーザ名
PASSWORD = auth.auth_info['TWITTER_LOGIN_PASS']
TEXT = "ほげ" + datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S.%f') #ツイートしたい呟きを指定

INTERVAL = 60 * 60 / 6

if __name__ == "__main__":
    # Login and tweet
    while True:
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, True, '')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, True, '/tabs/trending')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, True, '/tabs/sports_unified')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, True, '/tabs/news_unified')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, True, '/tabs/entertainment_unified')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, False, '')
        time.sleep(INTERVAL)
        tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, False, '/tabs/trending')
        time.sleep(INTERVAL)
