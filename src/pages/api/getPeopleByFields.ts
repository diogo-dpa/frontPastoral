import type { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@services/firebase/authentication';
import { Api } from '@services/api';
import { removeSpecialCharacters } from '@utility/methods';

type ResponseAttributes = {
  response?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseAttributes>
) {
  if (req.method === 'POST') {
    const { token } = req.cookies;
    const { authenticated } = await isAuthenticated(token);
    if (!authenticated) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    try {
      const { name, cpf, rg } = req.body;
      const { data } = await Api.post('/api/pessoas/buscarPessoasPorFiltros', {
        name: name?.toUpperCase(),
        cpf: removeSpecialCharacters(cpf),
        rg: removeSpecialCharacters(rg)
      });
      return res.status(200).json({ response: data });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(400).json({ message: 'Método não permitido' });
  }
}
