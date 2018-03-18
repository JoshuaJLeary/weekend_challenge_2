let express = require('express');
let app = express();
const PORT = 4002;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(PORT, function () {
    console.log('listening on port', PORT);
});

app.post()