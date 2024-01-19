import React from 'react';
import { User } from '../../types';
import UserItem from '../UserItem/UserItem';

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <UserItem user={user} key={Math.random()} />;
      })}
    </div>
  );
};

export default Users;
