import { useEffect, useState, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';

import GlobalStyle from './Styles/global';
import { Theme } from './Styles/theme';

import { Landing, Instructions, Assessment, Loading, Results, RestartBar } from './Views';

function App({ history }) {
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    const data = window.localStorage.getItem('results');
    if (data) {
      history.replace('results');
    }
  }, [history]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <RestartBar current={current} setCurrent={setCurrent} />
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/loading" component={Loading} />
          <Route path="/results" render={(props) => <Results {...props} setCurrent={setCurrent} />} />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default withRouter(App);
