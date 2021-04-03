import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Instructions = () => {
  return (
    <StyledInstructions>
      <p>
        Following are 36 pairs of reasons given when they are asked about what they want and need from their career.{' '}
      </p>
      <p>
        You must decide how to allocate three points between each of the pairs. For example if you strongly align with A
        and not at all with B, you would give three points to A and zero to B or vice versa. If there is a draw towards
        both, you must decide which of the pair will get two points and which will get one. There is no ability to
        equally distribute the points so you must consider which is resonates more with you.{' '}
      </p>
      <p>
        You may occassionally find yourself struggling to choose between two because they seem unrelated or irrelavant -
        this is by design; being forced to weigh difficult decisions has proven worthwhile and allows us to get close to
        your most singiicant value.
      </p>
      <p>
        Finally, please remember that there are no right or wrong answers. It is purely personal preference - so please
        be as honest an objective as possible.{' '}
      </p>
      <p>
        Please spend no more than 15 seconds on each question - the whole process should take approximately ten minutes.{' '}
      </p>

      <Link to="/assessment">Begin Assessment →</Link>
    </StyledInstructions>
  );
};

const StyledInstructions = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 720px) {
    width: 98%;
  }

  p {
    font-size: 1.8rem;
    padding: 2rem 0;
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

export default Instructions;
