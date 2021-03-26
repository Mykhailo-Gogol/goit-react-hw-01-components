import {createUseStyles} from 'react-jss'

import Profile from "./components/Profile";
import profileData from "./data/user.json";

import Statistics from "./components/Statistics";
import statisticsData from "./data/statistical-data.json";

import FriendList from "./components/FriendList";
import friendsData from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory";
import transactionsData from "./data/transactions.json";

const useStyles = createUseStyles({
  container: {
    paddingTop: 70,
    backgroundColor: '#282c34'
  }
})

const App = () => {
  const s = useStyles()
  return (
    <div className={s.container}>
      <Profile profile={profileData} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
};

export default App;
