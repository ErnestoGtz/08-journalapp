import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Sidebar } from '../../../components/journal/Sidebar';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../components/auth/notes';



jest.mock('../../../actions/auth',()=>({
    startLogout:jest.fn()
}));

jest.mock('../../../components/auth/notes',()=>({
    startNewNote:jest.fn()
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid:'C7dqUyrpoHhrmBySNXHzy9Gb6tx2',
        name:'Ernesto'
    },
    uid:{
        loading:false,
        msgError:null
    },
    notes:{
        notes:[],
        active:null
    }

}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <Sidebar />
    </Provider>
);

describe('Pruebas en <Sidebar />', () => {
    test('debe de mostrarse correctamente', () => {
        //snapshot
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar el startLogout', () => {
        //debe de llamar la accion del logout
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
    })

    test('debe de llamar el startNewNote', () => {
        //debe llamar la accion de startNewNote
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    })
    
    
})
