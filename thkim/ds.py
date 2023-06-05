import json
import requests
from bs4 import BeautifulSoup

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

for i, item in enumerate(ranking_items):
    if i >= 20:
        break

    result = {
        "rank": i + 1,
        "brand": item.get_text(strip=True),
        "url": "",
        "name": items_name[i].get_text(strip=True),
        "price": prices[i].get_text(strip=True),
        "img": images[i + 5]['src']
    }

    if i < 7 and thumbnail_list_top:
        hrefs = thumbnail_list_top.find_all("a")
        if len(hrefs) > i:
            href = hrefs[i]
            link = 'https://www.wconcept.co.kr' + href['href']
            result['url'] = link
    elif thumbnail_list_bottom:
        hrefs = thumbnail_list_bottom.find_all("a")
        if len(hrefs) > i - 7:
            href = hrefs[i - 7]
            link = 'https://www.wconcept.co.kr' + href['href']
            result['url'] = link

    results.append(result)

# cards.js 파일 생성
with open("./cards.js", "w", encoding="utf-8") as f:
    f.write("const cardData = [\n")
    for i, result in enumerate(results):
        json_data = json.dumps(result, ensure_ascii=False, indent=2)
        f.write(f"  {json_data},\n")
    f.write("];\n")

print("cards.js 파일이 생성되었습니다.")
