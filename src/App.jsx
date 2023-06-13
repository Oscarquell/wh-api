import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import LogIn from "./components/login";
import ChatPage from "./components/chatPage";
import {useSelector} from "react-redux";
import {accountSelector} from "./redux/Account";


function App() {

    function PrivateRoute({ children, ...rest }) {
        const accountState = useSelector(accountSelector.getAccountState)

        return (
            <Route
                {...rest}
                render={() => {
                    return accountState.data.isAuthorized ? (children) : (<Redirect to="/login" path/>);
                }}
            />
        );
    }

  const accountState = useSelector(accountSelector.getAccountState)

  const defaultRedirect = accountState.data.isAuthorized ? <Redirect to={'/chat'} path/> :
    <Redirect from={'/*'} to={'/login'} path/>

  return (
    <div className="App">
      <div>
          <Switch>
            <Route path='/login'>
              <LogIn/>
            </Route>
            <PrivateRoute path='/chat'>
              <ChatPage/>
            </PrivateRoute>
          </Switch>
          {defaultRedirect}
      </div>
    </div>
  );
}

export default App;

