import requests
from backend import config
import logging
import json
import os
from datetime import date

API_KEY = config.Config.AIR_QUALITY_API_KEY
logging.basicConfig(level=logging.DEBUG)

unique_zips = ["10033", "10451", "10452", "11103", "11220", "10172", "11106", "10047", "10118", "10120", "10020", "10158", "11101", "11211", "11212", "11356", "11697", "11229", "10154", "10196", "10470", "10153", "10455", "11378", "10303", "11691", "11365", "10169", "10155", "10122", "11201", "11354", "10029", "10309", "10032", "11432", "10308", "11361", "11357", "10018", "10021", "10175", "11426", "11374", "11371", "10119", "11693", "11226", "11368", "10011", "10165", "11355", "11225", "10014", "10106", "10453", "10305", "11104", "11436", "10474", "10301", "11362", "10473", "10312", "10024", "10307", "10040", "10460", "10454", "11435", "10310", "11427", "11213", "10282", "11223", "10055", "10176", "10271", "11375", "10044", "11369", "10463", "10096", "11217", "10035", "11412", "10007", "10152", "10105", "10026", "10022", "10006", "10260", "11209", "11215", "11109", "11239", "10080", "11417", "10111", "10170", "10003", "11236", "11692", "10019", "10034", "10039", "10306", "11232", "10167", "10038", "11040", "10462", "10016", "10041", "11366", "11005", "11238", "10173", "11373", "11415", "10475", "11422", "11096", "10468", "11105", "11414", "11423", "11222", "11221", "10123", "10456", "11204", "11231", "11360", "10009", "11001", "11224", "10004", "10162", "11421", "10128", "10461", "11418", "10464", "10065", "10471", "11451", "10279", "11416", "11218", "11364", "10097", "11216", "11367", "10177", "10005", "11429", "10302", "10286", "10048", "11359", "10031", "10028", "10166", "10285", "11230", "10457", "10010", "11102", "11377", "11208", "10121", "10081", "10027", "11251", "11235", "10314", "10466", "11428", "10168", "10001", "10171", "10467", "11203", "10069", "10023", "10045", "10030", "11420", "10270", "11385", "11419", "11434", "10036", "11411", "10304", "10017", "11207", "11413", "11228", "11219", "10472", "10465", "11205", "10174", "10259", "10037", "00083", "10025", "10469", "10104", "10278", "10203", "11358", "10107", "11233", "10151", "10275", "11430", "11370", "10280", "11433", "11363", "10281", "10265", "10103", "11206", "11210", "10012", "11379", "10043", "10459", "11372", "10458", "11234", "10115", "10075", "10112", "11237", "11694", "10110", "11004", "10013", "10178", "10002", "11214"]


def get_aqi_details(zip_code, date, distance=25):

    #url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format={output_format}&zipCode={zip_code}&date={date}&distance={distance}&API_KEY={API_KEY}"
    url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode={zip_code}&date={date}&distance={distance}&API_KEY=6933D039-2018-43AC-91C7-28AA9187172D"
    response = requests.get(url)
    print(response)

    return response.json()


def get_aqi_category(zip_code, date, distance=25):
    res = []
    url = f"https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode={zip_code}&date={date}&distance={distance}&API_KEY=6933D039-2018-43AC-91C7-28AA9187172D"

    response = requests.get(url)

    name_and_category_map = response.json()
    #name_and_category_list = [name_and_category_map["Number"], name_and_category_map["Name"]]
    #print(json.dumps(name_and_category_map, indent=4))

    for zip_map in name_and_category_map:
        # print(zip_map)
        # print(zip_map['Category'])
        #print(zip_map)
        res.append(zip_map['Category'])

    return res

def get_aqi_category_all_zips():
    ret = {}
    for zip in unique_zips:
        ret[zip] = get_aqi_category(10046, "2024-10-06")[0]["Number"]
    return ret

#print(get_aqi_category_all_zips())
print(str(date.today()))
        
#print(json.dumps(get_aqi_category(10046, "2024-10-06")[0], indent=4))




