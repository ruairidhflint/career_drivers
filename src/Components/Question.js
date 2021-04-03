export const Question = ({ num, q1, q2, names, input, handleChange }) => {
  return (
    <div className="main-cont">
      <div className="ques-num">{num}</div>
      <div className="ques-cont">
        <div className="question">
          <input
            type="number"
            min="0"
            max="3"
            name={names[0]}
            value={input[names[0]]}
            onChange={(e) => handleChange(e, names[0], names[1])}
            required
          />
          <label>{q1}</label>
        </div>
        <div className="question">
          <input
            type="number"
            min="0"
            max="3"
            name={names[1]}
            value={input[names[1]]}
            onChange={(e) => handleChange(e, names[0], names[1])}
            required
          />
          <label>{q2}</label>
        </div>
      </div>
    </div>
  );
};
