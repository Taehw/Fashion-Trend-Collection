from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

url = "https://www.ssfshop.com/ranking?rankSect=SALE_RANK&ctgryFlterCd=CTGRY_MALE&preferAgeCd=ALL&brndShopId=&brandShopNo=&dspCtgryNo=&otltYn=&cnncCtgryNo=&lagSpcltyYn=&utag="
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
res = requests.get(url, headers=headers)
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml")

app = Flask(__name__)

@app.route('/')
def home():
    items = soup.find_all("div", attrs={"class": "info"})
    item_rankings = soup.find_all("div", attrs={"class": "rank"})
    item_prices = soup.find_all("span", attrs={"class": "price"})

    product_list = []

    for i in range(1, 21):
        brand = items[i-1].find("span", attrs={"class": "brand"}).get_text()
        name = items[i-1].find("span", attrs={"class": "name"}).get_text()
        rank = item_rankings[i-1].h5.get_text()
        price = item_prices[i-1].get_text()
        product_list.append(f"{rank} - {brand} - {name} - {price}")

    return render_template('index.html', pl=product_list)

@app.route('/img')
def img():
    list_goods = soup.find("div", attrs={"class":"list_goods"})
    lis = list_goods.ul.find_all("li")

    item_images = []

    for i in range(1, 21):
        img = lis[i-1].a.img["src"]
        item_images.append(f"{img}")

    return render_template('index.html', img_urls=item_images)

if __name__ == '__main__':
    app.run(host='127.0.0.1')