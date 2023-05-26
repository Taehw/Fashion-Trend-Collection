from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def home():
    url = "https://www.ssfshop.com/ranking?rankSect=SALE_RANK&ctgryFlterCd=CTGRY_MALE&preferAgeCd=ALL&brndShopId=&brandShopNo=&dspCtgryNo=&otltYn=&cnncCtgryNo=&lagSpcltyYn=&utag="
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    }
    res = requests.get(url, headers=headers)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, "lxml")

    items = soup.find_all("div", attrs={"class": "info"})

    product_list = []

    for i in range(1, 20):
        brand = items[i-1].find("span", attrs={"class": "brand"}).get_text()
        name = items[i-1].find("span", attrs={"class": "name"}).get_text()
        product_list.append(f"{brand} - {name}")

    return render_template('index.html', arr=product_list)

if __name__ == '__main__':
    app.run(host='127.0.0.1')