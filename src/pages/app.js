import React from 'react';
import ResumeDownload from '../components/ResumeDownload';

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Profile</h1>
      <ResumeDownload />
    </div>
  );
};

export default App;