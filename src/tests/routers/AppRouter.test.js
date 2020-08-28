import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';


import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';

import {firebase} from '../../firebase/firebase-config';         


jest.mock('../../actions/auth',()=> ({
    login:jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    },
    notes:{
        active:{
            id:'ABC'
        },
        notes:[]
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();



describe('Pruebas en <AppRouter />', () => {
    test('debe de llamar el login si estoy autenticado', async() => {
        
        let user;
        
        await act(async ()=>{
            
            const userCredentials = await firebase.auth().signInWithEmailAndPassword('test@testing.com','123456');
            user = userCredentials.user;

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                    
                </Provider>
            )
        });

        expect(login).toHaveBeenCalledWith('nehmB5B06dNVfj3024wxJ6mcDlN2',null);
        
        
    });
    
});
