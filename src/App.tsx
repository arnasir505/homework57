import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import { User } from './types';

function App() {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      isActive: true,
      role: 'admin',
    },
    {
      name: 'Janna Dark',
      email: 'jannadark@gmail.com',
      isActive: false,
      role: 'user',
    },
  ]);

  const addUser = (newUser: User) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col'>
          <UserForm onSubmit={addUser} />
        </div>
        <div className='col'>
          <Users users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
