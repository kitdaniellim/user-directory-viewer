import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from './users.types';
import { UserTable } from '../components/UserTable/UserTable';
import { Panel } from 'primereact/panel';
import type { UsersProps } from './users.types';
import { useUsers } from './user.hooks';

export const Users: React.FC<UsersProps> = () => {
  const { users, loading } = useUsers();
  const navigate = useNavigate();

  return (
    <div className="users-list-scene p-3">
      <Panel header="User Directory" className="users-list-scene__panel">
        <UserTable
          users={users}
          loading={loading}
          onRowClick={(u: User) => navigate(`/users/${u.id}`)}
        />
      </Panel>
    </div>
  );
};
