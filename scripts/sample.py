import os, sys, json
import gensim
from gensim.models import Word2Vec

from nltk.tokenize import sent_tokenize, word_tokenize 

#import nltk
#nltk.download('punkt')
# print(os.getcwd())
input_file = open("scripts/data/"+sys.argv[1], "r")
s = input_file.read()
f = s.replace("\n", " ")

data = []

for i in sent_tokenize(f):
	temp = []
	for j in word_tokenize(i):
		temp.append(j.lower())

	data.append(temp)

model = Word2Vec(min_count=20,
					window=2,
					size=300,
					sample=6e-5, 
					alpha=0.03, 
					min_alpha=0.0007, 
					negative=20)

model.build_vocab(data, progress_per=100000)
model.train(data, total_examples=model.corpus_count, epochs=30, report_delay=1)
model.init_sims(replace=True)

w1 = sys.argv[2]
json_str = json.dumps(model.wv.most_similar(positive=w1))
print(json_str)
