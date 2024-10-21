function addition_Function(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = "+ addition;
}
function substraction_Function(){
    var substraction = 5-2;
    document.getElementById("Math2").innerHTML = "5 - 2 = "+ substraction;
}
function multiplication_Function(){
    var multiplication = 6*8;
    document.getElementById("Math3").innerHTML = "6 * 8 = "+ multiplication;
}
function division_Function(){
    var division = 48/6;
    document.getElementById("Math4").innerHTML = "48 / 6 = "+ division;
}
function more_Math(){
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math5").innerHTML = "1+2, multiplied by 10, divided in half and then substract by 5 = "+ simple_Math;
}
function modulus_Operator(){
    var modulus = 25%6;
    document.getElementById("Math6").innerHTML = "25 % 6 = "+ modulus;
}
function negation_Operator(){
    var num = 10;
    document.getElementById("Math7").innerHTML = "negation of 10 = "+ -num;
}
function increment_Operator(){
    var num = 10;
    num++;
    document.getElementById("Math8").innerHTML = "increment of 10 = "+ num;
}
function decrement_Operator(){
    var num = 10;
    num--;
    document.getElementById("Math9").innerHTML = "decrement of 10 = "+ num;
}
function get_RandomNumberBetween0and1(){
    window.alert(Math.random());
    document.getElementById("Math10").innerHTML = "A random number between 0 and 1 = ";
}
function get_RandomNumberBetween0and100(){
    window.alert(Math.random() * 100);
    document.getElementById("Math11").innerHTML = "A random number between 0 and 100 = ";
}