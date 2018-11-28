import Configuration from './Configuration';
import injectSheet from 'react-jss';
import List from '../../components/List';
import ListItemLink from '../../components/ListItemLink';
import React from 'react';
import TestAndDebug from './TestAndDebug';
import { View } from 'thenativeweb-ux';
import { Route, Switch } from 'react-router-dom';

const styles = () => ({
  Information: {}
});

// <ListItemLink
//   label='API docs'
//   href={ `/#/info/api-docs` }
//   isActive={ match.params.view === 'api-docs' }
// />

const Information = ({ classes, match }) => (
  <View className={ classes.Information } orientation='horizontal'>
    {

      <List>
        <ListItemLink
          label='Configuration'
          href={ `/#/info/configuration` }
          isActive={ match.params.view === 'configuration' }
        />

        <ListItemLink
          label='Test and Debug'
          href={ `/#/info/test-and-debug` }
          isActive={ match.params.view === 'test-and-debug' }
        />
      </List>
    }
    <View adjust='flex' scrollable={ 'auto' }>
      <Switch>
        <Route
          path={ `/info/configuration` }
          component={ Configuration }
        />
        <Route
          path={ `/info/test-and-debug` }
          component={ TestAndDebug }
        />
      </Switch>
    </View>
  </View>
);

export default injectSheet(styles)(Information);
