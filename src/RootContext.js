import { createContext } from 'react';

const RootContext = createContext({
    user: null,
    user_attrs: null,
    timezone: null,
    updateUserAttributes: () => {},
    updateTimezone: () => {}
});

export default RootContext;
export { RootContext };