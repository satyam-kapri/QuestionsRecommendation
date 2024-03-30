const axios = require('axios');

// for initial user addition (user name and initial score of user from quiz)
//response.data will be - "success"
const postData1 = {
    "name": 'hiiu',
    "score": [50, 50, 50, 50, 50, 60, 70, 80, 90]
};
axios.post("http://127.0.0.1:5000/api/create", postData1)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//for recommending questions to user (send only user name in request)
//response.data will be - 
// {
// questions: [
//     {
//       difficulty: 'easy',
//       link: 'https://www.naukri.com/code360/problems/max-of-min_982935',
//       title: 'Maximum of minimum for every window size',
//       topic: 'array'
//     },
//     {
//       difficulty: 'easy',
//       link: 'https://www.naukri.com/code360/problems/max-of-min_982935',
//       title: 'Maximum of minimum for every window size',
//       topic: 'array'
//     }
//   ]
// }

const postData2 = {
    "name": 'hii',
};
axios.post("http://127.0.0.1:5000/api/recommend", postData2)
    .then(response => {
        console.log("Response: ",response.data)
    })
    .catch(error => {
        console.error('Error:', error);
    });

// // //for feedback after question solved(make this api call only if question was solved by the user)
// // //rated here is difficulty rating given by user out of 5 i.e., how easy or difficult was the question for him
// no response


const postData3 = {
    "name": "hii",
    "rated": 5,
    "ques": {
        "title": "aaa",
        "link": "hhh",
        "difficulty": "hard",
        "topic": "array"
    }
}
axios.post("http://127.0.0.1:5000/api/feedback", postData3)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });

//for fetchScore
// response will be - {"score":[102,,2,,2,2,2,]}


const postData4 = {
    "name": "hii",
}
axios.post("http://127.0.0.1:5000/api/fetchScore", postData4)
    .then(response => {
        console.log('score data:',response.data)
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });