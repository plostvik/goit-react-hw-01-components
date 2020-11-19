import React from 'react';
import Profile from './components/Profile/Profile.js';
import user from './components/data/user.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;
