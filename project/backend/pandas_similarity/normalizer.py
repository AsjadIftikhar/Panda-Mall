import pandas as pd
import string


class Normalizer:

    def __init__(self, raw: pd.DataFrame):
        """
        Receive data and return normalized data, ready to be scanned
        for duplicates.
        """

        self.is_normal = False
        self.data: list = raw.values.tolist()

    def normalize(self) -> None:
        """Normalize the data for it to be ready for a scan."""

        # Clean the data
        self.data = list(map(self.__clean, self.__to_string()))
        self.is_normal = True

    def get_data(self) -> list:
        """Return the normalized data, ready to be scanned."""

        # Check if the data was already processed
        if not self.is_normal:
            self.normalize()

        # Return it
        return self.data

    def __to_string(self):
        """
        Generator: return a string-version of the list: all entries
        are converted into a string.
        """

        for entry in self.data:
            yield " ".join(map(str, entry))

    @staticmethod
    def __clean(text: str) -> str:
        """
        Clean the text to remove useless character.
        :param text: String - A text to clean.
        :return: String - The cleaned text.
        """

        # Remove punctuations and merge all words
        text = ''.join([word for word in text if word not in string.punctuation])

        # Transform to lower case
        text = text.lower()

        return text
