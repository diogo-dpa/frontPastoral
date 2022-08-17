import type { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@services/firebase/authentication';
import { Api } from '@services/api';
import { formatPersonData } from '@utility/person/utils';

type ResponseErrorAttributes = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseErrorAttributes>
) {
  if (req.method === 'POST') {
    const { token, token_strapi } = req.cookies;
    const { authenticated } = await isAuthenticated(token);
    if (!authenticated) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    const data = req.body;
    const formattedData = formatPersonData(data);
    try {
      await Api.post('/api/pessoas', { data: formattedData });
      return res.status(200).json({ message: 'Criado com sucesso.' });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(400).json({ message: 'Método não permitido' });
  }
}
