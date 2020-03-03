let basicCalc = document.getElementById("calculator");

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

engineer.addEventListener("click",function () {
    document.querySelector(".buttonsEngineer").style.display= "flex";
    document.querySelector("#display").style.width = "998px";
    document.querySelector(".buttonsProg").style.display = "none";
    document.querySelector(".buttonsBasic").style.display = "flex"
})

basic.addEventListener("click",function(){
    document.querySelector(".buttonsEngineer").style.display = "none";
    document.querySelector("#display").style.width = "398px";
    document.querySelector(".buttonsProg").style.display = "none";
    document.querySelector(".buttonsBasic").style.display = "flex"
})

prog.addEventListener("click",function(){
    document.querySelector("#display").style.width = "698px";
    document.querySelector(".buttonsProg").style.display = "flex";
    document.querySelector(".buttonsBasic").style.display = "none";
    document.querySelector(".buttonsEngineer").style.display = "none";
})


document.addEventListener("DOMContentLoaded",function(){
    engineer.click();
})