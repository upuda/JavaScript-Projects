function Ride_Funtion(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough to ride";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}
function Vote_Funtion(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML= Can_vote;
}
function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var starting_Point = 9;
        function Plus_One(){
            starting_Point += 1;
        }
        Plus_One();
        return starting_Point;
    }
}
function vehicle(Make, Model, Year, Color){
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erick = new vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function(){
    document.getElementById("Keywords_And_Constructors").innerHTML = "Erick drives a "+Erick.vehicle_Color+ 
        " colored "+Erick.vehicle_Model + " manufactured in "+Erick.vehicle_Year;
}