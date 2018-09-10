import Information from './Information';
import React from 'react';
import StoreFront from './StoreFront';
import { Application, Brand, Link, Product, Sidebar, ThemeProvider } from 'thenativeweb-ux';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

var navigate = function navigate(_ref) {
  var history = _ref.history,
      to = _ref.to;

  history.push(to);
};

var App = function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      ThemeProvider,
      { theme: 'wolkenkit' },
      React.createElement(
        Application,
        null,
        React.createElement(Application.Services, null),
        React.createElement(Route, {
          path: '*',
          render: function render(_ref2) {
            var match = _ref2.match,
                history = _ref2.history;
            return React.createElement(
              Sidebar,
              null,
              React.createElement(
                Sidebar.Brand,
                null,
                React.createElement(
                  Link,
                  {
                    href: '/#/',
                    id: 'link-app'
                  },
                  React.createElement(Product, { name: 'API shell' })
                )
              ),
              React.createElement(Sidebar.Item, {
                id: 'sidebar-item-info',
                iconName: 'info',
                isActive: match.url.startsWith('/info'),
                onClick: function onClick() {
                  return navigate({ to: '/info/configuration', history: history });
                }
              }),
              React.createElement(
                Sidebar.Footer,
                null,
                React.createElement(
                  Link,
                  { href: 'http://www.thenativeweb.io', isExternal: true },
                  React.createElement(Brand, { type: 'minimal', color: 'monochrome', isInteractive: true })
                )
              )
            );
          }
        }),
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: '/', component: StoreFront }),
          React.createElement(Route, { path: '/info/:view?', component: Information })
        )
      )
    )
  );
};

export default App;