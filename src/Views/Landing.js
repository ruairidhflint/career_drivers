import { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Landing = () => {
  const infoRef = useRef(null);
  const executeScroll = () => {
    infoRef.current.scrollIntoView();
  };

  return (
    <>
      <StyledLandingContainer>
        <div className="landing-left">
          <h1>Career Drivers</h1>
          <p>What motivates you? Why do you feel inclined towards certain things and not others?</p>
        </div>
        <div className="landing-right">
          <button onClick={executeScroll}>↓</button>
        </div>
      </StyledLandingContainer>
      <StyledInfoContainer ref={infoRef}>
        <p>
          Research in career development suggests that we all have one or two primary key values that motivate us. These
          are referred to as our ‘Career Drivers’. Rarely are they intellectually or conciously decided - they are the
          product of powerful internal factors formed by both nature and nurture.
        </p>
        <p>
          Societal and cultural influences often lead us to believe we are motivated by certain things and therefore use
          those are our main goals; however the reality of our personal driving values may be vastly different. Somebody
          who on the surface level believes power and status are the most important motivating factors may continually
          chase these desires but never be satisfied. Their true career drivers may be much more to do with creativity
          and autonomy.
        </p>
        <p>
          Not understanding your primary motivating desires can lead to unfulfillment and career choices that are not
          necessarily in your best interest.
        </p>
        <p>
          This assessment provides a simple and short framework to understand what are your career drivers and hopefully
          some clarity as to what a future path towards fullfillment will look like.
        </p>
        <Link to="/instructions">Take the Assessment →</Link>
      </StyledInfoContainer>
    </>
  );
};

const StyledLandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .landing-left {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 600px) {
      width: 100%;
      justify-content: center;
    }
  }

  .landing-right {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    @media (max-width: 600px) {
      width: 100%;
      align-items: center;
      height: 10%;
    }
  }

  h1 {
    font-size: 9rem;
    max-width: 500px;
    padding: 2rem;

    @media (max-width: 930px) {
      font-size: 7rem;
    }

    @media (max-width: 400px) {
      font-size: 5rem;
      text-align: center;
    }
  }

  button {
    font-size: 2rem;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
  }

  p {
    font-size: 2.8rem;
    max-width: 800px;
    padding: 0 2rem;
    color: ${(props) => props.theme.lightgrey};
    @media (max-width: 930px) {
      font-size: 2rem;
    }

    @media (max-width: 400px) {
      font-size: 1.8rem;
      line-height: 2rem;
      text-align: center;
    }
  }
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;

  @media (max-width: 600px) {
    align-items: center;
  }

  p {
    font-size: 1.8rem;
    padding: 2rem 0;
    width: 65%;
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
`;

export default Landing;
