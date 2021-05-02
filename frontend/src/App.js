import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import CreateWhiskeyPage from "./components/CreateWhiskey/CreateWhiskey";
import EditWhiskey from "./components/EditWhiskey/EditWhiskey";


function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={`/profile/${userId}`}>
            <ProfilePage />
          </Route>
          <Route path="/create/whiskey">
            <CreateWhiskeyPage />
          </Route>
          <Route path="/edit/:id">
            <EditWhiskey />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
