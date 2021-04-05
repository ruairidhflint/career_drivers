import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const RestartBar = (props) => {
  const freshStart = () => {
    props.setCurrent(false);
    window.localStorage.removeItem('results');
    props.history.push('/');
  };
  const closeBar = () => {
    props.setCurrent(false);
  };
  return (
    <StyledReset current={props.current}>
      <div className="holding">
        <p>These are your previously saved results. Would you like to start fresh?</p>{' '}
        <div>
          <span onClick={freshStart}>Yes</span> / <span onClick={closeBar}>No</span>
        </div>
      </div>
    </StyledReset>
  );
};

const StyledReset = styled.div`
  display: ${(props) => (props.current ? 'flex' : 'none')};
  width: 100%;
  height: 30px;
  background-color: rgba(247, 68, 89, 0.9);
  color: white;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;

  .holding {
    width: 550px;
    display: flex;
    justify-content: space-between;
  }

  span {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

export default withRouter(RestartBar);
