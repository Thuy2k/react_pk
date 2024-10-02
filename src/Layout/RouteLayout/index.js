import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RootContext } from '../../RootContext';
import PropTypes from 'prop-types';
import EmptyLayout from '../EmptyLayout/index';
import { useLocation } from 'react-router-dom';

import LoginLayout from '../LoginLayout/index';
import LoginPage from '../../Pages/LoginPage/index';


const RouteLayout = ({ requireAuth, layout: Layout, component: Component, permission, redirectTo, ...rest }) => {

  console.log("RouteLayouttttttttttttttttt", Layout);

  const context = useContext(RootContext);
  // const isAuthenticated = !!context.user;
  const isAuthenticated = true;
  const role_functionalities = [];
  const location = useLocation();

  // if (requireAuth && !isAuthenticated) {
  //   return <Navigate to={redirectTo} />;
  // } 
  // else if (permission && role_functionalities.indexOf(permission) === -1){
  //   return <Navigate to='/dashboard' />;
  // } else {

  // <Route element={<AdminLayout />}>
  //   <Route path="/dashboard" element={<DashboardPage />} />
  // </Route>

  return (
    // <Route
    //   {...rest}
    //   element={props => (
    //     <Layout {...props}>
    //       <Component/>
    //     </Layout>
    //   )}
    // />
    <>
      <Route element={<LoginLayout />}>
        <Route element={<LoginPage />} path="/" />
      </Route>
    </>
    // <Route element={<Layout />}>
    //   <Route element={<Component />} />
    // </Route>
  );
  // }
};

RouteLayout.defaultProps = {
  layout: EmptyLayout,
  requireAuth: false,
  redirectTo: '/'
};

RouteLayout.propTypes = {
  requireAuth: PropTypes.bool,
  layout: PropTypes.any,
  component: PropTypes.any,
  redirectTo: PropTypes.string
};

export default RouteLayout;
