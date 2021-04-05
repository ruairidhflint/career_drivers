import { useState, useEffect } from 'react';
import styled from 'styled-components';
const Loading = (props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 100) {
      setTimeout(() => setPercentage(percentage + 1), 80);
    } else {
      setTimeout(() => props.history.push({ pathname: '/results', state: { prevLocation: true } }), 2000);
      return;
    }
  }, [percentage, props.history]);

  return (
    <StyledLoadingContainer>
      <div className="percentage">{percentage}%</div>
      <div className="text">
        {percentage <= 20 && 'Gathering answers'}
        {percentage > 20 && percentage <= 45 && 'Aggregating data'}
        {percentage > 45 && percentage <= 75 && 'Running data comparisons'}
        {percentage > 75 && percentage < 100 && 'Finalising results'}
        {percentage === 100 && 'Complete!'}
      </div>
    </StyledLoadingContainer>
  );
};

const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .percentage {
    font-size: 2.5rem;
  }

  .text {
    font-size: 1.5rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }
`;

export default Loading;
