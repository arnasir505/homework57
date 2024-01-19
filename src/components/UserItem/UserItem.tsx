import React from 'react';
import { User } from '../../types';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className={`card mb-3 ${user.isActive ? '' : 'bg-body-secondary'}`}>
      <div className='card-body'>
        <h5 className='card-title'>
          {user.name} <span className='badge text-bg-info'>{user.role}</span>
        </h5>
        <span>{user.email}</span>
      </div>
    </div>
  );
};

export default UserItem;
