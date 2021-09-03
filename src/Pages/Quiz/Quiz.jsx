//jshint ignore:start
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

  return <div>Quiz page</div>;
};

export default Quiz;
