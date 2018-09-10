import injectSheet from 'react-jss';
import React from 'react';
import { Headline, Link, Text } from 'thenativeweb-ux';

const styles = theme => ({
  Configuration: {
    padding: theme.grid.stepSize * 2
  }
});

const Configuration = ({ classes }) => (
  <div id='screen-information-configuration' className={ classes.Configuration }>
    <Headline>Configuration</Headline>
    <Text>
      The configuration of this application
      is available at <Link href={ `/v1/configuration.json` }>/v1/configuration.json</Link>.
    </Text>
  </div>
);

export default injectSheet(styles)(Configuration);
