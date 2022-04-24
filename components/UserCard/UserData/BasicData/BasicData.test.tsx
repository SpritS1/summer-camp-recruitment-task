import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { User } from '../../../../lib/users';
import BasicData from './BasicData';

describe('BasicData component ', () => {
  const user: User = {
    fullName: 'Ginger Osinski',
    username: 'Mohamed_Lubowitz15',
    email: 'Roger.Predovic99@hotmail.com',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1005.jpg',
    address: {
      street: '7782 Aiyana Extension',
      city: 'Braunland',
      zip: '53464',
    },
    phoneNumber: '+48 201 777 836',
    gender: 'Male',
    age: 63,
    images: [
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
      'http://loremflickr.com/640/480/people?50996',
    ],
  };

  it('should render BasicData component', async () => {
    const component = render(<BasicData user={user} />);

    expect(component).toBeTruthy();
  });
});