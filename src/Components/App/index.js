import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from '../../Routes/index';

// const authConfig = {
//   url: '',
//   auth: {
//     jwtToken: async () =>
//       (await Auth.currentSession()).getIdToken().getJwtToken(),
//   }
// }


const App = () => {
  return (
    <Router basename="/">
      <AppRouter />
    </Router>
  );
};

export default App;
