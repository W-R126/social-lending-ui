import React from 'react';
import {css} from 'emotion';

export const App = () => {
    return (
        <header className={header}>
            <h3>Good luck in developing Social Lending app!</h3>
        </header>
    );
};

const header = css({
    color: '#1a1a1a',
});
