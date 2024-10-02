import { createContext } from 'react';

const MenuStateContext = createContext({
    user: null
});

export default MenuStateContext;
export { MenuStateContext };