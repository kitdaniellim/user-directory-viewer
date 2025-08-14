import axios from 'axios';
import type { User } from '../scenes/Users/users.types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers(): Promise<User[]> {
  const { data } = await axios.get<User[]>(`${BASE_URL}/users`);
  return data;
}

export async function fetchUser(id: string | number): Promise<User> {
  const { data } = await axios.get<User>(`${BASE_URL}/users/${id}`);
  return data;
}
