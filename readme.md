# numero-securitesociale

Parseur de numéro de sécurité sociale (ou numéro d'inscription au répertoire des personnes physiques)

## Setup

'npm i -S numero-securitesociale'

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

## License

MIT