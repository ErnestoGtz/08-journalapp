import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { activeNode } from '../../components/auth/notes';
import { NoteScreen } from '../../components/notes/NoteScreen';



jest.mock('../../components/auth/notes',()=>({
    activeNode:jest.fn()
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
        active:{
            id:1234,
            title:'Hola',
            body:'mundo',
            date:0
        }
    }

}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en el <NoteScreen />', () => {
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar el active node', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target:{
                name:'title',
                value:'Hola de nuevo'
            }
        });

        expect(activeNode).toHaveBeenLastCalledWith(
            1234,
            {
                body:'mundo',
                title:'Hola de nuevo',
                id:1234,
                date:0
            }
        );
    })
    
    
})
