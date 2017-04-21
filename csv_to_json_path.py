import pandas
import csv
from collections import defaultdict
from datetime import datetime
import json

data = csv.DictReader(open("data/k-path.csv"))

timedict = defaultdict(int)

for row in data:
    for key in row:
        try:
            timestamp = int(datetime.strptime(key, "%Y-%m-%d-%H").strftime("%s"))*1000
            value = int(row[key])
            timedict[timestamp] += 1 if value > 0 else 0
        except ValueError:
            pass

print(json.dumps([[x, timedict[x]] for x in timedict]))
#data = pandas.read_csv("data/k-path.csv",sep=",",skiprows=1)

#print(data.sum(axis=0).head())
