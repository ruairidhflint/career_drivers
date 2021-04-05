import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RadarChart from '../Components/Chart';
import { driverTypeInfo } from '../Helpers/driverTypeInfo';

const Results = (props) => {
  const [graphData, setGraphData] = useState(null);
  const [topThree, setTopThree] = useState([]);
  const { prevLocation } = (props.location && props.location.state) || {};

  useEffect(() => {
    if (!prevLocation) {
      props.setCurrent(true);
    }
    const data = window.localStorage.getItem('results');
    if (data) {
      const parsed = JSON.parse(data);
      setGraphData(parsed);
      setTopThree(
        Object.keys(parsed)
          .map((key) => [key, parsed[key]])
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3),
      );
    } else {
      props.history.replace('/');
    }
  }, [props.history]);

  return (
    <>
      <StyledResults>
        <h2>Career Driver Results</h2>
        <p>
          Generally we have two or three primary career drivers with one often head and shoulders above the rest. Below
          is a radar graph that shows you how you scored in each of nine categories. Following that is a short break
          down of the three areas you scored highest in.
        </p>
        {graphData && <RadarChart data={graphData} />}

        <h3>Top 3 Drivers</h3>
        <ul>
          {topThree &&
            topThree.map((driver, i) => {
              return (
                <li key={i}>
                  {driver[0]} - <span>{driverTypeInfo[driver[0]]}</span>
                </li>
              );
            })}
        </ul>

        <h3>Next Steps</h3>
        <p>
          Having access to this kind of information is interesting but what is the next step? Look at the three key
          drivers you have scored on and ask yourself the following three questions. Taking a few minutes to write down
          a thoughtful but succinct anwser will be of huge benefit to both your personal and professional life.
        </p>
        <h4>- Are you surprised by your results? Why?</h4>
        <h4>- What do you think are the key strengths and weaknesses of each of your drivers?</h4>
        <h4>- Does your current role currently fulfil your drivers? Expand on your answer.</h4>

        <p>
          As our lives and careers progres what we value most can change. Years of financial hardship can lead to
          Material Rewards and Security being prioritised. This can change over time so it is always a good idea to take
          note of your results and compare them to a new set of results in a years time.
        </p>
      </StyledResults>
    </>
  );
};

const StyledResults = styled.div`
  width: 100%;
  margin-bottom: 10rem;

  h2 {
    font-size: 4rem;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }

  h3 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2.7rem;
  }

  h4 {
    font-size: 2rem;
    width: 100%;
    font-weight: bold;
    width: 60%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }

  p {
    width: 60%;
    margin: 0 auto;
    font-size: 1.8rem;
    padding: 2rem 0;
    line-height: 2.2rem;
  }

  ul {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 5rem;
  }
  li {
    font-size: 2.3rem;
    margin-bottom: 2rem;
    span {
      font-size: 1.8rem;
      color: ${(props) => props.theme.lightgrey};
    }
  }
`;

export default Results;
