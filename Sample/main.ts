var input1 = document.querySelector('#num1') as HTMLInputElement;
var input2 = document.querySelector('#num2') as HTMLInputElement;
var button = document.querySelector('#btn');

function add(v1: number, v2: number){
    return v1 + v2;
}
button.addEventListener('click',()=>{
    return console.log(add(+input1.value,+input2.value))
})