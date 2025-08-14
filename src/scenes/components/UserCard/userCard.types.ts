import type { Address, Company } from '../../Users/users.types';

export interface UserCardProps {
  id?: number;
  title?: string;
  imageSrc?: string;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}
