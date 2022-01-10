import time

import gspread
from oauth2client.service_account import ServiceAccountCredentials


class Sheet:
    def __init__(self, name):
        self.__scope = ['https://www.googleapis.com/auth/spreadsheets', "https://www.googleapis.com/auth/drive.file",
                        "https://www.googleapis.com/auth/drive"]
        self.name = name
        self.credentials = ServiceAccountCredentials.from_json_keyfile_name('../credentials.json', self.__scope)
        self.client = gspread.authorize(credentials=self.credentials)

        try:
            self.sheet = self.client.open(name).sheet1
        except:
            print("Sheet Not Found!")

    def write_all(self, all_rows):
        counter = 0
        for row in all_rows:
            if counter == 30:
                time.sleep(65)
                counter = 0
            counter += 1
            print("Sheets", counter)
            self.sheet.insert_row(list(row.values()), 2)


# # For Unit  Testing / Sample Run
if __name__ == "__main__":
    pass
    # Key Should match Google Sheet Headers
    # Values should be correctly formatted
    # all_rows = [
    #     {
    #         "SKU": "AD25197-BLACK",
    #         "Selling_Price": 2952.0,
    #         "Size": 15.5,
    #     }
    # ]
    # mySheet = Sheet(name="Panda Mall Data")
    # mySheet.write_all(all_rows=all_rows)
