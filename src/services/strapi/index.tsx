import { Api } from '@services/api';

export const postUserAuth = async (email: string, password: string) => {
  const userData = await Api.post('/api/auth/local', {
    identifier: email,
    password: password
  });

  return userData;
};

export const getUserDataMe = async (token: string) => {
  const userDataReponse = await Api.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const { username, custom_role } = userDataReponse.data;

  return { username, custom_role };
};
