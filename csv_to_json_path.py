import pandas

data = pandas.read_csv("data/k-path.csv",sep=",",skiprows=1)

print(data.sum(axis=0).head())
