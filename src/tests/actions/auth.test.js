import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';
import '@testing-library/jest-dom';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('pruebas con las acciones de Auth', () => {

    beforeEach(()=>{
        store= mockStore(initState)
    })
    
    test('login y logout debe de crear la accioin respectiva', () => {
        const uid = 'ABC123';
        const displayName = 'Ernesto';

        const loginAction = login(uid,displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type:types.logout
        });
    });

    test('debe de realizar el logout',async () => {
        await store.dispatch(startLogout());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:types.logout
        });
        expect(actions[1]).toEqual({
            type:types.notesLogoutCleaning
        });

    });

    test('debe de iniciar el startLoginEmailPassword', async() => {
        await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));
        const actions = store.getActions();
        
        expect(actions[1]).toEqual({
            type:types.login,
            payload:{
                uid:'nehmB5B06dNVfj3024wxJ6mcDlN2',
                displayName:null
            }
        });


    })
});
