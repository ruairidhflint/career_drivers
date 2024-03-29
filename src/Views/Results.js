import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RadarChart from '../Components/Chart';
import { driverTypeInfo } from '../Helpers/driverTypeInfo';

const Results = ({ history, location, setCurrent }) => {
  const [graphData, setGraphData] = useState(null);
  const [topThree, setTopThree] = useState([]);
  const { prevLocation } = (location && location.state) || {};

  useEffect(() => {
    if (!prevLocation) {
      setCurrent(true);
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
      history.replace('/');
    }
  }, [history, prevLocation, setCurrent]);

  return (
    <>
      <StyledResults>
        <h2>Career Driver Results</h2>
        <p>
          Generally we have two or three primary career drivers with one often head and shoulders above the rest. Below
          is a radar graph that shows you how you scored in each of nine categories. Following the graph is a short
          breakdown of the three areas you scored highest in.
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
          drivers you have scored hgihest on and ask yourself the following three questions. Take a few minutes to write
          down a thoughtful but succinct anwser to each will be of huge benefit to both your personal and professional
          life.
        </p>
        <h4>- Are you surprised by your results? Why?</h4>
        <h4>- What do you think are the key strengths and weaknesses of each of your drivers?</h4>
        <h4>- Does your current role currently fulfil your drivers? Expand on your answer.</h4>
        <p>
          As our lives and careers progress what we most value can change. Years of financial hardship can lead to
          Material Rewards and Security being prioritised. It is a good idea to take note of your results and compare
          them to a new set of results in a years time.
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
    font-weight: bold;
    width: 60%;
    margin: 0 auto;
    margin-top: 2.5rem;
    @media (max-width: 970px) {
      width: 85%;
    }
  }

  p {
    width: 70%;
    margin: 0 auto;
    font-size: 1.8rem;
    padding: 2rem 0;
    line-height: 2.2rem;

    @media (max-width: 970px) {
      width: 95%;
    }
  }

  ul {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 5rem;
    @media (max-width: 970px) {
      width: 95%;
    }
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
