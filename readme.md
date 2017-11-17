# numero-securitesociale

Tool for social security number in France.

## Setup

`npm i -S numero-securitesociale`

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
- borthOrder : string, the order of born in the month, in the department and in the town
- key : string, a sort of checksum for all 

## License

MIT
