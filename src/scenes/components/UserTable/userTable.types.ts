import type { User } from '../../Users/users.types';

export interface UserTableProps {
  users: User[];
  onRowClick?: (user: User) => void;
  loading?: boolean;
}