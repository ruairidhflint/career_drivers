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
    names: ['g-1', 'h-1'],
    q1: 'I would obtain satisfaction by being able to choose freely what I want.',
    q2: 'I want to make quite sure that I will be financially secure.',
  },
  {
    num: 5,
    names: ['i-1', 'a-2'],
    q1: 'I enjoy feeling that people look up to me.',
    q2: 'Not to put too fine a point on it, I want to be wealthy.',
  },
  {
    num: 6,
    names: ['b-2', 'c-2'],
    q1: 'I want a substantial leadership role',
    q2: 'I do that which is meaningful to me, even though it may not gain rewards.',
  },
  {
    num: 7,
    names: ['d-2', 'e-2'],
    q1: 'I want to feel that I have gained a hard - won expertise.',
    q2: 'I want to create things which people associate with being my own.',
  },
  {
    num: 8,
    names: ['f-2', 'g-2'],
    q1: 'I seek deep social relationships with other people in my work.',
    q2: 'I would get satisfaction from deciding how I spend my time.',
  },
  {
    num: 9,
    names: ['a-3', 'd-3'],
    q1: 'I will not be content unless I have ample material possessions.',
    q2: 'I want to demonstrate to my own satisfaction that I really know my discipline.',
  },
  {
    num: 10,
    names: ['c-3', 'e-3'],
    q1: 'My work is part of my search for meaning in life.',
    q2: 'I want the things that I produce to bear my name.',
  },
  {
    num: 11,
    names: ['a-4', 'h-2'],
    q1: 'I seek to be able to afford anything I want.',
    q2: 'A job with long - term security really appeals to me.',
  },
  {
    num: 12,
    names: ['b-3', 'd-4'],
    q1: 'I seek a role which gives me substantial influence over others.',
    q2: 'I would enjoy being a specialist in my field.',
  },
  {
    num: 13,
    names: ['c-4', 'f-3'],
    q1: 'It is important to me that my work makes a contribution to the wider community.',
    q2: 'Close relationships with other people at work are important to me.',
  },
  {
    num: 14,
    names: ['e-4', 'g-3'],
    q1: 'I want my personal creativity to be extensively used.',
    q2: 'I would prefer to be my own master.',
  },
  {
    num: 15,
    names: ['f-4', 'h-3'],
    q1: 'Close relationships with other people at work would give me special satisfaction.',
    q2: 'I want to look ahead in my life and feel confident that I will  always be OK.',
  },
  {
    num: 16,
    names: ['a-5', 'e-5'],
    q1: 'I want to be able to spend money easily.',
    q2: 'I want to be genuinely innovative in my work.',
  },
  {
    num: 17,
    names: ['b-4', 'f-5'],
    q1: 'Frankly, I want to tell other people what to do.',
    q2: 'For me, being close to others is really the important thing.',
  },
  {
    num: 18,
    names: ['c-5', 'g-4'],
    q1: 'I look upon my career as part of a search for greater meaning in life.',
    q2: 'I have found that I want to take full responsibility for my own decisions.',
  },
  {
    num: 19,
    names: ['d-5', 'h-4'],
    q1: 'I would enjoy a reputation as a real specialist.',
    q2: 'I would only feel relaxed if I were in a secure career.',
  },
  {
    num: 20,
    names: ['a-6', 'f-6'],
    q1: 'I desire the trappings of wealth.',
    q2: 'I want to get to know new people through my work.',
  },
  {
    num: 21,
    names: ['b-5', 'g-5'],
    q1: 'I like to play roles which give me control over how others perform.',
    q2: 'It is important that I can choose for myself the tasks that I undertake.',
  },
  {
    num: 22,
    names: ['c-6', 'h-5'],
    q1: 'I would devote myself to work if I believed that output would be worthwhile in itself',
    q2: 'I would take great comfort from knowing how I will stand on my retirement day.',
  },
  {
    num: 23,
    names: ['f-7', 'i-2'],
    q1: 'Close relationships with people at work would make it difficult for me to make a career move.',
    q2: 'Being recognised as part of the ‘Establishment’ is important to me.',
  },
  {
    num: 24,
    names: ['b-6', 'e-6'],
    q1: 'I would enjoy being in charge of people and resources.',
    q2: 'I want to create things that no one else has done before.',
  },

  {
    num: 25,
    names: ['c-7', 'i-3'],
    q1: 'At the end of the day, I do what I believe is important, not that which simply promotes my career.',
    q2: 'I seek public recognition.',
  },

  {
    num: 26,
    names: ['e-7', 'h-6'],
    q1: 'I want to do something distinctively different from others.',
    q2: 'I usually take the safe option.',
  },

  {
    num: 27,
    names: ['b-7', 'i-4'],
    q1: 'I want other people to look to me for leadership.',
    q2: 'Social status is an important motivator for me.',
  },
  {
    num: 28,
    names: ['a-7', 'g-6'],
    q1: 'A high standard of living attracts me.',
    q2: ' I wish to avoid being tightly controlled by a boss at work.',
  },

  {
    num: 29,
    names: ['e-8', 'i-5'],
    q1: 'I want my products to have my own name on them.',
    q2: 'I seek formal recognition by others of my achievements.',
  },

  {
    num: 30,
    names: ['b-8', 'h-7'],
    q1: 'I prefer to be in charge.',
    q2: 'I feel concerned when I cannot see a long way ahead in my career.',
  },

  {
    num: 31,
    names: ['d-6', 'g-7'],
    q1: 'I would enjoy being a person who had valuable specialist knowledge.',
    q2: 'I would get satisfaction from not having to answer to other  people.',
  },
  {
    num: 32,
    names: ['g-8', 'i-6'],
    q1: 'I dislike being a cog in a large wheel.',
    q2: 'It would give me satisfaction to have a high status job.',
  },
  {
    num: 33,
    names: ['a-8', 'c-8'],
    q1: 'I am prepared to do most things for material reward.',
    q2: 'I see work as a means of enriching my personal development.',
  },
  {
    num: 34,
    names: ['i-7', 'h-8'],
    q1: 'I want to have a prestigious position in any organisation for which I work.',
    q2: 'A secure future attracts me every time.',
  },
  {
    num: 35,
    names: ['f-8', 'd-7'],
    q1: 'When I have congenial social relationships nothing else really matters.',
    q2: 'Being able to make an expert contribution would give me particular satisfaction.',
  },
  {
    num: 36,
    names: ['i-8', 'd-8'],
    q1: 'I would enjoy the status symbols which come with senior positions.',
    q2: 'I aspire to achieve a high level of specialist competence.',
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
