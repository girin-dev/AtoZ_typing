var inputfirst = document.getElementById('first')
var inputsecond = document.getElementById('second')
var inputthird = document.getElementById('third')
var inputfourth = document.getElementById('fourth')
var inputfifth = document.getElementById('fifth')

inputfirst.addEventListener('keyup', function (e) {
    if (e.keyCode == 90) {
        inputsecond.focus();
}})

inputsecond.addEventListener('keyup', function (e) {
    if (e.keyCode == 90) {
        inputthird.focus();
}})
inputthird.addEventListener('keyup', function (e) {
    if (e.keyCode == 90) {
        inputfourth.focus();
}}) 
inputfourth.addEventListener('keyup', function (e) {
    if (e.keyCode == 90) {
        inputfifth.focus();
}}) 
// inputfifth.addEventListener('keyup', function (e) {
//     if (e.keyCode == 90) {
//         inputsecond.focus();
// }) 
