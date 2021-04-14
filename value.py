import csv 
import requests
import re
import pymysql

from bs4 import BeautifulSoup


url = "http://www.covid-19canada.com"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15"}


filename ="canada.csv"
f = open(filename, 'w', encoding="utf-8-sig", newline="")
writer = csv.writer(f)
title =["Total Confirmed in Canada","Total Death in Canada","Total Recovered in Canada","Total Active in Canada","Daily Confirmed in Canada","Daily Death in Canada","Daily Recovered in Canada","Daily Active in Canada",
"Total Confirmed in Ontario","Total Death in Ontario","Total Recovered in Ontario","Total Active in Ontario","Daily Confirmed in Ontario","Daily Death in Ontario","Daily Recovered in Ontario","Daily Active in Ontario",
"Total Test","Total waiting","Total Hospital","Total ICU","Canada vaccination","Ontario vaccination","Ontario Hospital","Ontario ICU",
"캐나다 백신 총 접종자","온타리오 백신 총 접종자"]
writer.writerow(title)

response = requests.request('GET', url)
content = response.content.decode('utf-8')
soup = BeautifulSoup(content, 'html.parser')


# 캐나다 총 현재 상황

# 확진자
canada_total_confirmed_1 =soup.find(
    'p', attrs={'class': 'count fboard-totalConfirmed'})   
canada_total_confirmed = (canada_total_confirmed_1.get_text().strip()).replace(",",".")

# 사망
canada_total_death_1 = soup.find(
    'p', attrs={'class': 'count fboard-totalDeaths'})
canada_total_death = (canada_total_death_1.get_text().strip()).replace(",",".")

# 회복
canada_total_recover_1 = soup.find(
    'p', attrs={'class': 'count fboard-totalRecovered'})
canada_total_recover = (canada_total_recover_1.get_text().strip()).replace(",",".")
# active
canada_total_active_1 = soup.find(
    'p', attrs={'class': 'count fboard-totalActive'})
canada_total_active = (canada_total_active_1.get_text().strip()).replace(",",".")

# 캐나다 증가 인원 (하루별)
canada_day_confirmed_1 = soup.find(
    'span', attrs={'class': 'sub-fboard-totalConfirmed'})
canada_day_confirmed = canada_day_confirmed_1.get_text().strip()
canada_day_confirmed_num = re.findall("\d+", canada_day_confirmed)
# 사망
canada_day_death_1 = soup.find(
    'span', attrs={'class': 'sub-fboard-totalDeaths'})
canada_day_death = canada_day_death_1.get_text().strip()
canada_day_death_num = re.findall("\d+", canada_day_death)

# 회복
canada_day_recover_1 = soup.find(
    'span', attrs={'class': 'sub-fboard-totalRecovered'})
canada_day_recover = canada_day_recover_1.get_text().strip()
canada_day_recover_num = re.findall("\d+", canada_day_recover)

# active
canada_day_active_1 = soup.find(
    'span', attrs={'class': 'sub-fboard-totalActive'})
canada_day_active = canada_day_active_1.get_text().strip()
canada_day_active_num = re.findall("\d+", canada_day_active)

# 온타리오 총  인원
ontario_total_confirmed_1 = soup.find_all(
    'p', attrs={'class': 'count1 status-table toggle-btn'})
ontario_total_confirmed = (ontario_total_confirmed_1[8].get_text()).replace(",",".")
ontario_total_confirmed_num = re.findall("\d+", ontario_total_confirmed)
# 캐나다 증가 인원 (하루별)
ontario_total_death_1 = soup.find_all(
    'p', attrs={'class': 'count1 status-table toggle-btn'})
ontario_total_death = (ontario_total_death_1[10].get_text().strip()).replace(",",".")
ontario_total_death_num = re.findall("\d+", ontario_total_death)
# 캐나다 증가 인원 (하루별)
ontario_total_recovered_1 = soup.find_all(
    'p', attrs={'class': 'count1 status-table toggle-btn'})
ontario_total_recovered = (ontario_total_recovered_1[12].get_text().strip()).replace(",",".")
ontario_total_recovered_num = re.findall("\d+", ontario_total_recovered)
# 캐나다 증가 인원 (하루별)
ontario_total_active_1 = soup.find_all(
    'p', attrs={'class': 'count1 status-table toggle-btn'})
ontario_total_active = (ontario_total_active_1[14].get_text().strip()).replace(",",".")
ontario_total_active_num = re.findall("\d+", ontario_total_active)

# 온타리오 총  인원 (하루)
ontario_day_confirmed_1 = soup.find_all(
    'span', attrs={'class': 'province-arrow-up toggle-btn'})
ontario_day_confirmed = (ontario_day_confirmed_1[8].get_text().strip()).replace(",","")
ontario_day_confirmed_num = re.findall("\d+", ontario_day_confirmed)
# 캐나다 증가 인원 (하루별)
ontario_day_death_1 = soup.find_all(
    'span', attrs={'class': 'province-arrow-up toggle-btn'})
