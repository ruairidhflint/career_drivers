import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './Styles/global';
import { Theme } from './Styles/theme';
import Landing from './Views/Landing';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/assessment" component={() => <h1>Hello World</h1>} />
      </div>
    </ThemeProvider>
  );
}

export default App;
