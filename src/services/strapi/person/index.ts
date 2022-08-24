import { LocalApi } from '@services/api';
import {
  formatDateToPTBR,
  formatDateToPTBRDayMonthYear
} from '@utility/methods';
import { PersonData } from '@utility/people/interfaces';

export const getPeople = async () => {
  try {
    const { data } = await LocalApi.get('/getPeople');
    const standardData: PersonData[] = data.response.data.map(
      x => x.attributes
    );
    return standardData.map(x => ({
      ...x,
      birthDate: formatDateToPTBRDayMonthYear(x.birthDate?.toString() ?? null),
      createdAt: formatDateToPTBR(x.createdAt?.toString() ?? null)
    }));
  } catch (err) {
    console.warn(err.message);
    return [];
  }
};

export const getPeopleByFields = async (
  name: string,
  cpf: string,
  rg: string
) => {
  try {
    const { data } = await LocalApi.post('/getPeopleByFields', {
      name,
      cpf,
      rg
    });
    const standardData: PersonData[] = data.response.data.map(
      x => x.attributes
    );
    return standardData.map(x => ({
      ...x,
      birthDate: formatDateToPTBRDayMonthYear(x.birthDate?.toString() ?? null),
      createdAt: formatDateToPTBR(x.createdAt?.toString() ?? null)
    }));
  } catch (err) {
    console.warn(err.message);
    return [];
  }
};
