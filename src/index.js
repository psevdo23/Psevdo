import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    back,
    home,
    initialState,
    currentPerson,
    findSubordinates,
    subscribe,
    switchPingPageNext,
    switchPingPagePrevious
} from "./store/store";

let renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                switchPingPagePrevious={switchPingPagePrevious}
                back={back}
                switchPingPageNext={switchPingPageNext}
                home={home}
                currentPerson={currentPerson}
                initialState={initialState}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

findSubordinates(initialState.person)// начальная инициализация для изменения subjects
renderApp();// вызов функции перерисовки

subscribe(renderApp);


serviceWorker.unregister();
