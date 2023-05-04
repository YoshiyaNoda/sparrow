# -*- coding: utf-8 -*-
import openai
import auth

API_KEY=auth.auth_info['CHAT_GPT_API_KEY']
WORD_MAX_LENGTH=140

openai.api_key = API_KEY

def get_ai_ans(text, hash_tag):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "以下の文の続きを面白く予想し、ありえないほど驚愕の展開を作り出してください。嘘をついて話を盛りまくってください。ギャルっぽい口調にしてください。次の出鱈目な誇張だらけの展開を「次回、」から初めて文の末尾に書き足してください。文章を140字以内の短い文にしてください。\n「" + text + "」"},
        ]
    )
    ans = response.choices[0]["message"]["content"].strip()
    res = (ans + "#" + hash_tag)[0:WORD_MAX_LENGTH]
    print('input >> ', text)
    print('ans >> ', ans)
    print('res >> ', res)
    return res

