let express = require('express');
let app = express();
const PORT = 4002;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(PORT, function () {
    console.log('listening on port', PORT);
});

app.post('/add', (req, res) => {
    let objectInfo = req.body;
    let valueX = parseInt(objectInfo.firstNumber);
    let valueY = parseInt(objectInfo.secondNumber);
    let mathOperator = objectInfo.type;
    let sumOf = valueX + valueY;
    console.log(valueX, valueY, mathOperator, sumOf);
    console.log('is anything working?');

    res.sendStatus(200);
})

app.post('/subtract', (req, res) => {
    let objectInfo = req.body;
    let valueX = parseInt(objectInfo.firstNumber);
    let valueY = parseInt(objectInfo.secondNumber);
    let mathOperator = objectInfo.type;

    res.sendStatus(200);
})
app.post('/multiply', (req, res) => {
    let objectInfo = req.body;
    let valueX = parseInt(objectInfo.firstNumber);
    let valueY = parseInt(objectInfo.secondNumber);
    let mathOperator = objectInfo.type;

    res.sendStatus(200);
})
app.post('/divide', (req, res) => {
    let objectInfo = req.body;
    let valueX = parseInt(objectInfo.firstNumber);
    let valueY = parseInt(objectInfo.secondNumber);
    let mathOperator = objectInfo.type;


    res.sendStatus(200);
})