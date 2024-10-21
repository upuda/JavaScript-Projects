function my_Dictionary(){
    var Fruits = {
        Name : "Mango",
        Color : "Yellow",
        Taste : "Sweet",
        Weight : "200 gms",
        PricePerLb : 5
    };
    delete Fruits.PricePerLb;
    document.getElementById("Dictionary").innerHTML =  Fruits.PricePerLb;
}