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

# 랭킹 아이템에서 텍스트 추출하기
for index, item in enumerate(ranking_items, start=1):
    rank = index
    brand_name = item.get_text(strip=True)
    product_name = items_name[index-1].get_text(strip=True)
    price = prices[index-1].get_text(strip=True)
    image_url = images[index+5]['src']
    print(f"{rank}: {brand_name} - {product_name} - 가격 : {price}")
    print("Image URL:", image_url)

    if rank == 20:
        break
