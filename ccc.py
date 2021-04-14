import pymysql
import csv

conn = pymysql.connect(host="localhost", user="root", password="8134", db="covid", charset="utf8")
curs = conn.cursor()
sql = "insert into corona (c_t_c, c_t_d, c_t_r, c_t_a, c_d_c, c_d_d, c_d_r, c_d_a, o_t_c, o_t_d, o_t_r, o_t_a,  o_d_c, o_d_d, o_d_r, o_d_a)values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

f = open('캐나다 현황.csv', 'r', encoding='utf-8')
rd = csv.reader(f)

for line in rd:
    curs.execute(sql,(line[0],line[1],line[2],line[3],line[4],line[5],line[6],line[7],line[8],line[9],line[10],line[11],line[12],line[13],line[14],line[15]))
    # print(line)
conn.commit()
conn.close()    
f.close()