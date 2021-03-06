import pandas as pd
import json

columns = ['timestamp','probes', 'nSites','nQueries','nResponses','q25RTT','q50RTT','q75RTT','q90RTT']
df = pd.read_csv('./data/k-during-root-dns-nov2015-events.csv', header=None, names=columns)

df['timestamp'] = df['timestamp']*1000

df_probes = df[['timestamp', 'probes']]
df_median_rtt = df[['timestamp', 'q50RTT']]

f = open('./data/reachability.json', 'w')
f.write(df_probes.to_json(orient='values'))

f = open('./data/rtt.json', 'w')
f.write(df_median_rtt.to_json(orient='values'))
