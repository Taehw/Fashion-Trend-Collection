import pandas as pd
import requests
from flask import Flask, render_template
import sys

from bs4 import BeautifulSoup as bs

url = "https://www.musinsa.com/ranking/best?period=now&age=ALL&mainCategory=001&subCategory=&leafCategory=&price=&golf=false&kids=false&newProduct=false&exclusive=false&discount=false&soldOut=false&page=1&viewType=small&priceMin=&priceMax="

response = requests.get(url)
response.status_code

def musinsa_M_TOP_rank():
    url = f"https://www.musinsa.com/ranking/best?period=now&age=ALL&mainCategory=001&subCategory=&leafCategory=&price=&golf=false&kids=false&newProduct=false&exclusive=false&discount=false&soldOut=false&page=1&viewType=small&includeWomen=false&priceMin=&priceMax="
    response = requests.get(url)
    html = bs(response.text, 'lxml')
    musinsa_M_TOP_rank_df = rbnl(html)

    return musinsa_M_TOP_rank_df

def rbnl(html):
    musinsa_M_TOP_rank_df = pd.DataFrame()

    # 순위뽑기
    rank_html = html.select('#goodsRankList > li > p')
    rank_no_list = []

    for i in rank_html:
        rank_no_list.append(i.string.strip())

    musinsa_M_TOP_rank_df['순위'] = rank_no_list

    # 브랜드 이름 뽑기
    brand_html = html.select('#goodsRankList > li > div.li_inner > div.article_info > p.item_title > a')
    brand_list = []

    for i in brand_html:
        brand_list.append(i.string)

    musinsa_M_TOP_rank_df['브랜드명'] = brand_list

    # 링크와 의류명 뽑기
    link_name_html = html.select('#goodsRankList > li > div.li_inner > div.article_info > p.list_info > a')
    link_list = []
    name_list = []

    for i in link_name_html:
        link_list.append(i['href'])
        name_list.append(i['title'])

    musinsa_M_TOP_rank_df['의류명'] = name_list
    musinsa_M_TOP_rank_df['링크'] = link_list


    #이미지 뽑기
    image_html = html.select('#goodsRankList > li > div.li_inner > div.list_img > a >img')
    image_list=[]

    for i in image_html:
        image_list.append(i['src'])
    
    musinsa_M_TOP_rank_df['이미지']=image_list

    return musinsa_M_TOP_rank_df




# 1부터 20까지의 순위를 출력

category_num=1
page_num=1
start_rank=1
end_rank=20

for i in range(page_num, page_num + 1):
    result = musinsa_M_TOP_rank()
    result['순위'] = result['순위'].str.replace('위', '')  # '위' 제거
    result['순위'] = result['순위'].astype(int)  # 순위 열을 정수형으로 변환.
    result = result[(result['순위'] >= start_rank) & (result['순위'] <= end_rank)]
    print(f"무신사 남성 상의 순위 {start_rank}위부터 {end_rank}위까지:")
    print(result)
    print()