import json
import requests
from bs4 import BeautifulSoup

url = "https://www.ssfshop.com/ranking?rankSect=SALE_RANK&ctgryFlterCd=CTGRY_MALE&preferAgeCd=ALL&brndShopId=&brandShopNo=&dspCtgryNo=&otltYn=&cnncCtgryNo=&lagSpcltyYn=&utag="
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
res = requests.get(url, headers=headers)
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml")

items = soup.find_all("div", attrs={"class": "info"})
list_goods = soup.find("div", attrs={"class":"list_goods"})

item_img_urls = list_goods.ul.find_all("li")
item_urls = list_goods.ul.find_all("a")
item_rankings = soup.find_all("div", attrs={"class": "rank"})
item_prices = soup.find_all("span", attrs={"class": "price"})

product_list = []

with open("./ssf.js", "w", encoding="utf-8") as f:
    ret = []
    
    f.write("const cardData = ")
    for i in range(1, 21):
        get_data = {
            "brand": "",
            "url": "",
            "name": "",
            "rank": "",
            "price": "",
            "img": ""
        }

        get_data["brand"] = items[i-1].find("span", attrs={"class": "brand"}).get_text()
        get_data["url"] = "https://www.ssfshop.com/" + item_urls[i-1]["href"]
        get_data["name"] = items[i-1].find("span", attrs={"class": "name"}).get_text()
        get_data["rank"] = item_rankings[i-1].h5.get_text()
        get_data["price"] = item_prices[i-1].get_text()
        get_data["img"] = item_img_urls[i-1].a.img["src"]

        ret.append(get_data)
        # product = Product(rank, url, brand, name, price, img)
        # product_list.append(product)
    f.write(json.dumps(ret, indent=2, ensure_ascii=False)+"\n")
    f.write("export { cardData };")

