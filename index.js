/*globals module, require */

var util = require('util');

function sex(data) {
    var result;

    switch (data) {
    case '1' :
    case '3' :
        result = 'M';
        break;
    case '2' :
    case '4' :
        result = 'F';
        break;
    }

    return result;
}

function isForeigner(data) {
    var result;

    switch (data) {
    case '1' :
    case '2' :
        result = false;
        break;
    case '3' :
    case '4' :
        result = true;
        break;
    }

    return result;
}

function department(data) {
    var departmentTmp = data.splice(0, 2).join(''),
        result = departmentTmp;

    if ('97' === departmentTmp) {
        result = [departmentTmp, data.splice(0, 1)].join('');
    }

    return result;
}

function town(data) {
    return data.splice(0, data.length).join('');
}

module.exports = {
    parse: function (NIR) {
        var exploitedNir = NIR,
            parts,
            result = {};

        if (!util.isArray(NIR)) {
            exploitedNir = NIR.toString().split('');
        }

        parts = {
            sex: exploitedNir.splice(0, 1)[0],
            yearBirth: exploitedNir.splice(0, 2).join(''),
            monthBirth: exploitedNir.splice(0, 2).join(''),
            placeBirth: exploitedNir.splice(0, 5)
        };

        result = {
            sex: sex(parts.sex),
            foreigner: isForeigner(parts.sex),
            yearBirth: parts.yearBirth,
            monthBirth: parts.monthBirth,
            departement: department(parts.placeBirth),
            town: town(parts.placeBirth)
        };

        return result;
    }
};