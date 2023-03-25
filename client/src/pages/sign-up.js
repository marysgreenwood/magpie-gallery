import React from "react";

export default function SignUp() {
  return (
    <div class="container row">
      <div class="jumbotron col-sm-4 pull-center">
        <form id="signup-form">
          <div>
            <label>Username:</label>
            <input type="text" name="username" id="username-input" />
          </div>
          <div>
            <label>Pronouns:</label>
            <input type="text" name="pronouns" id="pronouns-input" />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" id="email-input" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" id="password-input" />
          </div>
          <div>
            <input
              class="btn btn-primary"
              type="submit"
              id="submitBtn"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
