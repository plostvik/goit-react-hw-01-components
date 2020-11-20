import React from 'react';
import Profile from './components/Profile/Profile.js';
import user from './components/data/user.json';
import Statistics from './components/Statistics/Statistics.js';
import statisticalData from './components/data/statistical-data.json';
import FriendList from './components/FriendList/FriendList.js';
import friends from './components/data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import transactions from './components/data/transactions.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
