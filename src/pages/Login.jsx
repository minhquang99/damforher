import React, { useState } from "react";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = () => {
  const clientId =
    "510907788998-rsem4q1g9gtude23h69nevahquokf0v6.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };

  const onSignoutSuccess = (res) => {
    alert("Signed out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  return (
    <Helmet title="Login">
      <Section>
        <SectionTitle>Dang nhap</SectionTitle>
        <SectionBody>
          {showLoginButton ? (
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onFailureSuccess}
              cookiePolicy={"single_host_origin"}
            />
          ) : null}

          {showLogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Login;
