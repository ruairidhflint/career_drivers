import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

const Results = (props) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    const data = window.localStorage.getItem('results');
    if (data) {
      const parsed = JSON.parse(data);
      setRes(parsed);
    } else {
      props.history.replace('/');
    }
  }, [props.history]);

  return (
    <StyledResults>
      <h2>Career Driver Results</h2>
      <ApexChart />
      <ApexChart2 />
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
`;

export default Results;

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
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
            'Power / Influence',
            'Meaning.',
            'Expertise.',
            'Creativity',
            'Affiliation',
            'Autonomy',
            'Security',
            'Status',
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={600} />
      </div>
    );
  }
}

class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20, 40, 100, 20],
        },
      ],
      options: {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            'South Korea',
            'Canada',
            'United Kingdom',
            'Netherlands',
            'Italy',
            'France',
            'Japan',
            'United States',
            'China',
            'Germany',
          ],
        },
      },
    };
  }

  render() {
    return (
      <div style={{ width: '50%', margin: '0 auto' }} id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={600} />
      </div>
    );
  }
}
