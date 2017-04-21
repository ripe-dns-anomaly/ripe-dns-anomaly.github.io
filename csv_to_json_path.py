import pandas
import csv
from collections import defaultdict
from datetime import datetime
import json
import numpy

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

with open("data/path.json", "w") as outputfile:
    print(json.dumps([[x, timedict[x]] for x in sorted(timedict.keys())]), file=outputfile)

percentiles = (numpy.percentile(list(timedict.values()), 25),numpy.percentile(list(timedict.values()), 50),numpy.percentile(list(timedict.values()), 75))
std = numpy.std(list(timedict.values()))

with open("data/path_anomalies.json", "w") as outputfile:
    output = []
    for x in timedict:
        if timedict[x] > percentiles[1]+3*std or timedict[x] < percentiles[1]-3*std:
            output.append([x, timedict[x]])
    print(json.dumps(output), file=outputfile)
#data = pandas.read_csv("data/k-path.csv",sep=",",skiprows=1)

#print(data.sum(axis=0).head())
