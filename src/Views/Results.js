import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
