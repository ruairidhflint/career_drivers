import ReactApexChart from 'react-apexcharts';

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
        height: 500,
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
  return <ReactApexChart options={state.options} series={state.series} type="radar" height={600} />;
};

export default RadarChart;
