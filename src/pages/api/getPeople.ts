import type { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@services/firebase/authentication';
import { Api } from '@services/api';

type ResponseAttributes = {
  response?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseAttributes>
) {
  if (req.method === 'GET') {
    const { token } = req.cookies;
    const { authenticated } = await isAuthenticated(token);
    if (!authenticated) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    try {
      const { data } = await Api.get('/api/pessoas');
      return res.status(200).json({ response: data });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(400).json({ message: 'Método não permitido' });
  }
}
