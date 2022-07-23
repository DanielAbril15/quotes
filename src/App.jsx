import "./App.css";
import QuotesBox from "./components/QuotesBox";
import quotes from "./json/quotes.json";
import { useState } from "react";
import CardContainer from "./components/CardContainer";

function App() {
  const random = (array) => {
    const iRandom = Math.floor(Math.random() * array.length);
    return array[iRandom];
  };
  let quoteRandom = random(quotes);

  const [quoteChange, setquoteChange] = useState(quoteRandom);

  const changeAll = () => {
    let quoteRandom = random(quotes);
    setquoteChange(quoteRandom);
  };

  return (
    <div className="App">
      <QuotesBox>
        <CardContainer quoteRandom={quoteRandom} changeAll={changeAll} />
      </QuotesBox>
    </div>
  );
}

export default App;
