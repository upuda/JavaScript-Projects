//setting a global variable
var num = 10;
function add_Numbers1(){
    document.write(num+10+"<br>");
}
add_Numbers1();

//a function with a local variable
function add_Numbers2(){
    var num = 15;
    document.write(num+10+"<br>");
}
add_Numbers2();

//usage of console.log() method to help us debug the code
function add_Numbers3(){
    var num2= 20;
    console.log(15+num2);
}
function add_Numbers4(){
    console.log(num2+100);
}
add_Numbers3();
add_Numbers4();

if(num < 11){
    document.write("The number is less than 11");
}
function get_Date(){
    if(new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
function check_Elgibility(){
    Age = document.getElementById("Age").value;
    if(Age >= 60){
        Status = "You are elgible for the senior citizen discount";
    } else{
        Status = "You are not eligible for a senior citizen discount.";
    }
    document.getElementById("Status_Message").innerHTML = Status;
}
function Time_Function(){
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 ==Time > 0){
        Reply= "It is morning time!";
    } else if (Time >=12 == Time <18){
        Reply="It is afternoon.";
    } else{
        Reply="It is Evening time.";
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;
}