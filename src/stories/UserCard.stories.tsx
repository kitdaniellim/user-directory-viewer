import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UserCard } from '../scenes/components/UserCard/UserCard';
import type { User } from '../scenes/Users/users.types';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
};

export default meta;

type Story = StoryObj<typeof UserCard>;

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'jdoe',
  email: 'john@example.com',
  phone: '1-770-736-8031 x56442',
  website: 'jdoe.org',
  address: { street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874' },
  company: { name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets' },
};

export const Default: Story = {
  args: {
    id: mockUser.id,
    name: mockUser.name,
    username: mockUser.username,
    email: mockUser.email,
    phone: mockUser.phone,
    website: mockUser.website,
    address: mockUser.address,
    company: mockUser.company,
  },
};
