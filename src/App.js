import React, { Component } from "react";
import "./App.css";

import Profile from "./components/Profile";
import profileData from "./user.json";

import Statistics from "./components/Statistics";
import statisticsData from "./statistical-data.json";

import FriendList from "./components/FriendList";
import friendsData from "./friends.json";

import TransactionHistory from "./components/TransactionHistory";
import transactionsData from "./transactions.json";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profile profile={profileData} />
        <Statistics title="Upload stats" stats={statisticsData} />
        <FriendList friends={friendsData} />
        <TransactionHistory transactions={transactionsData} />
      </div>
    );
  }
}

export default App;
