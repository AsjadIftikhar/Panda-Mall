import pandas as pd


class ExcelSheet:
    def __init__(self, sheet_name):
        # Name of the File
        self.__filename = "../Sheets/{}.xlsx".format(sheet_name)

        # Sheet Name inside the Workbook
        self.__sheet_name = sheet_name

    def write_all(self, all_rows):
        df = pd.DataFrame.from_dict(all_rows)
        df.to_excel(
            excel_writer=self.__filename,
            sheet_name=self.__sheet_name,
            float_format="%.2f",
            index=False
        )


# # For Unit  Testing / Sample Run
if __name__ == "__main__":
    all_rows = [
        {
            "SKU": "AB24583 - BLUE",
            "Selling_Price": 2152.50,
            "Size": "14.5, BLUE: 15, BLUE",
            "Discount": 20,
            "Fabric": "nan",
            "Fit": "nan",
            "Original_Rating": 0,
            "Collars_Type": "nan",
            "Sleeves": "nan",
            "Color": "14.5,BLUE: 15,BLUE",
            "Cuff_Style": "nan",
            "Image_Url": "//cdn.shopify.com/s/files/1/2219/4051/products/AB25438-Offwhite-Rs-2690-01_1024x1024.jpg?v=1633003417",
            "Product_Url": "https://diners.com.pk/collections/shirts/products/formal-men-shirt-in-offwhite-sku-ab25438-offwhite?variant=39611146862674"

        }
    ]
    mySheet = ExcelSheet("Uniworth")
    mySheet.write_all(all_rows=all_rows)
