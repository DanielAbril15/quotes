import React from "react";

const CardContainer = ({ quoteRandom, changeAll, colorRandom, obStyle }) => {
  const color = {
    color: colorRandom,
  };

  return (
    <>
      <div className="card__quote" style={color}>
        <i className="fa-solid fa-quote-left"></i>
        <p>{quoteRandom.quote}</p>
      </div>
      <p className="card__autor" style={color}>
        {quoteRandom.author}
      </p>
      <button onClick={changeAll} className="card__button" style={obStyle}>
        &#62;
      </button>
    </>
  );
};

export default CardContainer;
