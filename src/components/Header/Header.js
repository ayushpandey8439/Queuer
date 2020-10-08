import React, { Component } from "react";
import "./Header.scss";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "1017457951228-1kgf95a3pcr8tnuujkbjccgi4trajkh9.apps.googleusercontent.com";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: "",
    };

    //This binding is essential otherwise the functions wont get access to the this object and will not be able to access the state of the component
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
    }
  }

  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }
  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">Queue manager</div>
        <div className="navbar-icons">
          {this.state.isLogined ? (
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}
            ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              cookiePolicy={"single_host_origin"}
              responseType="code,token"
            />
          )}
        </div>
      </div>
    );
  }
}

export default Header;
