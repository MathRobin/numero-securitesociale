/*globals jest, require, expect, describe, it */

jest.autoMockOff();

const
    testedThing = require('../index.mjs');

describe('securitesociale', function () {
    'use strict';

    it('to be described correctly', function () {
        expect(typeof testedThing.parse).toBe('function');
    });

    describe('parse', function () {
        it('should parse from string', function () {
            expect(testedThing.parse('269054958815780')).toEqual({
                birthOrder: '157',
                departement: '49',
                foreigner: false,
                gender: 'F',
                key: '80',
                monthBirth: '05',
                town: '588',
                yearBirth: '69'
            });
            expect(testedThing.parse('186069305102313')).toEqual({
                birthOrder: '023',
                departement: '93',
                foreigner: false,
                gender: 'M',
                key: '13',
                monthBirth: '06',
                town: '051',
                yearBirth: '86'
            });
        });

        it('should throw for stupid param', function () {
            expect(() => {
                testedThing.parse();
            }).toThrow();
            expect(() => {
                testedThing.parse(null);
            }).toThrow();
            expect(() => {
                testedThing.parse('');
            }).toThrow();
            expect(() => {
                testedThing.parse('abcd');
            }).toThrow();
        });
    });
});
