function my_Function(){
    document.getElementById("Test").innerHTML = 0/0;
}
function my_FunctionCheckIsNan(){
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}
function my_FunctionCheckIsNan007(){
    document.getElementById("Test2").innerHTML = isNaN('007');
}
function not_Function(){
    document.getElementById("Not").innerHTML = (10!= 5);
}