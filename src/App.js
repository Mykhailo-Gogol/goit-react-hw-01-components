import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import profileData from "./user.json";

export default class App extends Component {
  render() {
    return (
      <div>
        <Profile profile={profileData} />
      </div>
    );
  }
}
