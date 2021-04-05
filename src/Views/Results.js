import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

const Results = (props) => {
  const [graphData, setGraphData] = useState(null);
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
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
    <StyledResults>
      <h2>Career Driver Results</h2>
      <p>
        Generally we have two or three primary career drivers with one often head and shoulders above the rest. Below is
        a radar graph that shows you how you scored in each of nine categories. Following that is a short break down of
        the three areas you scored highest in.
      </p>
      {graphData && <RadarChart data={graphData} />}

      <h3>Top 3 Drivers</h3>
      <ul>
        {topThree &&
          topThree.map((driver) => {
            return (
              <li>
                {driver[0]} -{' '}
                <span>
                  Those people who do not fulfil their career drivers are likely to find it difficult to be motivated at
                  work. Wise individuals will ensure that their primary career drivers are satisfied.
                </span>
              </li>
            );
          })}
      </ul>
    </StyledResults>
  );
};

const StyledResults = styled.div`
  width: 100%;

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
    margin-bottom: 3rem;
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
    margin-bottom: 10rem;
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

const RadarChart = ({ data }) => {
  const state = {
    series: [
      {
        name: '',
        data: [
          data['Material Rewards'],
          data['Power/Influence'],
          data['Meaning'],
          data['Expertise'],
          data['Creativity'],
          data['Affilitation'],
          data['Autonomy'],
          data['Security'],
          data['Status'],
        ],
      },
    ],
    options: {
      chart: {
        height: 500,
        type: 'radar',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      // stroke: {
      //   show: true,
      //   width: 3,
      //   colors: ['#808080'],
      //   dashArray: 0,
      // },
      // fill: {
      //   opacity: 0.3,
      //   colors: ['#292929'],
      // },
      // markers: {
      //   style: 'inverted',
      //   size: 0,
      // },
      title: {
        text: undefined,
      },
      xaxis: {
        categories: [
          'Material Rewards',
          'Power/Influence',
          'Meaning',
          'Expertise',
          'Creativity',
          'Affiliation',
          'Autonomy',
          'Security',
          'Status',
        ],
      },
      // yaxis: {
      //   show: false,
      // },
    },
  };

  return (
    // <div style={{ border: '1px solid red' }}>
    <ReactApexChart options={state.options} series={state.series} type="radar" height={600} />
    // </div>
  );
};
