//jshint ignore:start
import './Quiz.css';
import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";

const Quiz = ({ name, questions, score, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log('Q',questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  console.log('OP',options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return <div className="quiz">
    <span className="subtitle">Welcome, {name}
    </span>
    {
      questions ? 
      <>
      <div className="quizinfo">
        <span>{questions[currQues].category}</span>
        <span>Score : {score} </span>
      </div>
      </> : 
      <CircularProgress style={{margin: 100}} color="inherit" 
      size={150}
      thickness={1} />
    }
    
    
  </div>;
};

export default Quiz;
