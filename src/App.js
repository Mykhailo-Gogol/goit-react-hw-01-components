import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import profileData from "./user.json";
import statisticsData from "./statistical-data.json";

import Statistics from "./components/Statistics";

export default class App extends Component {
  render() {
    return (
      <div>
        <Profile profile={profileData} />
        <Statistics title="Upload stats" stats={statisticsData} />
      </div>
    );
  }
}
