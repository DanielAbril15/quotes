import "./App.css";
import QuotesBox from "./components/QuotesBox";
import quotes from "./json/quotes.json";
import { useState } from "react";
import CardContainer from "./components/CardContainer";
import colors from "./utils/colors";

function App() {
  const random = (array) => {
    const iRandom = Math.floor(Math.random() * array.length);
    return array[iRandom];
  };
  let quoteRandom = random(quotes);
  let colorRandom = random(colors);
  const [quoteChange, setquoteChange] = useState(quoteRandom);
  const [colorChange, setcolorChange] = useState(colorRandom);

  const obStyle = {
    backgroundColor: colorRandom,
  };

  const changeAll = () => {
    let quoteRandom = random(quotes);
    let colorRandom = random(colors);
    setquoteChange(quoteRandom);
    setcolorChange(colorRandom);
  };

  return (
    <div className="App" style={obStyle}>
      <QuotesBox>
        <CardContainer
          quoteRandom={quoteRandom}
          changeAll={changeAll}
          colorRandom={colorRandom}
          obStyle={obStyle}
        />
      </QuotesBox>
    </div>
  );
}

export default App;
