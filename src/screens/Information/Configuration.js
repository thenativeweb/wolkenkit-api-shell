import injectSheet from 'react-jss';
import React from 'react';
import { Button, Headline, Link, Text } from 'thenativeweb-ux';

const styles = theme => ({
  Configuration: {
    padding: theme.grid.stepSize * 2
  },
  ActionButton: {
    display: 'inline-flex'
  }
});

const Configuration = React.memo(({ classes }) => (
  <div id='screen-information-configuration' className={ classes.Configuration }>
    <Headline id='screen-information-configuration-headline'>Configuration</Headline>
    <Text id='screen-information-configuration-text' breakLines={ true }>
      The configuration of this application
      is available at <Link href={ `/v1/configuration.json` }>/v1/configuration.json</Link>.
    </Text>
    <Link
      href={ `/v1/configuration.json` } isExternal={ true }
    >
      <Button
        id='screen-information-test-debug-button'
        className={ classes.ActionButton }
      >
        View configuration
      </Button>
    </Link>
  </div>
));

export default injectSheet(styles)(Configuration);
