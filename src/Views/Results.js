import { useEffect, useState } from 'react';

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
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Results;