ontario_day_death = (ontario_day_death_1[10].get_text().strip()).replace(",","")
ontario_day_death_num = re.findall("\d+", ontario_day_death)
# 캐나다 증가 인원 (하루별)
ontario_day_recovered_1 = soup.find_all(
    'span', attrs={'class': 'province-arrow-up toggle-btn'})
ontario_day_recovered = (ontario_day_recovered_1[12].get_text().strip()).replace(",","")
ontario_day_recovered_num = re.findall("\d+", ontario_day_recovered)
# 캐나다 증가 인원 (하루별)
ontario_day_active_1 = soup.find_all(
    'span', attrs={'class': 'province-arrow-up toggle-btn'})
ontario_day_active = (ontario_day_active_1[14].get_text().strip()).replace(",","")
ontario_day_active_num = re.findall("\d+", ontario_day_active)

ontario_total_test_1 =soup.find_all('p', attrs={'class': 'count2 status-table'})   
ontario_total_test = (ontario_total_test_1[7].get_text().strip()).replace(",","")

ontario_total_waiting_1 =soup.find_all('p', attrs={'class': 'count2 status-table'})   
ontario_total_waiting = (ontario_total_waiting_1[8].get_text().strip()).replace(",","")

ontario_total_hospital_1 =soup.find_all('p', attrs={'class': 'count2 status-table'})   
ontario_total_hospital = (ontario_total_hospital_1[9].get_text().strip()).replace(",","")

ontario_total_icu_1 =soup.find_all('p', attrs={'class': 'count2 status-table'})   
ontario_total_icu = (ontario_total_icu_1[10].get_text().strip()).replace(",",".")

canada_total_vac_1 =soup.find('p', attrs={'class': 'status-table toggle-vaccinated-btn total-active-value'})   
canada_total_vac = (canada_total_vac_1.get_text().strip()).replace(",",".")

ontario_total_vac_1 =soup.find_all('p', attrs={'class': 'count1 status-table toggle-vaccinated-btn'})   
ontario_total_vac = (ontario_total_vac_1[2].get_text().strip()).replace(",",".")



data=[canada_total_confirmed,canada_total_death,canada_total_recover,canada_total_active
,str(canada_day_confirmed_num),str(canada_day_death_num),str(canada_day_recover_num),str(canada_day_active_num)
,ontario_total_confirmed,ontario_total_death,ontario_total_recovered,ontario_total_active,
str(ontario_day_confirmed_num),str(ontario_day_death_num),str(ontario_day_recovered_num),str(ontario_day_active_num)
,ontario_total_test,ontario_total_waiting,ontario_total_hospital,ontario_total_icu,canada_total_vac,ontario_total_vac]

writer.writerow(data)

# print(ontario_day_death_1)

print("총 캐나다 확진자수: "+canada_total_confirmed)
print("총 캐나다 사망자수: "+canada_total_death)
print("총 캐나다 회복자수: "+canada_total_recover)
print("총 캐나다 활동(active)수: "+canada_total_active)
print("***************************************")
print("하루 캐나다 확진자수: "+str(canada_day_confirmed_num))
print("하루 캐나다 사망자수: "+str(canada_day_death_num))
print("하루 캐나다 회복자수: "+str(canada_day_recover_num))
print("하루 캐나다 활동(active)수: "+str(canada_day_active_num))
print("***************************************")
print("온타리오 캐나다 확진자수: "+ontario_total_confirmed)
print("온타리오 캐나다 사망자수: "+ontario_total_death)
print("온타리오 캐나다 회복자수: "+ontario_total_recovered)
print("온타리오 캐나다 활동(active)수: "+ontario_total_active)
print("***************************************")
print("하루 온타리오 캐나다 확진자수: "+str(ontario_day_confirmed_num))
print("하루 온타리오 캐나다 사망자수: "+str(ontario_day_death_num))
print("하루 온타리오 캐나다 회복자수: "+str(ontario_day_recovered_num))
print("하루 온타리오 캐나다 활동(active)수: "+str(ontario_day_active_num))
print("***************************************")
print("온타리오 총 테스트 수: "+ ontario_total_test)
print("온타리오 총 waiting 수: "+ ontario_total_waiting)
print("온타리오 총 hospital 수: "+ ontario_total_hospital)
print("온타리오 총 icu 수: "+ ontario_total_icu)
print("***************************************")
print("캐나다 총 백신 수: "+ canada_total_vac)
print("온타리오 총 백신 수: "+ ontario_total_vac)




# res = requests.get(url, headers=headers)
# res.raise_for_status()
# soup = BeautifulSoup(res.text, "lxml")

# print(soup.find('div',attrs={'itemprop':None, "class":"ontario-covid-viz"}))
# ontotals = soup.find_all("div", attrs={"class": "cviz-label-value--value"})

#     print(ontotals.get_text().strip())

# title = cartoons[0].a.get_text()
# link = cartoons[0].a["href"]
# print(title)
# print("https://comic.naver.com"+link)

# 평점 구하기
# total_rates = 0
# for cartoon in cartoons:
#     rate = cartoon.find("strong").get_text()
#     print(rate)
#     total_rates += float(rate)
#     print("전체점수", total_rates)
#     print("평균점수", total_rates/len(cartoons))
