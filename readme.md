# numero-securitesociale

Parseur de numéro de sécurité sociale (ou numéro d'inscription au répertoire des personnes physiques)

## Setup

'npm i -S numero-securitesociale'

## Usage

### Include package

`
var NIR = require('numero-securitesociale');
`

### Search by code Insee (unique ID)

`
NIR.parse(269054958815780);
// { sex : 'F', yearBirth : 69, monthBirth : 05 }
`

## License

MIT