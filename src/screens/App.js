import Information from './Information';
import React from 'react';
import StoreFront from './StoreFront';
import { Application, Brand, Link, Sidebar, ThemeProvider } from 'thenativeweb-ux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

const navigate = ({ history, to }) => {
  history.push(to);
};

const App = () => (
  <Router>
    <ThemeProvider theme='wolkenkit'>
      <Application>
        <Application.Services />
        <svg xmlns='http://www.w3.org/2000/svg' role='presentational' style={{ display: 'none' }}>
          <symbol viewBox='0 0 24 24' id='icon-info-new'>
            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-6h-2v-2h4v8zm-1-9.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z' />
          </symbol>
        </svg>
        <Route
          path='*'
          render={ ({ match, history }) => (
            <Sidebar>
              <Sidebar.Brand><Link href='/#/'><Brand.Product name='API shell' /></Link></Sidebar.Brand>
              <Sidebar.Item
                iconName='info-new'
                isActive={ match.url.startsWith('/info') }
                onClick={ () => navigate({ to: '/info/configuration', history }) }
              />
              <Sidebar.Footer>
                <Link href='http://www.thenativeweb.io' isExternal={ true }>
                  <Brand type='minimal' color='monochrome' isInteractive={ true } />
                </Link>
              </Sidebar.Footer>
            </Sidebar>
          ) }
        />
        <Switch>
          <Route exact={ true } path='/' component={ StoreFront } />
          <Route path='/info/:view?' component={ Information } />
        </Switch>
      </Application>
    </ThemeProvider>
  </Router>
);

export default App;
