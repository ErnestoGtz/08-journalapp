import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en el authReducer', () => {
    
    test('debe de realizar el login', () => {
        const initState = {};

        const action = {
            type:types.login,
            payload:{
                uid:'abc',
                displayName:'Neto'
            }
        }

        const state = authReducer(initState,action);
        expect(state).toEqual({
            uid:'abc',
            name:'Neto'
        });
    });

    test('debe de borrar los datos del login', () => {
        const initState = {
            uid:'jdsflkjalksdj1321321',
            name:'Ernesto'
        };

        const action = {
            type:types.logout,
        };

        const state = authReducer(initState,action);
        expect(state).toEqual({});
    });

    test('no debe de hacer cambios en el state', () => {
        const initState = {
            uid:'jdsflkjalksdj1321321',
            name:'Ernesto'
        };

        const action = {
            type:'aksjdhf',
        };

        const state = authReducer(initState,action);
        expect(state).toEqual(initState);
    });
    
});
