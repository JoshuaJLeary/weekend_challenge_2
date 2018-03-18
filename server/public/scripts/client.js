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
}

function appendtoDom(calculationArr) {
    for(i = 0; i < calculationArr.length; i++){
        console.log('hi');
        // $('#equationHistory').empty(); 
        // $('#equationHistory').append('<tr><td>' + calculationArr[i] + '</td></tr>');
        let tr = $('<tr></tr>')
        tr.append('<td>' + calculationArr[i] + '</td>');
        $('#equationHistory').append(tr);

        // // div.append(calculationArr[calculation]);
        // tr.append('<td>' + calculation.firstNumber)
        // $('#eqationHistory').append(calculationArr);
    }
    console.log(calculationArr);
}
function newExperience() {
    console.log('clearBtn Clicked');
    let clearedField1 = $('#input1').val();
    let clearedField2 = $('#input2').val();
    $('clearedField1').empty();
    $('clearedField2').empty();
       
}