/*globals jest, require, expect, describe, it */

jest.autoMockOff();

const
    testedThing = require('./index');

describe('numeroSecuriteSociale', function () {
    'use strict';

    describe('# parse', function () {
        it('should parse correctly', function () {
            expect(testedThing.parse(186069305102313)).toEqual({
                gender: 'M',
                foreigner: false,
                yearBirth: '86',
                monthBirth: '06',
                departement: '93',
                town: '051',
                birthOrder: '023',
                key: '13'
            });

            expect(testedThing.parse(286129147102722)).toEqual({
                gender: 'F',
                foreigner: false,
                yearBirth: '86',
                monthBirth: '12',
                departement: '91',
                town: '471',
                birthOrder: '027',
                key: '22'
            });
        });
    });
});
