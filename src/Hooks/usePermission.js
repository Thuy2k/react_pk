import { useContext } from 'react';
import RootContext from '../RootContext';

function usePermission(){
    const context = useContext(RootContext);
    const role_functionalities = context?.user_attrs?.roleInfo?.role_functionalities ?? [];

    return {
        has : (permission) => {
            return role_functionalities.indexOf(permission) !== -1
        },
        all: () => role_functionalities
    }
    
}

export default usePermission;