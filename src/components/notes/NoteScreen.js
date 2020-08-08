import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                
                    <input 
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                    />
                    <textarea
                        placeholder="What happened today"
                        className="notes__textarea"
                    ></textarea>
                    <div className="notes__image">
                        <img 
                            src="https://cdn.game.tv/game-tv-content/images_3/1f2edbdc5ba723f1fabfb6e5baedb47a/GameTile.jpg" 
                            alt="imagen"
                        />
                    </div>
                
            </div>
        </div>
    )
}
