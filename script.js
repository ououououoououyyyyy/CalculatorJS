let memory = "";

const layout = [
    [
        {
            type: 'func',
            title: 'AC',
            handler: '',
        },
        {
            type: 'func',
            title: '+/-',
            handler: '',
        },
        {
            type: 'func',
            title: '%',
            handler: '',
        },
        {
            type: 'operator',
            title: '/',
            handler: '',
        }
    ],
    [
        {
            type: 'num',
            title: '7',
            handler: '',
        },
        {
            type: 'num',
            title: '8',
            handler: '',
        },
        {
            type: 'num',
            title: '9',
            handler: '',
        },
        {
            type: 'operator',
            title: '*',
            handler: '',
        }

    ],
    [
        {
            type: 'num',
            title: '4',
            handler: '',
        },
        {
            type: 'num',
            title: '5',
            handler: '',
        },
        {
            type: 'num',
            title: '6',
            handler: '',
        },
        {
            type: 'operator',
            title: '-',
            handler: '',
        }
    ],
    [
        {
            type: 'num',
            title: '1',
            handler: '',
        },
        {
            type: 'num',
            title: '2',
            handler: '',
        },
        {
            type: 'num',
            title: '3',
            handler: '',
        },
        {
            type: 'operator',
            title: '+',
            handler: '',
        }
    ],
    [
        {
            type: 'num',
            title: '0',
            handler: '',
        },
        {
            type: 'num',
            title: '.',
            handler: '',
        },
        {
            type: 'operator',
            title: '=',
            handler: '',
        }
    ]
]








[...document.getElementsByClassName("buttNum")]
    .forEach(x => {
    x.addEventListener("click", function () {
        display.value = display.value + x.value;
    })
})

equally.addEventListener("click", function () {
    display.value = eval(display.value)
});

AC.addEventListener("click", function () {
    display.value = "";
})

plusminus.addEventListener("click", function () {
    if (display.value === "") {
        display.value = "-"
    }
})

percent.addEventListener("click", function () {
    equally.click();
    display.value = display.value / 100;
})

point.addEventListener("click", function () {
    if (display.value.length == 0) {
        display.value = "0";
    }
    display.value = display.value + "."
})

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