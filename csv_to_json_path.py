import pandas
import csv
from collections import defaultdict
from datetime import datetime
import json
import numpy

data = csv.DictReader(open("data/k-path_nov30.csv"))

timedict = defaultdict(int)

for row in data:
    for key in row:
        try:
            timestamp = datetime.strptime(key, "%Y-%m-%d-%H")
            if timestamp < datetime(2015,11,30,0,0) or timestamp > datetime(2015,11,30,23,59):
                continue
            value = int(row[key])
            timedict[int(timestamp.strftime("%s"))*1000] += 1 if value > 0 else 0
        except ValueError:
            pass

with open("data/path.json", "w") as outputfile:
    print(json.dumps([[x, timedict[x]] for x in sorted(timedict.keys())]), file=outputfile)

percentiles = (numpy.percentile(list(timedict.values()), 25),numpy.percentile(list(timedict.values()), 50),numpy.percentile(list(timedict.values()), 75))
std = numpy.std(list(timedict.values()))

with open("data/path_anomalies.json", "w") as outputfile:
    output = []
    for x in timedict:
        if timedict[x] > percentiles[1]+std or timedict[x] < percentiles[1]-std:
            output.append([x, timedict[x]])
    print(json.dumps(output), file=outputfile)
