from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def index():
    url = 'https://www.wconcept.co.kr/topseller?mcd=m83985861'

    # 웹 페이지 가져오기
    res = requests.get(url)
    res.raise_for_status()

    # HTML 내용 파싱하기
    soup = BeautifulSoup(res.text, 'html.parser')

    # 원하는 정보 찾기
    ranking_items = soup.find_all('div', class_='brand')
    items_name = soup.find_all('div', class_='product ellipsis multiline')
    prices = soup.find_all('span', class_='discount_price')
    images = soup.find_all('img')
    thumbnail_list_top = soup.find("div", class_="thumbnail_list lst_top")
    thumbnail_list_bottom = soup.find("div", class_="thumbnail_list lst_bottom")

    results = []
    # 랭킹 아이템에서 텍스트 추출하기
    for index, item in enumerate(ranking_items, start=1):
        rank = index
        brand_name = item.get_text(strip=True)
        product_name = items_name[index-1].get_text(strip=True)
        price = prices[index-1].get_text(strip=True)
        image_url = images[index+5]['src']

        result = {
            'rank': rank,
            'brand_name': brand_name,
            'product_name': product_name,
            'price': price,
            'image_url': image_url,
            'link': None
        }

        if thumbnail_list_top:
            hrefs = thumbnail_list_top.find_all("a")
            if len(hrefs) >= rank:
                href = hrefs[rank-1]
                link = 'https://www.wconcept.co.kr' + href['href']
                result['link'] = link

        if rank >= 8 and thumbnail_list_bottom:
            hrefs = thumbnail_list_bottom.find_all("a")
            if len(hrefs) >= rank:
                href = hrefs[rank-8]
                link = 'https://www.wconcept.co.kr' + href['href']
                result['link'] = link

        results.append(result)

        if rank == 20:
            break

    return render_template('index.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)