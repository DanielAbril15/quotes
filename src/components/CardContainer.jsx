import React from "react";

const CardContainer = ({ quoteRandom, changeAll }) => {
  return (
    <>
      <div className="card__quote">
        <i className="fa-solid fa-quote-left"></i>
        <p>{quoteRandom.quote}</p>
      </div>
      <p className="card__autor">{quoteRandom.author}</p>
      <button onClick={changeAll} className="card__button">
        &#62;
      </button>
    </>
  );
};

export default CardContainer;
