import glob
import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['OpenAQ']
collection = db['stations']
path ='2018-07-28/*.ndjson'

for filename in glob.glob(path):
	print (filename)
	f = open(filename)
	for line in f:
		jsondata = json.loads(line)
		collection.insert(jsondata)
client.close()





