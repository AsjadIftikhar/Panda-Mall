import requests
from bs4 import BeautifulSoup
from Helpers import clean_string, exprice
from Excel import ExcelSheet


class Uniworth:
    headers = {"Host": "uniworthshop.com",
               "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0",
               "Accept": "application/json, text/javascript, */*; q=0.01",
               "Accept-Language": "en-US,en;q=0.5",
               "Accept-Encoding": "gzip, deflate, br",
               "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
               "Content-Length": "265",
               "Origin": "https://uniworthshop.com",
               "Connection": "keep-alive",
               "Referer": "https://uniworthshop.com/shirts",
               "Cookie": "gcl_aw=GCL.1641661631.Cj0KCQiAieWOBhCYARIsANcOw0zMS2Bgwszt_X1zeMfJtm__OKEL_FNqIMmzvnnLvDeZ33uFtOQaxxEaAiR_EALw_wcB; _gcl_au=1.1.768611390.1641661631; _ga_X10JJDSWGM=GS1.1.1642211977.8.1.1642212365.0; _ga=GA1.2.1764717652.1641661631; _gac_UA-73599393-1=1.1641661633.Cj0KCQiAieWOBhCYARIsANcOw0zMS2Bgwszt_X1zeMfJtm__OKEL_FNqIMmzvnnLvDeZ33uFtOQaxxEaAiR_EALw_wcB; _fbp=fb.1.1641661635001.1702261184; newsletter_subscribed=true; _gid=GA1.2.1554861780.1642143925; XSRF-TOKEN=eyJpdiI6IklmQ2taNDBtMDZOWmMxUHVSKzcrM1E9PSIsInZhbHVlIjoibGhScXR6cUlZRmM2bWNQQ2g0MTRQY01CNHlFaEk4NHRoWnNcL3VHWk5YVnBCV1Y5MWlYS3NEYW9teEk1TkM5TFIiLCJtYWMiOiI4ZjY5ZWM5ZWU1MGRkMzFiMDk4MjA0ZDYzMWRhYmVkZDc3YWE1ZDA4NTFlMmQ3NTMyYTFlYzFhOWEyMDFhNjI1In0%3D; laravel_session=eyJpdiI6IlBxTkZ4bGttMzZnajVoWTRDamZSSXc9PSIsInZhbHVlIjoiUjRtOXowZ0lVZ25mYUtLXC9jYWdLdHBLTGpyczZ1cndSbFVRWDZmUytKdEhqNCt2dXNXR3JyYWZqOXpVQ3dETDMiLCJtYWMiOiI5NWRiNWIzZWZkYWQ2YTc4NTdhNzgzYTRkNWExZDJlNTkxZGQ1NWYxYWUwZWNmODUyMmY3ZTFjYmJiZjg2NDJlIn0%3D; _gat_gtag_UA_73599393_1=1"
               }
    payload = {
        # "offset": "400",
        "Min": "",
        "Max": "",
        "category": "shirts",
        "Collar": "",
        "Collar_Style": "",
        "Sleeve": "",
        "Size": "",
        "Color": "",
        "Fit": "",
        "Cuff_Style": "",
        "Fabric": "",
        "Pattern": "",
        "Style": "",
        "brand": "",
        "Sale_Percent": "",
        "Column": "3",
        "Sort": "https://uniworthshop.com/shirts?price_sort=default",
        "_token": "ngXA8R1TFHYYccMQKLQzo9nCqUKAquHsStv1NWaA",

    }

    def __init__(self):
        self.base_url = "https://uniworthshop.com"
        self.brand_name = "Uniworth"
        self.Excel = ExcelSheet("Uniworth")

    def archived_code(self, soup):
        all_scripts = soup.find_all("script")
        last_script_text = all_scripts[-1].text if all_scripts and all_scripts[-1] else None
        if "_token" in last_script_text:
            _token_back_split = last_script_text.split("_token:\"")
            for tok in _token_back_split:
                print(tok)
            _token_front_split = _token_back_split[-1].split("\"}")
            _token = _token_front_split[0]
            print(_token)
            # self.payload['_token'] = _token

    def products_page(self, extension) -> list:
        products = []

        product_page_url = self.base_url + extension
        response = None
        session = requests.Session()
        try:
            response = session.get(url=product_page_url)
            soup = BeautifulSoup(response.text, "html.parser") if response else None
            if soup:
                filter_count = soup.find(id="FilterCounter")
                filter_count = int(filter_count.text) if filter_count else None

                current_offset = 0
                while current_offset < filter_count:
                    self.payload['offset'] = str(current_offset)
                    post_response = session.post('https://uniworthshop.com/LoadMore', headers=self.headers,
                                                 data=self.payload)

                    # Next 18 products here:
                    next_products = post_response.json()['output']
                    next_soup = BeautifulSoup(next_products, "html.parser") if next_products else None
                    if next_soup:
                        all_products = next_soup.find_all("a", {"class": "product-img"})
                        for product_div in all_products:
                            product = {}
                            product_url = product_div['href']
                            image_url = product_div.find("source")['srcset']

                            product['Product_Url'] = product_url
                            product['Image_Url'] = image_url

                            products.append(product)
                    current_offset += 18

        except Exception as ex:
            print("Something Went Wrong!")
            print(ex)

        return products

    def product_page(self, products):
        all_rows = []
        i = 1
        for product_dict in products:
            product_page_url = product_dict['Product_Url']
            print(i, end=": ")
            i += 1
            print(product_page_url)
            response = None
            try:
                response = requests.get(product_page_url)
                soup = BeautifulSoup(response.text, "html.parser") if response else None
                if soup:
                    # Title
                    Product_Title = soup.find("h1", {"class": "product-single__title"})
                    product_dict['Product_Title'] = clean_string(Product_Title.text, []) if Product_Title else None

                    # SKU
                    SKU = soup.find("span", {"class": "variant-sku"})
                    product_dict['SKU'] = clean_string(SKU.text, ['-']) if SKU else None

                    # Selling price
                    Selling_Price = soup.find("span", {"class": "money"})
                    product_dict['Selling_Price'] = float(exprice(Selling_Price.text)) if Selling_Price else None

                    # Color and Size
                    Color_Size = ""

                    color = soup.find("strong", text="Color : ")
                    color = color.find_next("p") if color else None
                    color = clean_string(color.text, []) if color else None

                    sizes = soup.find_all("label", {"class": "swatchLbl medium"})
                    for size in sizes:
                        if len(size.text) == 2:
                            size = float(exprice(size.text))
                        else:
                            size = float(exprice(size.text)) + 0.5

                        Color_Size += (color + "," + str(size) + ";")

                    product_dict['Color_Size'] = Color_Size[:-1]

                    # Discount right now is 0
                    # Rating doesn't exist
                    product_dict['Discount'] = 0.0
                    product_dict['Original_Rating'] = 0.0

                    product_dict['Brand'] = self.brand_name

                    # Type
                    Type = soup.find("strong", text="Style : ")
                    Type = Type.find_next("p") if Type else None
                    Type = clean_string(Type.text, []) if Type else None

                    product_dict['Type'] = Type

                    # Fabric
                    Fabric = soup.find("strong", text="Material : ")
                    Fabric = Fabric.find_next("p") if Fabric else None
                    Fabric = clean_string(Fabric.text, ['%']) if Fabric else None

                    product_dict['Fabric'] = Fabric

                    # Fit
                    Fit = soup.find("strong", text="Fit : ")
                    Fit = Fit.find_next("p") if Fit else None
                    Fit = clean_string(Fit.text, []) if Fit else None

                    product_dict['Fit'] = Fit

                    # Collars_Type
                    Collars_Type = soup.find("strong", text="Collar Style : ")
                    Collars_Type = Collars_Type.find_next("p") if Collars_Type else None
                    Collars_Type = clean_string(Collars_Type.text, []) if Collars_Type else None

                    product_dict['Collars_Type'] = Collars_Type

                    # Sleeves
                    Sleeves = soup.find("strong", text="Sleeve : ")
                    Sleeves = Sleeves.find_next("p") if Sleeves else None
                    Sleeves = clean_string(Sleeves.text, []) if Sleeves else None

                    product_dict['Sleeves'] = Sleeves

                    # Cuff_Style
                    Cuff_Style = soup.find("strong", text="Cuff Style : ")
                    Cuff_Style = Cuff_Style.find_next("p") if Cuff_Style else None
                    Cuff_Style = clean_string(Cuff_Style.text, []) if Cuff_Style else None

                    product_dict['Cuff_Style'] = Cuff_Style

                    all_rows.append(product_dict)

            except Exception as ex:
                print(ex)

        self.Excel.write_all(all_rows=all_rows)


if __name__ == '__main__':
    uniworth = Uniworth()
    prods = uniworth.products_page(extension="/shirts")
    # i = 1
    # for p in prods:
    #     print(i, end=": ")
    #     i += 1
    #     print(p)

    # prods = [{'Product_Url': 'https://uniworthshop.com/product/plain-brown-smart-fit-shirt-fs1297sf',
    #           'Image_Url': 'https://uniworthdress.com/uploads/product/webp/FS1297SF..webp'},
    #          {'Product_Url': 'https://uniworthshop.com/product/plain-sea-green-regular-fit-shirt-fs1250-1',
    #           'Image_Url': 'https://uniworthdress.com/uploads/product/webp/aa828e81e000775d5f5bc71041a138f9.webp'}]
    uniworth.product_page(prods)
