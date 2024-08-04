function App() {
  return (
    <div className="container">
      <Result score={76} />
      <Summary />
    </div>
  );
}

function Result({ score }) {
  return (
    <div className="results__container">
      <h1>Your Result</h1>
      <div className="results__score__container">
        <p className="results__score">
          <p className="result__score">{score}</p>
          of 100
        </p>
      </div>
      <p className="comment__header">Great</p>
      <p className="comment">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div className="results__summary">
      <h1 className="summary__header">Summary</h1>
      <div className="results__items">
        <ResultItem
          imgsrc={"/assets/images/icon-reaction.svg"}
          imgAlt={"Reaction icon"}
          className="item__reaction"
          itemHeader={"Reaction"}
          itemScore={80}
        />
        <ResultItem
          imgsrc={"/assets/images/icon-memory.svg"}
          imgAlt={"Memory icon"}
          className="item__memory"
          itemHeader={"Memory"}
          itemScore={92}
        />
        <ResultItem
          imgsrc={"/assets/images/icon-verbal.svg"}
          imgAlt={"Verbal icon"}
          className="item__verbal"
          itemHeader={"Verbal"}
          itemScore={61}
        />
        <ResultItem
          imgsrc={"/assets/images/icon-visual.svg"}
          imgAlt={"Visual icon"}
          className="item__visual"
          itemHeader={"Visual"}
          itemScore={72}
        />
      </div>
      <button className="results__button" type="submit">
        Continue
      </button>
    </div>
  );
}

function ResultItem({ imgsrc, itemHeader, itemScore, imgAlt, className }) {
  return (
    <div className={`result__item ${className}`}>
      <div>
        <img src={imgsrc} alt={imgAlt} />
        <p className="item__header">{itemHeader}</p>
      </div>
      <p className="item__score">
        <span className="score">{itemScore}</span>/ 100
      </p>
    </div>
  );
}

export default App;
