// jshint ignore:start
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";
import axios from "axios";
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';

// const primary = red[500]; // #f44336
const accent = purple['A200']; // #e040fb
// const accent = purple.A200; // #e040fb (alternative method)

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
      // console.log(data.results);
      setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      {/* <div className="app" style={{ backgroundImage: "url(ques1.png)" }}> */}
      <div className="app" style={{ backgroundColor: accent }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            {" "}
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setQuestions={setQuestions}
              setScore={setScore}
            />{" "}
          </Route>
          <Route path="/result">
            {" "}
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
