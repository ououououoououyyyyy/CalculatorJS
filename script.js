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
    document.createElement("input")
})