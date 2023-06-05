import json
import pandas as pd
import requests
from bs4 import BeautifulSoup as bs

class MusinsaRanking:
    class Item:
        def __init__(self, image, rank, brand, cloth, link, price):
            self.image = image
            self.rank = rank
            self.brand = brand
            self.cloth = cloth
            self.link = link
            self.price = price

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
        price_html = html.select('#goodsRankList > li > div.li_inner > div.article_info > p.price')
        

        
        for i in range(len(rank_html)):
            rank = rank_html[i].get_text(strip=True).replace('위', '')
            brand = brand_html[i].get_text(strip=True)
            cloth = link_name_html[i]['title']
            link = link_name_html[i]['href']
            image = image_html[i]['data-original']
            price = price_html[i].get_text(strip=True).split()[0]



            item = self.Item(image, rank, brand, cloth, link,price)
            items.append(item)

        return items
    
    def display_rankings(self):
        filtered_items = [item for item in self.data if self.start_rank <= int(item.rank) <= self.end_rank]
        ret = []

        for item in filtered_items:
            get_data = {
                "brand": item.brand,
                "url": item.link,
                "name": item.cloth,
                "rank": item.rank,
                "price": item.price,
                "img": item.image
            }

            ret.append(get_data)

        with open("./cards.js", "w", encoding="utf-8") as f:
            f.write("const cardData = ")
            f.write(json.dumps(ret, indent=2, ensure_ascii=False) + "\n")
            f.write("export { cardData };")

musinsa_rank = MusinsaRanking(start_rank=1, end_rank=20)
musinsa_rank.display_rankings()

