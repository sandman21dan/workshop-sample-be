import { random, name, phone } from 'faker';

export interface User {
  id: string;
  name: string;
  lastName: string;
  phone: string;
}

export function generateUsers(number: number): User[] {
  const users = [];

  for (let i = 0; i < number; i++) {
    users.push(generateUser());
  }

  return users;
}

function generateUser(): User {
  return {
    id: random.uuid(),
    name: name.firstName(),
    lastName: name.lastName(),
    phone: phone.phoneNumber(),
  };
}
