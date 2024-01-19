import React, { useState } from 'react';
import { User } from '../../types';
import { ROLES } from '../../constants';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='mb-3'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          className='form-control'
          name='name'
          id='name'
          required
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          className='form-control'
          name='email'
          id='email'
          required
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='isActive'>Is Active?</label>
        <input
          type='checkbox'
          className='form-check-input ms-2'
          name='isActive'
          id='isActive'
          checked={user.isActive}
          onChange={changeIsActive}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='role'>Role:</label>
        <select
          name='role'
          id='role'
          className='form-select'
          onChange={changeUser}
          value={user.role}
        >
          <option value=''>Select Role</option>
          {ROLES.map((role) => (
            <option value={role.value} key={role.value}>
              {role.title}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>
        Add
      </button>
    </form>
  );
};

export default UserForm;
