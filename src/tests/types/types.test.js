import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas con nuestros types', () => {
    test('debe de tener estos tipos', () => {
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
            
            uiSetError:'[UI] Set Error',
            uiRemoveError:'[UI] Remove Error',
            uiStartLoading:'[UI] Start Loading',
            uiFinishLoading:'[UI] Finish Loading',
            
            notesAddNew:'[Notes] New Note',
            notesActive:'[Notes] Set active note',
            notesLoad:'[Notes] Load notes',
            notesUpdated:'[Notes] Update note',
            notesFileUrl:'[Notes] Update image',
            notesDelete:'[Notes] Delete note',
            notesLogoutCleaning:'[Notes] Logout cleaning'
        });
    });
    
});
