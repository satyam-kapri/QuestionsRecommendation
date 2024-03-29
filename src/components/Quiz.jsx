import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameOver from './GameOver';
import data from './questions';
import Sidebar from './Sidebar';
const QuizWindow = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 10vh;
    min-width:85vw;
    display:flex;
    align-items:center;
    justify-content:space-around;
   
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid  #dd6620;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: black;
    background-color:#fff4f1;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color:  #dd6620;
            border: 1px solid  #dd6620;
        }
    }
`;

const Question = styled.div`
    min-width: 100%;
    margin: 0 auto;
`;
const Title = styled.h1`
    font-size: 24px;
`;
const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);
    const [qno,setqno]=useState(0);
    const [results,setresults]=useState([]);
    const [tscore,settscore]=useState(0);
    const [boolArray, setBoolArray] = useState(new Array(45).fill(false));
    const pickAnswer = (idx) => {

        const updatedArray = [...boolArray]; 
        console.log(qno);
        if (quiz[number].questions[qno].answer ===idx){ 
           
            setPts(pre=>pre+1);
            updatedArray[number*5+qno] = !updatedArray[number*5+qno];
        }
        // console.log(updatedArray);
        setBoolArray(updatedArray); 
        if(qno==4)
        {   setresults([...results,{topic:quiz[number].topic,score:pts}]);
            settscore(pre=>pre+pts);
            setqno(0);
            setNumber(pre=>pre+1);
            setPts(0);

        }
        else
        setqno(pre=>pre+1);
    }

    useEffect(() => {
       
       setQuiz(data);
     
    }, []);


    return (
        <QuizWindow>
            {quiz[number] &&
             <> 
            <Sidebar topic={quiz[number].topic} qno={number*5+qno} boolArray={boolArray}></Sidebar>
            <div className='question-outer'>
                <Title>{quiz[number].topic}</Title>
                <hr style={{width:'95%'}}></hr>
                {
                quiz[number]&&
                <>
                    <Question >{quiz[number].questions[qno].question}</Question>

                    <Options>
                        {quiz[number].questions[qno].options.map((item, index) => (
                            <Option key={index} onClick={()=>pickAnswer(index)}>{item}</Option>
                        ))}
                    </Options>
                </>

            }
           </div>
            
            </> 
           }
         {
                number === 9 && <GameOver tscore={tscore} results={results}/>
         }
        </QuizWindow>
    )
}

export default Quiz