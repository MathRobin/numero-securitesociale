# numero-securitesociale
[![NpmLicense](https://img.shields.io/npm/l/numero-securitesociale.svg?style=popout)](https://github.com/MathRobin/numero-securitesociale/blob/master/LICENSE) [![Build Status](https://travis-ci.org/MathRobin/numero-securitesociale.svg)](https://travis-ci.org/MathRobin/numero-securitesociale)

![](https://github.com/MathRobin/numero-securitesociale/workflows/tests/badge.svg)

Parseur de numéro de sécurité sociale (ou numéro d'inscription au répertoire des personnes physiques)

## Setup

`npm i -SE numero-securitesociale`

## Usage

### Include package

`
var NIR = require('numero-securitesociale');
`

### Parse

`
NIR.parse(269054958815780);
// { gender: 'F', foreigner: false, yearBirth: '69', monthBirth: '05', departement: '49', town: '588', birthOrder: '157', key: '80' }
`

#### Description :

- gender : string, "F" or "M", for female or male
- foreigner : boolean, is the person a foreigner
- yearBirth : string, the year of birth, don't care about the century
- monthBirth : string, the month of birth
- department : string, the department where the person is borned. If it's 99, it borns abroad
- town : string, the code of the town where the person is borned. If it's born abroad, the code of the country
- birthOrder : string, the order of born in the month, in the department and in the town
- key : string, a sort of checksum for all 

## License

MIT
