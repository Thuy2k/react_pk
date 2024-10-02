import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ROLE_FUNCTION } from '../Utils/constants';

import RouteLayout from '../Layout/RouteLayout';
import AdminLayout from '../Layout/AdminLayout';
import DashboardPage from '../Pages/DashboardPage';
import LoginPage from '../Pages/LoginPage';
import BookingPage from '../Pages/BookingPage';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes style={{ height: '100vh' }}>
        <Route path="/" element={<LoginPage />} />

        <Route element={<AdminLayout />}>
          <Route element={<DashboardPage />} path="/dashboard" />
        </Route>

        <Route element={<AdminLayout />}>
          <Route element={<BookingPage />} path="/booking" />
        </Route>
        
       
        {/* <Route element={<LoginLayout />}>
          <Route element={<LoginPage />} path="/" />
        </Route> */}

        {/* <RouteLayout layout={LoginLayout} component={LoginPage} path="/" /> */}
        {/* <RouteLayout layout={AdminLayout} path="/dashboard" component={DashboardPage} requireAuth={true}/> */}

        {/* <RouteLayout requireAuth={true} layout={AdminLayout} path="/create-ticket/" permission={ROLE_FUNCTION.create_ticket} component={CreateTicketContainer} /> */}
      </Routes>
    );
  }
}

export default AppRouter;
