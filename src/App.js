import React from 'react';
import './App.css';
import HomePage from "./Components/Home page/HomePage";
import WorkPage from "./Components/Work page/WorkPage";

const App = (props) => {
    let unsubscribePageSelection = (initialState) => {  //выбираем что сейчас отрисовать
        if (initialState.person === null) {
            return homePage
        } else {
            return workPage
        }
    };
    let homePage = <HomePage props={props}/>;
    let workPage = <WorkPage props={props}/>;

    return (
        <div className="App">
            {unsubscribePageSelection(props.initialState)}
        </div>
    );
}

export default App;
