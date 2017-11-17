class NirParser {
    gender(data) {
        return {
            '1': 'M',
            '2': 'F',
            '3': 'M',
            '4': 'F'
        }[data];
    }

    isForeigner(data) {
        return {
            '1': false,
            '2': false,
            '3': true,
            '4': true
        }[data];
    }

    department(data) {
        const
            departmentTmp = data.splice(0, 2).join('');
        let
            result = departmentTmp;

        if ('97' === departmentTmp) {
            result = [departmentTmp, data.splice(0, 1)].join('');
        }

        return result;
    }

    town(data) {
        return data.splice(0, data.length).join('');
    }
}

export function parse(nirNumber) {
    const
        nirParser = new NirParser();

    let exploitedNir = nirNumber,
        parts = {};

    if (!Array.isArray(nirNumber)) {
        exploitedNir = nirNumber.toString().split('');
    }

    parts = {
        gender: exploitedNir.splice(0, 1)[0],
        yearBirth: exploitedNir.splice(0, 2).join(''),
        monthBirth: exploitedNir.splice(0, 2).join(''),
        placeBirth: exploitedNir.splice(0, 5),
        birthOrder: exploitedNir.splice(0, 3).join(''),
        key: exploitedNir.splice(0, 2).join('')
    };

    return {
        gender: nirParser.gender(parts.gender),
        foreigner: nirParser.isForeigner(parts.gender),
        yearBirth: parts.yearBirth,
        monthBirth: parts.monthBirth,
        departement: nirParser.department(parts.placeBirth),
        town: nirParser.town(parts.placeBirth),
        birthOrder: parts.birthOrder,
        key: parts.key
    };
}
