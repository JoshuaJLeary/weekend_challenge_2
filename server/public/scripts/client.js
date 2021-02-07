$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery loaded');
    clickHandlers();
}

function clickHandlers() {
    $('#addtionBtn').on('click', additionBtn);
    $('#subtractBtn').on('click', subtractBtn);
    $('#multiplyBtn').on('click', multiplyBtn);
    $('#divideBtn').on('click', divideBtn);
    $('#clearBtn').on('click', newExperience);
}

function additionBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Add"};
    console.log('button clicked!');
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/calculator'
    }).done(function(response){
        console.log('success!');
        getCalcLogic();
    })
}
function subtractBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Subtract"};
    console.log('button clicked!');
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/calculator'
    }).done(function(response){
        console.log('success!');
        getCalcLogic();
    })
}
function multiplyBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Multiply"};
    console.log('button clicked!');
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/calculator'
    }).done(function(response){
        console.log('success!');
        getCalcLogic();
    })
}
function divideBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Divide"}
    console.log('button clicked!');
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/calculator'
    }).done(function(response){
        console.log('success!');
        getCalcLogic();
    })

}

function getCalcLogic() {
    $.ajax({
        type: 'GET',
        url: '/calculator'
    }).done(function(response){
        appendtoDom(response);
        console.log('is this working???');
    })
    newExperience();
}

function appendtoDom(calculationArr) {
        console.log('hi');

        let newestEntry = calculationArr.length - 1
        let tr = $('<tr></tr>')
        tr.append('<td>' + calculationArr[newestEntry] + '</td>');
        $('#equationHistory').append(tr);
    console.log(calculationArr);
}
function newExperience() {
    console.log('clearBtn Clicked');
    $('#calulatorForm')[0].reset();
}