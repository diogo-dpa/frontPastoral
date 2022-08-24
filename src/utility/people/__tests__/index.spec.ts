import { formatPersonData } from '../utils';
import { mockedInPersonData, mockedOutPersonData } from '../__mocks__';

describe('PersonUtils Tests', () => {
  test('formatPersonData', () => {
    expect(formatPersonData(mockedInPersonData)).toEqual(mockedOutPersonData);
  });
});
