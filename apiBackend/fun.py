import numpy as np
import json
from collections import Counter

def addQues(name, ques, file_path = "personD.json"):
    with open(file_path, 'r') as file:
        data = json.load(file)
    
    if name in data:
        data[name]["ques"].append(ques)
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
        print("Question appended successfully.")
    else:
        print("Entry not found.")

# addQues("gg","how are you?")
        
def fetchScore(name):
    print("call was made to fetchscore")
    with open("personD.json") as file:
        data = json.load(file)
    return data[name]["score"]


def add_entry(name_score_json, file_path="personD.json"):
    print("holasenor")
    print(name_score_json)
    name_score = json.loads(name_score_json)
    try:
        with open(file_path, "r") as file:
            data = json.load(file)
    except FileNotFoundError:
        data = {}

    data[name_score["name"]] = {"score": name_score["score"], "ques": []}

    with open(file_path, "w") as file:
        json.dump(data, file, indent=4)


# new_entry_json = '{"name": "gg", "score": [30, 50, 70, 40, 60, 80, 90, 20, 10, 45]}'
# add_entry(new_entry_json)


def getMoreQues(score):
    with open("recomques.json","r") as file:
        ques = json.load(file)
    topics = ["array","string","binary tree","bst","stack","queue","graph","linked list","hashmap"]
    filtered_scores = {}
    for i,topic in enumerate(topics):
        filtered_scores[topic] = score[i]
    extra_ques=[]
    question_level = {"easy":30,"medium":60,"hard":80}
    for topic in topics:
        if(topic in ques):
            # print(topic)
            for i in ques[topic]["questions"]:
                # print(i)
                if(question_level[i["difficulty"]]<filtered_scores[topic]):
                    extra_ques.append(i)
    print(extra_ques)
                    
    if(len(extra_ques)>3):
        return extra_ques[-3:]
    else:
        return extra_ques
    


def feedBack(name,rated,ques,file_path = "personD.json"):
    with open(file_path, 'r') as file:
        data = json.load(file)
    difficulty = ques["difficulty"]
    topic = ques["topic"]
    
    if name in data:
        if(difficulty=="easy"):
            rated = rated
        elif(difficulty=="medium"):
            rated = rated*2
        elif(difficulty=="hard"):
            rated = rated*3
        topics = ["array","string","binary tree","bst","stack","queue","graph","linked list","hashmap"]
        for i,val in enumerate(topics):
            if val==topic:
                pos = i
        data[name]["score"][pos]+=rated
        data[name]["ques"].append(ques)
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)
    else:
        print("Entry not found.")
    

def similarQues(name):
    class KNN:
        def __init__(self, k=3):
            self.k = k

        def fit(self, data):
            self.data = data

        def predict(self, index):
            similarities = {}
            target_score = self.data[index]["score"]
            for key, value in self.data.items():
                if key != index:
                    similarity = self._cosine_similarity(target_score, value["score"])
                    similarities[key] = similarity
            k_nearest_indices = sorted(similarities, key=similarities.get, reverse=True)[
                : self.k
            ]
            return k_nearest_indices

        def _cosine_similarity(self, score1, score2):
            dot_product = np.dot(score1, score2)
            norm1 = np.linalg.norm(score1)
            norm2 = np.linalg.norm(score2)
            return dot_product / (norm1 * norm2)
        
    with open("personD.json","r") as file:
        data = json.load(file)
    knn = KNN(k=3)
    knn.fit(data)
    nearest_neighbors = knn.predict(name)
    print("Nearest neighbors of name", name, ":", nearest_neighbors)
    
    last_three_questions = []
    for neighbor in nearest_neighbors:
        questions = data[neighbor]["ques"]
        if len(questions) < 3:
            last_three_questions.extend(questions)
        else:
            last_three_questions.extend(questions[-3:])
    extra_ques = getMoreQues(data[name]["score"])
    extra_ques = []
    total_ques = last_three_questions + (extra_ques)
    print(total_ques)
    if(len(total_ques)<=5):
        return total_ques
    return total_ques[-5:]
    
# print(similarQues("gg"))


