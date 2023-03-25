import React from "react";

export default function Login() {
  return (
    <div>
      <div class="container row">
        <h1>Welcome!</h1>
        <div class="jumbotron col-sm-4 pull-center">
          <form id="login-form">
            <div>
              <label>Username:</label>
              <input type="text" name="username" id="username-login" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" id="password-login" />
            </div>
            <div>
              <input class="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
        </div>
      </div>

      <h3>
        {" "}
        New here? <a href="#sign-up">Sign up</a>
      </h3>
    </div>
  );
}
