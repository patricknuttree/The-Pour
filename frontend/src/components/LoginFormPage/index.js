import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to={`/profile/${sessionUser.id}`} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  return (
    <div className="login-container-outer">
      <div className="login-container-inner">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 id="login-title">Login</h2>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
              ))}
          </ul>
            <div className="input-container">
              <label>Username or email: </label>
                <input
                  className="login-input"
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                  />
            </div>
            <div className="input-container">
              <label>Password: </label>
                <input
                  className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
            </div>
          <div className="input-container">
            <button type="submit">Log In</button>
            <a href="/"> Cancel </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
