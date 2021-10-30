import json
import pprint
with open("./recommend.json", encoding="utf-8") as f:
  df = json.load(f)
  for d in df:
    with open(f"./recommend_{d['code']}.json", 'w') as fil:
      json.dump(d['similarClasses'], fil, indent=4)