import Configuration from './Configuration';
import injectSheet from 'react-jss';

// import List from '../../components/List';
// import ListItemLink from '../../components/ListItemLink';
import React from 'react';
import { View } from 'thenativeweb-ux';
import { Route, Switch } from 'react-router-dom';

const styles = () => ({
  Information: {}
});

const Information = ({ classes }) => (
  <View className={ classes.Information } orientation='horizontal'>
    {

      // <List>
      //   <ListItemLink
      //     label='Configuration'
      //     href={ `/#/info/configuration` }
      //     isActive={ match.params.view === 'configuration' }
      //   />
      //   <ListItemLink
      //     label='API docs'
      //     href={ `/#/info/api-docs` }
      //     isActive={ match.params.view === 'api-docs' }
      //   />
      // </List>
    }
    <View adjust='flex' scrollable={ 'auto' }>
      <Switch>
        <Route
          path={ `/info/configuration` }
          component={ Configuration }
        />
      </Switch>
    </View>
  </View>
);

export default injectSheet(styles)(Information);
