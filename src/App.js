import React, { Component } from "react";
import "./App.css";

import Profile from "./components/Profile";
import ProfileFunc from "./components/ProfileFunc";
import profileData from "./user.json";

import Statistics from "./components/Statistics";
import StatisticsFunc from "./components/StatisticsFunc";
import statisticsData from "./statistical-data.json";

import FriendList from "./components/FriendList";
import FriendListFunc from "./components/FriendListFunc";
import friendsData from "./friends.json";

import TransactionHistory from "./components/TransactionHistory";
import TransactionHistoryFunc from "./components/TransactionHistoryFunc";
import transactionsData from "./transactions.json";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* Class Components */}
        <Profile profile={profileData} />
        <Statistics title="Upload stats" stats={statisticsData} />
        <FriendList friends={friendsData} />
        <TransactionHistory transactions={transactionsData} />
        {/* Function Components */}
        <ProfileFunc profile={profileData} />
        <StatisticsFunc title="Upload stats" stats={statisticsData} />
        <FriendListFunc friends={friendsData} />
        <TransactionHistoryFunc transactions={transactionsData} />
      </div>
    );
  }
}
