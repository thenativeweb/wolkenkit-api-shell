import React from 'react';
import StoreFront from '../StoreFront';
import { Application, ThemeProvider } from 'thenativeweb-ux';

const App = () => (
  <ThemeProvider theme='wolkenkit'>
    <Application>
      <Application.Services />
      {

        // <Sidebar>
        //   <Sidebar.Footer>
        //     <Link href='http://www.thenativeweb.io' isExternal={ true }>
        //       <Brand type='minimal' color='monochrome' isInteractive={ true } />
        //     </Link>
        //   </Sidebar.Footer>
        // </Sidebar>
      }
      <StoreFront />
    </Application>
  </ThemeProvider>
);

export default App;
