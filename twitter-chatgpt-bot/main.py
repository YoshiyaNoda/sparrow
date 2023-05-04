import tweet
import auth

import datetime

TWITTER_BASE = "https://twitter.com/"
LOGIN_ID = auth.auth_info['TWITTER_ACCOUNT_ID'] #ツイッターログイン用のメールアドレスかユーザ名
PASSWORD = auth.auth_info['TWITTER_LOGIN_PASS']
TEXT = "ほげ" + datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S.%f') #ツイートしたい呟きを指定

if __name__ == "__main__":
    # Login and tweet
    tweet.tweet(TWITTER_BASE, LOGIN_ID, PASSWORD, TEXT)
