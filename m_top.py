import pandas as pd
import requests
from bs4 import BeautifulSoup as bs

class MusinsaRanking:
    class Item:
        def __init__(self, image, rank, brand, cloth, link):
            self.image = image
            self.rank = rank
            self.brand = brand
            self.cloth = cloth
            self.link = link

    def __init__(self, start_rank=1, end_rank=20):
        self.start_rank = start_rank
        self.end_rank = end_rank
        self.data = self.scrape_data()

    def scrape_data(self):
        url = "https://www.musinsa.com/ranking/best?period=now&age=ALL&mainCategory=001&subCategory=&leafCategory=&price=&golf=false&kids=false&newProduct=false&exclusive=false&discount=false&soldOut=false&page=1&viewType=small&priceMin=&priceMax="
        response = requests.get(url)
        html = bs(response.text, 'lxml')
        return self.extract_data(html)

    def extract_data(self, html):
        items = []

        rank_html = html.select('#goodsRankList > li > p')
        brand_html = html.select('#goodsRankList > li > div.li_inner > div.article_info > p.item_title > a')
        link_name_html = html.select('#goodsRankList > li > div.li_inner > div.article_info > p.list_info > a')
        image_html = html.select('#goodsRankList > li > div.li_inner > div.list_img > a > img')

        for i in range(len(rank_html)):
            rank = rank_html[i].get_text(strip=True).replace('위', '')
            brand = brand_html[i].get_text(strip=True)
            cloth = link_name_html[i]['title']
            link = link_name_html[i]['href']
            image = image_html[i]['data-original']

            item = self.Item(image, rank, brand, cloth, link)
            items.append(item)

        return items

    def display_rankings(self):
        filtered_items = [item for item in self.data if self.start_rank <= int(item.rank) <= self.end_rank]
        print(f"무신사 남성 상의 순위 {self.start_rank}위부터 {self.end_rank}위까지:")
        for item in filtered_items:
            print(f"순위: {item.rank}")
            print(f"브랜드: {item.brand}")
            print(f"의류명: {item.cloth}")
            print(f"링크: {item.link}")
            print(f"이미지: {item.image}")
            print()

musinsa_rank = MusinsaRanking(start_rank=1, end_rank=20)
musinsa_rank.display_rankings()