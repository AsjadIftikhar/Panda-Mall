from bs4 import BeautifulSoup
import requests
import time

from Sheet import Sheet

initialurl = "https://diners.com.pk"
allProductsforWriting = []  # Write to google sheets
productsURL = []  # URL of all the products

# -----------------------------
breakout = requests.get(initialurl)
soup = BeautifulSoup(breakout.text, "html.parser")
oneStep = soup.find("li", class_="menu-lv-1 item dropdown mega-menu")
twoStep = oneStep.find_all("span")
menShirts = ""
for span in twoStep:
    if str(span.string).strip() == "Formal":
        menShirts = span.parent
        break
men = menShirts["href"]
menShirtsURL = initialurl + men
# print(menShirtsURL)

# ------------------------------------------------

# menShirtsURL = "https://diners.com.pk/collections/shirts/formal"
counter = 0
while 1:
    counter += 1
    print("product#", counter)
    if counter == 10:
        time.sleep(5)
        print("Sleep")
        counter = 0
    menShirts = requests.get(menShirtsURL)
    soupForMenShirts = BeautifulSoup(menShirts.text, "html.parser")
    allProducts = soupForMenShirts.find_all("div", class_="product-top")
    eachProduct = ""
    for products in allProducts:
        anchorProduct = products.find("a")
        eachProduct = initialurl + anchorProduct["href"]
        productsURL.append(eachProduct)
    pagination = soupForMenShirts.find("ul", class_="pagination-page")
    currPage = int(pagination.find("li", class_="active").find("span").string)
    nextPage = currPage + 1
    isNextPage = pagination.find(text=nextPage)
    if isNextPage:
        menShirtsURL = isNextPage.parent['href']
        menShirtsURL = initialurl + menShirtsURL
    else:
        break
#
# print(productsURL)
time.sleep(15)
# ------------------------------------ Loop that we go over each product and get its details
counter = 0
for productURL in productsURL:
    # productURL = "https://diners.com.pk/collections/shirts/products/formal-men-shirt-sku-ad25197-black"  #Product URL  <--
    counter += 1
    print("product#", counter)
    if counter == 10:
        time.sleep(5)
        print("Sleep")
        counter = 0
    shirt = requests.get(productURL)
    soupForShirt = BeautifulSoup(shirt.text, "html.parser")

    # ------------------------------- IMAGES_URL
    images = soupForShirt.find_all("div", class_="product-img-box horizontal-moreview")
    imagesURL = []
    for image in images:
        anchorImages = image.find_all("a")
        for anchor in anchorImages:
            if anchor['href'][0] == "/":
                imagesURL.append(anchor['href'])

    # ------------------------------- OFF
    off = soupForShirt.find("strong", class_="label sale-label")
    offVal = 0
    if off:
        temp = str(off.string).strip()
        temp = temp[1:3]
        offVal = float(temp)

    # -------------------------------- SKU
    sku_product = soupForShirt.find("div", class_="sku-product")
    sku = str(sku_product.find("span").string.strip())

    # ------------------------------- Availability
    product_availability = soupForShirt.find("div", class_="product-inventory")
    available = str(product_availability.find("span").string.strip())


    # -------------------------------- Selling Price
    def priceParser(price):
        myPrice = ""
        for i in price:
            if i != ",":
                myPrice += i
        myPrice = float(myPrice)
        return myPrice


    price_product = soupForShirt.find("div", class_="prices")
    if offVal != 0:
        price = price_product.find("span", class_="price on-sale")
        money = priceParser(str(price.find("span", class_="money").string)[3:])
    else:
        price = price_product.find("span", class_="price")
        money = priceParser(str(price.find("span", class_="money").string)[3:])

    # ----------------------------- Size & Color
    productAttr = soupForShirt.find(id="product-variants").find_all("option", disabled="")
    colorXsize = ""
    for eachProduct in productAttr:
        attr = str(eachProduct.string).strip()
        if attr.__contains__("/"):
            attr = attr.split("/")
            attr[0] = attr[0].strip()
            attr[1] = attr[1].strip()
            colorXsize = colorXsize + ((attr[0]) + "," + attr[1]) + ":"
        else:
            colorXsize = colorXsize + attr + ":"

    # ------------------------------ Extras
    extras = soupForShirt.find("div", class_="tab-content")
    extra_Atrr = extras.find_all("li")
    shirtType = "nan"
    fit = "nan"
    collarType = "nan"
    sleeves = "nan"
    fabric = "nan"
    cuffStyle = "nan"

    for extra in extra_Atrr:
        temp = str(extra.string)
        temp = temp.split(":")
        if temp[0] == "Fabric":
            fabric = str(temp[1]).strip()
        elif temp[0] == "Shirt Type":
            shirtType = str(temp[1]).strip()
        elif temp[0] == "Sleeves":
            sleeves = str(temp[1]).strip()
        elif temp[0] == "Collars Type":
            collarType = str(temp[1]).strip()
        elif temp[0] == "Fit":
            fit = str(temp[1]).strip()

    # All details about products here (Make a object to save in google sheets)
    if available == "In stock":  # IF Not available do not show
        currProduct = {
            "SKU": sku,
            "Selling_Price": money,
            "Size": colorXsize,
            "Type": shirtType,
            "Product_Url": str(productURL).strip(),
            "Discount": offVal,
            "Fabric": fabric,
            "Fit": fit,
            "Original_Rating": 0,
            "Collars_Type": collarType,
            "Sleeves": sleeves,
            "Color": colorXsize,
            "Cuff_Style": cuffStyle,
            "Image_Url": imagesURL[0]
        }
        allProductsforWriting.append(currProduct)
        print(currProduct)

sheet = Sheet(name="Panda Mall Data")
sheet.write_all(all_rows=allProductsforWriting)
