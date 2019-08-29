import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar:
    'http://www.sobaka.ru/uploads/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%20%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD_%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function App() {
  return (
    <div className="App">
      <Profile propUser={user} />
      <Stats title="Upload stats" stats={stats} />
    </div>
  );
}

export default App;
