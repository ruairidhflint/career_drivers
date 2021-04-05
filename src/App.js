import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import GlobalStyle from './Styles/global';
import { Theme } from './Styles/theme';
import Landing from './Views/Landing';
import Instructions from './Views/Instructions';
import Assessment from './Views/Assessment';
import Loading from './Views/Loading';
import Results from './Views/Results';

function App(props) {
  useEffect(() => {
    const data = window.localStorage.getItem('results');
    if (data) {
      props.history.replace('results');
    }
  }, [props.history]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/assessment" component={Assessment} />
        <Route path="/loading" component={Loading} />
        <Route path="/results" component={Results} />
      </div>
    </ThemeProvider>
  );
}

export default withRouter(App);
