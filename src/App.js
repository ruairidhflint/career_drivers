import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/global';
import { Theme } from './Styles/theme';
import Landing from './Views/Landing';
import Instructions from './Views/Instructions';
import Assessment from './Views/Assessment';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/assessment" component={Assessment} />
      </div>
    </ThemeProvider>
  );
}

export default App;
