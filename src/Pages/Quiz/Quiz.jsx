//jshint ignore:start
import './Quiz.css';
import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import Question from '../../components/Question/Question';

const Quiz = ({ name, questions, score, setQuestions, setScore }) => {
  // console.log('score', score);
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
  }, [currQues, questions]);

  console.log('OP',options);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
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

      <Question
      currQues={currQues}
      setCurrQues={setCurrQues}
      questions={questions}
      options={options}
      correct={questions[currQues]?.correct_answer}
      score={score}
      setScore={setScore}
      />

      </> : 
      <CircularProgress style={{margin: 100}} color="inherit" 
      size={150}
      thickness={1} />
    }
    
    
  </div>;
};

export default Quiz;
