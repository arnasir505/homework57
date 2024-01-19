import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {
  return (
    <div className='container pt-5'>
      <div className='row'>
        <UserForm />
        <Users />
      </div>
    </div>
  );
}

export default App;
