import requests
import logging
import json
from pprint import pprint

#API_KEY = Config.MOVIE_API_KEY

def fetch_movies():
    url = f'https://data.cityofnewyork.us/resource/asyy-77dj.json?$limit=500'

    response = requests.get(url)#, params=params)

    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()  
        return data
    else:
        logging.error(f"Failed to fetch movies: {response.status_code}")
        return []
    
def save_json_to_file(data, file_path='data.json'):
    # Open the file in 'write' mode to overwrite it
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)  # indent=4 for pretty-printing
    print(f"Data has been written to {file_path}")


data = fetch_movies()
names = [d["name"] for d in data]
nem = set(names)
pprint(nem)
    
save_json_to_file(fetch_movies())
    