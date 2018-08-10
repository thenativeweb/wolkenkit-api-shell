import injectSheet from 'react-jss';
import List from '../../components/List';
import ListItemLink from '../../components/ListItemLink';
import React from 'react';
import { Headline, Link, View } from 'thenativeweb-ux';
import { Route, Switch } from 'react-router-dom';

const styles = () => ({
  Information: {}
});

const Information = ({ classes, match }) => (
  <View className={ classes.Information } orientation='horizontal'>
    <List>
      <ListItemLink
        label='Configuration'
        href={ `/#/info/configuration` }
        isActive={ match.params.view === 'configuration' }
      />
    </List>
    <View adjust='flex' scrollable={ 'auto' }>
      <Switch>
        <Route
          path={ `/info/configuration` }
          render={ () => (
            <div style={{ padding: 20 }}>
              <Headline>Configuration</Headline>
              <p>
                The configuration of this application is available at
                <Link href={ `/v1/configuration.json` }><code>/v1/configuration.json</code></Link>.
              </p>
            </div>
          ) }
        />
      </Switch>
    </View>
  </View>
);

export default injectSheet(styles)(Information);
