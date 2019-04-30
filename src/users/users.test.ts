import { generateUsers } from './';

it('generates the requested amount of random users', () => {
  const users = generateUsers(10);
  const user = users[3];

  expect(users.length).toEqual(10);
  expect(Object.keys(user)).toContain('id');
  expect(Object.keys(user)).toContain('name');
  expect(Object.keys(user)).toContain('lastName');
  expect(Object.keys(user)).toContain('phone');
});
