import pandas as pd
import numpy as np
from typing import List
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

from pandas_similarity.normalizer import Normalizer


class IndexCalculator:

    def __init__(self, raw: pd.DataFrame, precision: int = 4):
        """Math the similarity index between entries of a given dataframe."""

        self.texts: List[str] = Normalizer(raw).get_data()
        self.precision = precision
        self.index = None

    def get_index(self):
        """
        Return the similarity index. This index is math from the entries
        contained in the dataframe given to this class.
        """

        if not self.index:
            self.count()

        return self.round_index(self.index)

    def count(self):
        """Math the similarity index between entries of a dataframe."""

        # Vectorize the texts
        vectors = self.__to_vector(self.texts)
        self.index = self.__cosines_similarity_vectors(vectors[0], vectors[1])

    @staticmethod
    def __to_vector(text_list: List[str]) -> np.ndarray:
        """
        Transform a given List of String, into a List of vectors.
        :param text_list: List[String] - A list of string
        :return: A Numpy ndarray with two vectors.
        """
        vectorizer = CountVectorizer().fit_transform(text_list)
        vectors = vectorizer.toarray()

        return vectors

    @staticmethod
    def __cosines_similarity_vectors(vector1: np.ndarray, vector2: np.ndarray) -> int:
        """Math the cosine similarity between two vectors, and return the result."""
        vector1 = vector1.reshape(1, -1)
        vector2 = vector2.reshape(1, -1)

        return cosine_similarity(vector1, vector2)[0][0]

    def round_index(self, index):
        """Normalize and round the index."""

        # Avoid floating point error
        if index > 1:
            index = 1

        if index < 0:
            index = 0

        # Round to the desired precision
        return np.around(index, self.precision)
