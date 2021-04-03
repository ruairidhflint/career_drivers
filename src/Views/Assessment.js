import { useState, useEffect } from 'react';
import styled from 'styled-components';

const questions = [
  {
    num: 1,
    names: ['a-1', 'b-1'],
    q1: 'I will only be satisfied with an unusually high standard of living.',
    q2: 'I wish to have considerable influence over other people.',
  },
  {
    num: 2,
    names: ['c-1', 'd-1'],
    q1: 'I only feel satisfied if the output from my job has real value in itself.',
    q2: 'I want to be an expert in the things I do.',
  },
  {
    num: 3,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 4,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 5,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 6,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 7,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 8,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 9,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 10,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 11,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 12,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 13,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 14,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 15,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 16,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 17,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 18,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 19,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 20,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 21,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 22,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 23,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 24,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 25,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 26,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 27,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 28,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 29,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 30,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },

  {
    num: 31,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 32,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 33,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 34,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 35,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
  {
    num: 36,
    names: ['e-1', 'f-1'],
    q1: 'I want to use my creative abilities in my work.',
    q2: 'It is especially important to me that I work with people whom I like.',
  },
];

const Question = ({ num, q1, q2, names, input, handleChange }) => {
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

const Assessment = () => {
  const [input, setInput] = useState({ 'a-1': '', 'b-1': '', 'c-1': '', 'd-1': '', 'e-1': '', 'f-1': '' });
  const [visible, setVisible] = useState(true);

  const scrollControl = () => {
    if (window.scrollY <= 6000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleChange = (e, field, pair) => {
    const attemptedInput = ['0', '1', '2', '3'].includes(e.target.value);
    const realVal = Number(e.target.value);

    if (!attemptedInput || realVal < 0 || realVal > 3) {
      setInput({ ...input, [field]: '' });
    } else {
      const otherVal = Math.abs(realVal - 3);
      setInput({ ...input, [field]: realVal, [pair]: otherVal });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const result = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
    };

    Object.keys(input).forEach((x) => {
      const letter = x.split('-')[0];
      result[letter] += Number(input[x]);
    });

    console.log(result);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollControl);
  });

  return (
    <StyledAssessment visible={visible} onSubmit={submit}>
      {questions.map((x) => {
        return (
          <Question
            key={x.num}
            num={x.num}
            q1={x.q1}
            q2={x.q2}
            names={x.names}
            input={input}
            handleChange={handleChange}
          />
        );
      })}
      <button type="submit">Submit</button>
      <div id="bottom-fade"></div>
    </StyledAssessment>
  );
};

const StyledAssessment = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .main-cont {
    display: flex;
    margin-bottom: 10rem;
    width: 80%;

    @media (max-width: 1100px) {
      width: 90%;
    }

    @media (max-width: 950px) {
      width: 98%;
    }

    @media (max-width: 670px) {
      margin-bottom: 5rem;
    }
  }
  .ques-num {
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: ${(props) => props.theme.lightgrey};

    @media (max-width: 810px) {
      display: none;
    }
  }

  .ques-cont {
    width: 88%;
    display: flex;
    flex-direction: column;
    @media (max-width: 810px) {
      width: 100%;
    }
  }

  .question {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 5rem;
  }

  input {
    height: 3rem;
    text-align: center;
    width: 3rem;
    margin-right: 2rem;
    font-size: 1.8rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  label {
    font-size: 1.8rem;

    @media (max-width: 910px) {
      font-size: 1.5rem;
    }

    @media (max-width: 670px) {
      font-size: 1.2rem;
    }

    @media (max-width: 540px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.8rem;
    padding: 2rem 0;
    line-height: 2.2rem;

    @media (max-width: 900px) {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    @media (max-width: 600px) {
      width: 98%;
    }

    @media (max-width: 400px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }

  a {
    max-width: 200px;
    font-size: 1.5rem;
    margin-top: 4rem;
    color: ${(props) => props.theme.lightgrey};
    transition: 0.2s color ease-in-out;
    margin-bottom: 2rem;
    :hover {
      color: ${(props) => props.theme.black};
      transition: 0.2s color ease-in-out;
    }

    @media (max-width: 900px) {
      font-size: 1.4rem;
    }
    @media (max-width: 400px) {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  button {
    margin: 5rem 0 10rem 0;
  }

  #bottom-fade {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    transition: display 0.3s ease-in-out;
    pointer-events: none;
    height: 300px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(255, 255, 255, 0)),
      color-stop(95%, rgba(255, 255, 255, 1))
    );
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
  }
`;

export default Assessment;
