import requests
from backend.config import Config
import logging


API_KEY = Config.AIR_QUALITY_API_KEY
logging.basicConfig(level=logging.DEBUG)


def get_aqi_details(zip_code, date, distance=25):

    #url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format={output_format}&zipCode={zip_code}&date={date}&distance={distance}&API_KEY={API_KEY}"
    url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode={zip_code}&date={date}&distance={distance}&API_KEY={API_KEY}"
    response = requests.get(url)
    print(response)

    return response.json()


def get_aqi_category(zip_code, date, distance=25):
    res = []
    url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode={zip_code}&date={date}&distance={distance}&API_KEY={API_KEY}"
    response = requests.get(url)

    name_and_category_map = response.json()
    #name_and_category_list = [name_and_category_map["Number"], name_and_category_map["Name"]]

    for zip_map in name_and_category_map:
        # print(zip_map)
        # print(zip_map['Category'])
        res.append(zip_map['Category'])

    return res


print(get_aqi_details("10466", "2024-10-05"))
print(get_aqi_category("10466", "2024-10-05"))

