from flask import Flask,request,jsonify,json
from flask_restful import Resource,Api
import pickle
import pandas as pd
from flask_cors import CORS
import fun


app = Flask(__name__)
# api = Api(app)
CORS(app,origins=["*"])


@app.route('/api/create', methods=['POST'])
def create_resource():
    data = request.json
    data = json.dumps(data)
    fun.add_entry(data)
    return "success"

@app.route('/api/recommend', methods=["POST"])
def recommend():
    data = request.json
    quesList = []
    quesList = fun.similarQues(data["name"])
    return jsonify({"questions":quesList})
@app.route('/api/feedback', methods=["POST"])
def feedback():
    data = request.json
    print(data)
    fun.feedBack(data["name"],data["rated"],data["ques"])
    return "success"

@app.route('/api/fetchScore',methods=["POST"])
def fetchScore():
    data = request.json
    print('this was fetch call data',data)
    score = fun.fetchScore(data["name"])
    return jsonify({"score":score})
    
# @app.route("/api/hello/<path:text>")
# def hello(text):
#     message = "hli"
#     text = "jjj"
#     return jsonify({'sentiment' : message, 'message' : text})
# class prediction(Resource):
#     def get(self,budget):
#         print(budget)
#         return "hiiola"
    
# class getData(Resource):
#     def get(self):
#         return "poo"
    

# api.add_resource(prediction,'/prediction/<int:budget>')
# api.add_resource(getData,'/api')
if __name__ == '__main__':
    app.run(debug=True)
        
        