import Information from './Information';
import React from 'react';
import StoreFront from './StoreFront';
import { Application, Brand, Link, Product, Sidebar, ThemeProvider } from 'thenativeweb-ux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

const navigate = ({ history, to }) => {
  history.push(to);
};

const App = () => (
  <Router>
    <ThemeProvider theme='wolkenkit'>
      <Application>
        <Application.Services />
        <Route
          path='*'
          render={ ({ match, history }) => (
            <Sidebar>
              <Sidebar.Brand>
                <Link
                  href='/#/'
                  id='link-app'
                >
                  <Product name='API shell' />
                </Link>
              </Sidebar.Brand>
              <Sidebar.Item
                id='sidebar-item-info'
                iconName='info'
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
