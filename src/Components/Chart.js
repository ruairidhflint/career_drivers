import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

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
          data['Affiliation'],
          data['Autonomy'],
          data['Security'],
          data['Status'],
        ],
      },
    ],
    options: {
      chart: {
        type: 'radar',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
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
      yaxis: {
        show: false,
      },
    },
  };
  return (
    <StyledGraphContainer>
      <ReactApexChart options={state.options} series={state.series} type="radar" />
    </StyledGraphContainer>
  );
};

export default RadarChart;

const StyledGraphContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
