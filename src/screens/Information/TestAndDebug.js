import injectSheet from 'react-jss';
import React from 'react';
import { Button, Headline, Link, Text } from 'thenativeweb-ux';

const styles = theme => ({
  TestAndDebug: {
    padding: theme.grid.stepSize * 2
  }
});

const getConsoleParameters = function () {
  const parameters = {
    host: window.location.hostname,
    port: window.location.port
  };

  const parametersAsQueryString = Object.keys(parameters).reduce((queryString, name, index) => {
    switch (index) {
      case 0:
        return `?${name}=${parameters[name]}`;
      default:
        return `${queryString}&${name}=${parameters[name]}`;
    }
  }, '');

  return parametersAsQueryString;
};

const getConsoleUrl = function () {
  const url = `https://console.wolkenkit.io/${getConsoleParameters()}`;

  return url;
};

const TestAndDebug = React.memo(({ classes }) => (
  <div id='screen-information-test-debug' className={ classes.TestAndDebug }>
    <Headline id='screen-information-test-debug-headline'>Test and Debug</Headline>
    <Text id='screen-information-test-debug-text' breakLines={ true }>
      Connect to and play with this API. Send commands, observe events and read models,
      using <Link href={ getConsoleUrl() }>console.wolkenkit.io</Link>.
    </Text>
    <Link
      href={ getConsoleUrl() } isExternal={ true }
    >
      <Button id='screen-information-test-debug-button'>Connect to this API</Button>
    </Link>
  </div>
));

export default injectSheet(styles)(TestAndDebug);
