import re


def exprice(price_string):
    price_string = str(price_string)
    price_str = price_string.replace(",", "")
    price = re.search(r"\d+\.\d+", price_str)
    if not price:
        price = re.search(r"\d+", price_str)

    return price.group(0) if price else 0


def clean_string(input_string, include) -> str:
    output_string = ""
    if input_string:
        input_string = input_string.split()
        for word in input_string:
            if word:
                clean_word = "".join(
                    [letter if (letter.isalpha() or letter.isdigit() or letter in include) else " " for letter in word]
                )
                output_string += clean_word + " "
        return output_string.strip()


# For Unit  Testing / Sample Runs
if __name__ == "__main__":
    s = "adskba pkr2500/-sadasd"
    print(exprice(s))
    print(type(exprice(s)))

    s = "A   -bc"
    print(clean_string(s, []))
