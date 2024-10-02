import React, { PureComponent } from 'react';
import { Link, Outlet } from 'react-router-dom';

class LoginLayout extends PureComponent {
    render() {
        return (
            <div>
                <Link to="/"></Link>
                <Outlet />
            </div>
        );
    }
}

export default LoginLayout;