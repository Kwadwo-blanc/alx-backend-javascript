import { uploadPhoto, createUser } from '../utils';

test('uploadPhoto returns the correct response', () => {
  expect(uploadPhoto()).toEqual({
    status: 200,
    body: 'photo-profile-1',
  });
});

test('createUser returns the correct response', () => {
  expect(createUser()).toEqual({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
});
