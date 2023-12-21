import { parse } from './index.js';

describe('numeroSecuriteSociale', () => {
  'use strict';

  describe('# parse', () => {
    it('186069305102313', () => {
      expect(parse(186069305102313)).toEqual({
        gender: 'M',
        foreigner: false,
        yearBirth: '86',
        monthBirth: '06',
        departement: '93',
        town: '051',
        birthOrder: '023',
        key: '13',
      });
    });

    it('286129147102722', () => {
      expect(parse(286129147102722)).toEqual({
        gender: 'F',
        foreigner: false,
        yearBirth: '86',
        monthBirth: '12',
        departement: '91',
        town: '471',
        birthOrder: '027',
        key: '22',
      });
    });

    it('269054958815780', () => {
      expect(parse(269054958815780)).toEqual({
        gender: 'F',
        foreigner: false,
        yearBirth: '69',
        monthBirth: '05',
        departement: '49',
        town: '588',
        birthOrder: '157',
        key: '80',
      });
    });

    it('369059758815780', () => {
      expect(parse(369059758815780)).toEqual({
        gender: 'M',
        foreigner: true,
        yearBirth: '69',
        monthBirth: '05',
        departement: '975',
        town: '88',
        birthOrder: '157',
        key: '80',
      });
    });

    it('494019717426301', () => {
      expect(parse('494019717426301')).toEqual({
        gender: 'F',
        foreigner: true,
        yearBirth: '94',
        monthBirth: '01',
        departement: '971',
        town: '74',
        birthOrder: '263',
        key: '01',
      });
    });
  });
});
