let memory = "";

[...document.getElementsByClassName("buttNum")]
    .forEach(x => {
    x.addEventListener("click", function () {
        display.value = display.value + x.value;
    })
})

equally.addEventListener("click",function () {
    display.value=eval(display.value)
});

AC.addEventListener("click",function(){
    display.value = "";
})

plusminus.addEventListener("click",function(){
    if(display.value === ""){
        display.value = "-"
    }
})

percent.addEventListener("click",function () {
    equally.click();
    display.value = display.value/100;
})

point.addEventListener("click",function () {
    if(display.value.length == 0){
        display.value = "0";
    }
    display.value = display.value + "."
})

mc.addEventListener("click",function(){
    memory = "";
})

mplus.addEventListener("click",function(){
    if(memory.length == 0){
        memory = display.value;
    } else {
        equally.click();
        memory = (+display.value + +memory).toString();
    }
})

mminus.addEventListener("click",function(){
    if(memory.length == 0){
        memory = display.value;
    } else {
        equally.click();
        memory = (+display.value - +memory).toString();
    }
})

mr.addEventListener("click",function(){
    display.value = memory;
})

basic.addEventListener("click",function(){
    document.querySelector("#buttonsBasic").style.display = "flex";
    document.querySelector("#buttonsEngineer").style.display = "none";
    document.querySelector("#buttonsProg").style.display = "none";
    document.querySelector("#calculator").style.width = "400px";
})

engineer.addEventListener("click",function () {
    document.querySelector("#buttonsBasic").style.display = "flex";
    document.querySelector("#buttonsEngineer").style.display= "flex";
    document.querySelector("#buttonsProg").style.display = "none";
    document.querySelector("#calculator").style.width = "1000px";
})

prog.addEventListener("click",function(){
    document.querySelector("#buttonsBasic").style.display = "none";
    document.querySelector("#buttonsEngineer").style.display = "none";
    document.querySelector("#buttonsProg").style.display = "flex";
    document.querySelector("#calculator").style.width = "700px";
})

document.addEventListener("DOMContentLoaded", function(){
    engineer.click();
})