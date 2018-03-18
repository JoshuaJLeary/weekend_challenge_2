$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery loaded');
    clickHandlers();
}

function clickHandlers() {
    $('.urAnswer').on('click', additionBtn);
    $('.urAnswer').on('click', subtractBtn);
    $('.urAnswer').on('click', multiplyBtn);
    $('.urAnswer').on('click', divideBtn);
}

function additionBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Add"};
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/add'
    }).done(function(response){
        console.log('success!');
    })
}
function subtractBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Subtract"};
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/subtract'
    }).done(function(response){
        console.log('success!');
    })
}
function multiplyBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Multiply"};
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/multiply'
    }).done(function(response){
        console.log('success!');
    })
}
function divideBtn() {
    let firstValue = $('#input1').val();
    let secondValue = $('#input2').val();
    let objectInfo = {firstNumber: firstValue, secondNumber: secondValue, type: "Divide"}
    $.ajax({
        type: 'POST',
        data: objectInfo,
        url: '/divide'
    }).done(function(response){
        console.log('success!');
    })
}