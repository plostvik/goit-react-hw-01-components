import React from 'react';
import Profile from './components/Profile/Profile.js';
import user from './components/data/user.json';
import Statistics from './components/Statistics/Statistics.js';
import statisticalData from './components/data/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
