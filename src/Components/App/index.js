import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from '../../Routes/index';
import { BookingProvider } from "../../Provider/BookingProvider";
// const authConfig = {
//   url: '',
//   auth: {
//     jwtToken: async () =>
//       (await Auth.currentSession()).getIdToken().getJwtToken(),
//   }
// }


const App = () => {
  return (
    <BookingProvider>
      <Router basename="/">
        <AppRouter />
      </Router>
    </BookingProvider>
  );
};

export default App;
