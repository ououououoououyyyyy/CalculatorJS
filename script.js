mc.addEventListener("click", function () {
    memory = "";
})

mplus.addEventListener("click", function () {
    if (memory.length == 0) {
        memory = display.value;
    } else {
        equally.click();
        memory = (+display.value + +memory).toString();
    }
})

mminus.addEventListener("click", function () {
    if (memory.length == 0) {
        memory = display.value;
    } else {
        equally.click();
        memory = (+display.value - +memory).toString();
    }
})

mr.addEventListener("click", function () {
    display.value = memory;
})

powByTwo.addEventListener("click", function () {
    display.value = eval(display.value * display.value);
})

powByThree.addEventListener("click", function () {
    display.value = eval(display.value * display.value * display.value);
})

fac.addEventListener("click", function () {
    equally.click()
    display.value = factorial(display.value)
})

rand.addEventListener("click", function () {
    display.value = + Math.round(Math.random() * 100)
})

basic.addEventListener("click", function () {
    document.querySelector("#buttonsBasic").style.display = "flex";
    document.querySelector("#buttonsEngineer").style.display = "none";
    document.querySelector("#buttonsProg").style.display = "none";
    document.querySelector("#calculator").style.width = "400px";
})

engineer.addEventListener("click", function () {
    document.querySelector("#buttonsBasic").style.display = "flex";
    document.querySelector("#buttonsEngineer").style.display = "flex";
    document.querySelector("#buttonsProg").style.display = "none";
    document.querySelector("#calculator").style.width = "1000px";
})

prog.addEventListener("click", function () {
    document.querySelector("#buttonsBasic").style.display = "none";
    document.querySelector("#buttonsEngineer").style.display = "none";
    document.querySelector("#buttonsProg").style.display = "flex";
    document.querySelector("#calculator").style.width = "700px";
})


function factorial(n) {
    n = eval(n);
    let fac = 1;
    for (let i = n; i > 0; i--)
        fac *= i;
    return fac;
}