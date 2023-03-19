import re
from bs4 import BeautifulSoup
import requests
import json


def getAll():
    url = "https://www.airbnb.com.ar/s/Argentina/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=3&channel=EXPLORE&search_type=filter_change&date_picker_type=calendar&checkin=2023-04-03&checkout=2023-04-06&source=structured_search_input_header&query=Argentina&place_id=ChIJZ8b99fXKvJURqA_wKpl3Lz0&federated_search_session_id=25dc3d09-a042-445a-8d8d-fc158381f42d&pagination_search=true&cursor=eyJzZWN0aW9uX29mZnNldCI6MiwiaXRlbXNfb2Zmc2V0IjoxOTgsInZlcnNpb24iOjF9"
    res = requests.get(url)
    soup = BeautifulSoup(res.content, 'html.parser')
    arr = soup.find_all('div','lwy0wad l1tup9az dir dir-ltr')
    price = soup.find_all('span', '_14y1gc')
    titles = soup.find('div','_1h6n1zu')
    photos = soup.find_all('img','_6tbg2q')
    price1 = [elem.get_text()[1:9].replace('\u00a0', '') for elem in price]
    priceArr = [int(''.join(re.findall(r'\d+', el))) for el in price1 ]
    det = soup.find_all('span','t6mzqp7 dir dir-ltr')
    detail = [ d.get_text() for d in det]
    properties = []
    id = 0
    for i in range(len(arr)):
        property_dict = {}
        property_dict['title'] = titles[i]
        property_dict['photo'] = photos[i]['src']
        property_dict['price'] = priceArr[i]
        property_dict['detail']= detail[i]
        id += 1
        properties.append(
            {
                'id': id ,
                "title": titles[i].get_text(),
                "photo": photos[i]['src'],
                "price": priceArr[i],
                "detail":detail[i]
                })

    json_data = json.dumps(properties)
    print(json_data)

print(getAll())