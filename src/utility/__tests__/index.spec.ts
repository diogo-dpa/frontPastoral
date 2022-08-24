import * as methods from '../methods';
import * as mocks from '../__mocks__/index';

describe('Methods Tests', () => {
  describe('validateDateBetweenMinorMajorAges', () => {
    const passExample = '13/01/1995';
    const rejectExamples = [
      '13/01/2005',
      '13/01/1921',
      'AA/CC/DDDD',
      '13-01-2001'
    ];
    test('Pass', () => {
      expect(
        methods.validateDateBetweenMinorMajorAges(passExample)
      ).toBeTruthy();
    });
    test('Fail - Null value', () => {
      expect(methods.validateDateBetweenMinorMajorAges(null)).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.validateDateBetweenMinorMajorAges(rejectExamples[0])
      ).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.validateDateBetweenMinorMajorAges(rejectExamples[1])
      ).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.validateDateBetweenMinorMajorAges(rejectExamples[2])
      ).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.validateDateBetweenMinorMajorAges(rejectExamples[3])
      ).toBeFalsy();
    });
  });

  describe('isValidDate', () => {
    const passExample = '13/01/1995';
    const rejectExamples = [
      '13/13/2005',
      '32/01/1921',
      'AA/CC/DDDD',
      '31/01/191'
    ];
    test('Pass', () => {
      expect(methods.isValidDate(passExample)).toBeTruthy();
    });
    test('Fail - Null value', () => {
      expect(methods.isValidDate(null)).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.isValidDate(rejectExamples[0])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.isValidDate(rejectExamples[1])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.isValidDate(rejectExamples[2])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.isValidDate(rejectExamples[3])).toBeFalsy();
    });
  });

  describe('validateCPF', () => {
    const passExample = '085.108.726-43';
    const rejectExamples = ['085.108.726-00', '5', 'batata', '00011122233'];
    test('Pass', () => {
      expect(methods.validateCPF(passExample)).toBeTruthy();
    });
    test('Fail - Null value', () => {
      expect(methods.validateCPF(null)).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.validateCPF(rejectExamples[0])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.validateCPF(rejectExamples[1])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.validateCPF(rejectExamples[2])).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(methods.validateCPF(rejectExamples[3])).toBeFalsy();
    });
  });

  describe('convertStringBRLToDateFormat', () => {
    const passExample = '23/08/2000';
    const rejectExamples = ['23/13/2022', '40/08/2000', 'batata'];
    test('Pass', () => {
      expect(methods.convertStringBRLToDateFormat(passExample)).toEqual(
        mocks.mocksOutConvertStringBRLToDateFormat[0]
      );
    });
    test('Fail - Null value', () => {
      expect(methods.convertStringBRLToDateFormat(null)).toBeNull();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.convertStringBRLToDateFormat(rejectExamples[0])
      ).toBeNull();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.convertStringBRLToDateFormat(rejectExamples[1])
      ).toBeFalsy();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.convertStringBRLToDateFormat(rejectExamples[2])
      ).toBeFalsy();
    });
  });

  describe('formatDateToPTBRDayMonthYear', () => {
    const passExample = new Date();
    const rejectExamples = ['batata'];
    test('Pass', () => {
      expect(
        methods.formatDateToPTBRDayMonthYear(passExample.toString())
      ).toEqual(mocks.mocksOutFormatDateToPTBRDayMonthYear[0]);
    });
    test('Fail - Null value', () => {
      expect(methods.formatDateToPTBRDayMonthYear(null)).toBeNull();
    });
    test('Fail - Existing value', () => {
      expect(
        methods.formatDateToPTBRDayMonthYear(rejectExamples[0])
      ).toBeNull();
    });
  });

  describe('formatDateToPTBR', () => {
    const passExample = new Date(2022, 7, 23, 13, 30);
    const rejectExamples = ['batata'];
    test('Pass', () => {
      expect(methods.formatDateToPTBR(passExample.toString())).toEqual(
        mocks.mocksOutFormatDateToPTBR[0]
      );
    });
    test('Fail - Null value', () => {
      expect(methods.formatDateToPTBR(null)).toBeNull();
    });
    test('Fail - Existing value', () => {
      expect(methods.formatDateToPTBR(rejectExamples[0])).toBeNull();
    });
  });

  describe('removeSpecialCharacters', () => {
    const passExample = ['111.222.333-88', 'água'];
    test('Pass', () => {
      expect(methods.removeSpecialCharacters(passExample[0])).toEqual(
        mocks.mocksOutRemoveSpecialCharacters[0]
      );
    });
    test('Pass', () => {
      expect(methods.removeSpecialCharacters(passExample[1])).toEqual(
        mocks.mocksOutRemoveSpecialCharacters[1]
      );
    });
    test('Fail - Undefined value', () => {
      expect(methods.removeSpecialCharacters(undefined)).toEqual('');
    });
    test('Fail - Null value', () => {
      expect(methods.removeSpecialCharacters(null)).toEqual('');
    });
  });
});
