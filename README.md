# Word2vec
Unsupervised Word Embedding to capture latent knowledge from large Datasets.
By using this Word2Vec models you can easily find insights from large text data.
The main feature of this model is that dataset can be in unsupervised format.
It simply means that you don't have waste time to label your data.

There are many officially reported direct applications of word2vec method. I can divide them into knowledge discovery and recommendations. The second one has direct business benefit and can be straightforwardly deployed on e-commerce platform. Both groups utilize the notion of relatedness that word2vec captures really well. It is very hard or even impossible to know how objects (such as words or products) relate to each other if their unique number is on the order of thousands or even billions. Word2Vec looks at the data globally and learns meaningful semantic relations which it encodes into fixed-sized vectors.

### Knowledge Discovery

As the amount of literature grows it becomes increasingly harder to make a new discovery without “re-inventing the wheel”. Concepts become more scattered, especially when there is growing number of scientific journals and places where you can publish your work. Reading all that stuff (even Google won’t help) and filtering unimportant information is almost impossible for a single individual. If only we could have a system that can look at all this data globally, find hidden connections/relations and present those findings to us. Luckily, word2vec can do that!

There is a beautiful paper [2] published in Nature which demonstrates how word2vec can assist in discovering new chemical compounds with specific properties like e.g. thermoelectric. They did this by training word2vec on roughly 3.3 million abstracts from scientific papers published between 1922 and 2018, scattered among 1000 different journals. Then, they interacted with it and looked at the relations and analogies that were learned among chemical compounds. There is a lot of good stuff and I strongly recommend you read the whole thing.

Another example [4] utilized Electronic Health Record (EHR) and word2vec model to uncover novel relationships between diseases and disease-genes associations. More than 35 million inpatient cases were analyzed. The most interesting part from this paper is the dual-embedding space for both diseases and genes that enabled to predict associations between diseases and geneses with very high precision. Moreover, they also supplemented the paper with uncovered gene-disease associations that were not reported and can be used as a reference for future medical studies.

My last example [3] published in Science is a little bit different. The authors demonstrated that publicly available pretrained word embeddings (GLoVe and Word2Vec) have built in human biases that were picked up from the public data sets like Google News or Common Crawl. Very nice paper! I can imagine that this works shows that you can learn something about the authors by examining word embeddings. The authors leave a footprint in the embedding space. There was a loud case of Amazon’s AI recruiting tool that showed bias against women. I believe it wasn’t the model, but the data that demonstrated the bias. You can learn somethong something about the Amazon from that case.

### Recommendations

Word2vec is not limited to textual data and in fact it works for any data type that comes in a sequence. Text naturally is sequential, but so does user’s search history, purchase history, places visits history, click sessions and so on. You can leverage that data directly to build powerful recommendation systems that can increase your CTR and conversions in online business. I picked up 3 examples [5–7] of knows companies such as Airbnb, Alibaba and Etsy that implemented product recommendations based on word2vec method (adapted to their needs). Of course this is not a complete list and other companies such as Pinterest, Spotify, Tinder, Yahoo!, Instacart, Criteo, Tumblr, Linkedin, Facebook and many others are implementing similar thing. The basic idea is that you can create fixed-sized vector representation for different items (it can be images, clothing, ads, visual and textual offers) that capture human-like relations and similarities between them. It is done by training word2vec model on user click sessions. Humans don’t just jump randomly from item to item, but have some objective in mind and pick up items that are somehow related to each other.

What I like specifically about Airbnb’s paper [5] is that they showed how word2vec can benefit from conversive sessions (user finally booked a trip) that the model may recommend more often and thus bring direct business value for the organization.

Alibaba [6] took a similar path for product recommendations but added a few novel things to the architecture. Especially, they not only trained embeddings on items but also took into account side information such as brand, color, category etc. and embedded those information as well. In e-commerce business, where hundreds or thousands of new items appear every day, you do not have access to user’s item interaction data immediately that is why you need a different way (let’s say standard) to construct vectors for them.

Lastly, I would like to say that in case of text no one really cares who generated it. In case of user’s click sessions you always have “an agent” that generated that particular sequence. You can use that to create dual-embedding space where both users and items are represented by fixed-sized vectors living in the same space. Now you can build personalized recommendations!

Special Thanks ->  [Dariusz Kajtoch](https://www.quora.com/profile/Dariusz-Kajtoch)

### Tech Stack
1. Node JS
2. Python

### Libraries
1. gensim
2. nltk

### Flow of System
1. Upload your file in .txt format
2. Now Search the query word
3. It will show result of related words and co-relation
