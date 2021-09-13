const height = prompt("ENTER YOUR HEIGHT (ft/in)");
const weight = prompt("ENTER YOUR WEIGHT (kg)");

document.querySelector(".height").innerHTML= height+" ft/cm";
document.querySelector(".weight").innerHTML = weight+" Kg";

const btn = document.querySelector(".button");

btn.addEventListener("click",function(){
    let result = 0;
    const height_m = height/3.281;
    result = Math.round(weight/(height_m*height_m));
    var category;
    if(result<18.5){
        category="UNDERWEIGHT";
    }
    else if(result>=18.5 && result<=24.9){
        category="NORMAL";
    }
    else if(result>=25 && result<=29.9)
    {
        category="OVERWEIGHT";
    }
    else if(result>=30 && result <=34.9){
        category="OBESE";
    }
    else{
        category="EXTREMELY OBESE";
    }
    document.querySelector(".result_text").innerHTML = "YOUR BMI VALUE IS: "+result+"<br>" + "YOU ARE "+category.fontcolor("RED");
})