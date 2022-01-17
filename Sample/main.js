var input1 = document.querySelector('#num1');
var input2 = document.querySelector('#num2');
var button = document.querySelector('#btn');
function add(v1, v2) {
    return v1 + v2;
}
button.addEventListener('click', function () {
    return console.log(add(+input1.value, +input2.value));
});
