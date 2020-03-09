let newResult = false;
let memory = '';

function createCalculator(modelCalc) {
    let calculator = createBodyCalculator(modelCalc);
    modelCalc.layout.forEach(column => {
        column.forEach(row => {
            const tempButt = document.createElement('input');
            tempButt.setAttribute('type', 'button');
            tempButt.setAttribute('class', row.type);
            tempButt.setAttribute('value', row.title);
            tempButt.addEventListener('click', row.handler);
            calculator.appendChild(tempButt);
        })
    });
    calculator = setSettings(modelCalc.settings,calculator);
    return calculator;
}

function createBodyCalculator(modelCalc) {
    const boduCalculator = document.createElement('div')
    boduCalculator.setAttribute('id', 'calculator')
    boduCalculator.appendChild(createDisplay());
    // TODO
    //boduCalculator.style.maxWidth = modelCalc.width+'px';
    boduCalculator.style.width = modelCalc.width+'px';
    boduCalculator.style.height = modelCalc.height+'px';

    return boduCalculator;
}

function createDisplay() {
    const display = document.createElement('input');
    display.setAttribute('id', 'display');
    display.readOnly = true;
    display.value = '0';
    return display;
}

function setSettings(setting, calculator){
    setting.forEach(x => {
        //styleSetting = '1 0 ' + x[1] + 'px'
        calculator.querySelector('[value=\''+x[0]+'\']').style.flex = x[1];
    })
    return calculator;
}

function selectCalc(e) {
    if (document.querySelector('#calculator') != null) {
        document.querySelector('#calculator').remove();
    }
    if (e.target.id === 'basic') {
    document.querySelector('body').appendChild(createCalculator(basicCalculator));
    } else if (e.target.id === 'engineer') {
        document.querySelector('body').appendChild(createCalculator(engineerCalculator));
    } else {
        document.querySelector('body').appendChild(createCalculator(layoutProg));
    }
}

selectType.addEventListener('click', selectCalc);

//render(layoutBasic);

function input() {
    if (newResult && this.className.lastIndexOf('operator') == -1) {
        display.value = '0'
        newResult = false;
    } else {
        newResult = false;
    }
    if(display.value == '0'){
        display.value = '';
    }
    display.value += this.value;
}

function AC() {
    display.value = '0';
}

function plusminus() {
    if (display.value === "") {
        display.value = "-"
    }
}

function equally() {
    try {
        // TODO
        display.value = eval(display.value);
    } catch (error) {
        console.log("Input wrong equation");
    } finally {
        newResult = true;
    }
}

function percent() {
    equally()
    display.value = display.value / 100;
}

function mc() {
    memory = "";
}

function mplus() {
    if (memory.length == 0) {
        memory = display.value;
    } else {
        equally();
        memory = (+display.value + +memory).toString();
    }
}

function mminus () {
    if (memory.length == 0) {
        memory = display.value;
    } else {
        equally();
        memory = (+display.value - +memory).toString();
    }
}

function mr() {
    display.value = memory;
}

function empty(){

}

const layoutBasic = [
    [
        {
            type: 'func',
            title: 'AC',
            handler: AC,
        },
        {
            type: 'func',
            title: '+/-',
            handler: plusminus,
        },
        {
            type: 'func',
            title: '%',
            handler: percent,
        },
        {
            type: 'operator',
            title: '/',
            handler: input,
        }
    ],
    [
        {
            type: 'num',
            title: '7',
            handler: input,
        },
        {
            type: 'num',
            title: '8',
            handler: input,
        },
        {
            type: 'num',
            title: '9',
            handler: input,
        },
        {
            type: 'operator',
            title: '*',
            handler: input,
        }

    ],
    [
        {
            type: 'num',
            title: '4',
            handler: input,
        },
        {
            type: 'num',
            title: '5',
            handler: input,
        },
        {
            type: 'num',
            title: '6',
            handler: input,
        },
        {
            type: 'operator',
            title: '-',
            handler: input,
        }
    ],
    [
        {
            type: 'num',
            title: '1',
            handler: input,
        },
        {
            type: 'num',
            title: '2',
            handler: input,
        },
        {
            type: 'num',
            title: '3',
            handler: input,
        },
        {
            type: 'operator',
            title: '+',
            handler: input,
        }
    ],
    [
        {
            type: 'num',
            title: '0',
            handler: input,
        },
        {
            type: 'num',
            title: '.',
            handler: input,
        },
        {
            type: 'operator',
            title: '=',
            handler: equally,
        },
    ],
]

const layoutEng = [
    [
        {
            type: 'func',
            title: '(',
            handler: input,
        },
        {
            type: 'func',
            title: ')',
            handler: input,
        },
        {
            type: 'func',
            title: 'mc',
            handler: mc,
        },
        {
            type: 'func',
            title: 'm+',
            handler: mplus,
        },
        {
            type: 'func',
            title: 'm-',
            handler: mminus,
        },
        {
            type: 'func',
            title: 'mr',
            handler: mr ,
        },
        {
            type: 'func',
            title: 'AC',
            handler: AC,
        },
        {
            type: 'func',
            title: '+/-',
            handler: plusminus,
        },
        {
            type: 'func',
            title: '%',
            handler: percent,
        },
        {
            type: 'operator',
            title: '/',
            handler: input,
        }
    ],
    [
        {
            type: 'func',
            title: '2an',
            handler: empty,
        },
        {
            type: 'func',
            title: 'x^2',
            handler: empty,
        },
        {
            type: 'func',
            title: 'x^3',
            handler: empty,
        },
        {
            type: 'func',
            title: '^',
            handler: empty,
        },
        {
            type: 'func',
            title: 'e^x',
            handler: empty,
        },
        {
            type: 'func',
            title: '10^X',
            handler: empty,
        },
        {
            type: 'num',
            title: '7',
            handler: input,
        },
        {
            type: 'num',
            title: '8',
            handler: input,
        },
        {
            type: 'num',
            title: '9',
            handler: input,
        },
        {
            type: 'operator',
            title: '*',
            handler: input,
        }

    ],
    [
        {
            type: 'func',
            title: '1/x',
            handler: empty,
        },
        {
            type: 'func',
            title: 'sqrt',
            handler: empty,
        },
        {
            type: 'func',
            title: '3sqrt',
            handler: empty,
        },
        {
            type: 'func',
            title: 'ysqrt',
            handler: empty,
        },
        {
            type: 'func',
            title: 'ln',
            handler: empty,
        },
        {
            type: 'func',
            title: 'log',
            handler: empty,
        },
        {
            type: 'num',
            title: '4',
            handler: input,
        },
        {
            type: 'num',
            title: '5',
            handler: input,
        },
        {
            type: 'num',
            title: '6',
            handler: input,
        },
        {
            type: 'operator',
            title: '-',
            handler: input,
        }
    ],
    [
        {
            type: 'func',
            title: 'x!',
            handler: empty,
        },
        {
            type: 'func',
            title: 'sin',
            handler: empty,
        },
        {
            type: 'func',
            title: 'cos',
            handler: empty,
        },
        {
            type: 'func',
            title: 'tan',
            handler: empty,
        },
        {
            type: 'func',
            title: 'e',
            handler: empty,
        },
        {
            type: 'func',
            title: 'EE',
            handler: empty,
        },
        {
            type: 'num',
            title: '1',
            handler: input,
        },
        {
            type: 'num',
            title: '2',
            handler: input,
        },
        {
            type: 'num',
            title: '3',
            handler: input,
        },
        {
            type: 'operator',
            title: '+',
            handler: input,
        }
    ],
    [
        {
            type: 'func',
            title: 'Rad',
            handler: empty,
        },
        {
            type: 'func',
            title: 'sinh',
            handler: empty,
        },
        {
            type: 'func',
            title: 'cosh',
            handler: empty,
        },
        {
            type: 'func',
            title: 'tanh',
            handler: empty,
        },
        {
            type: 'func',
            title: 'pi',
            handler: empty,
        },
        {
            type: 'func',
            title: 'Rand',
            handler: empty,
        },
        {
            type: 'num x2',
            title: '0',
            handler: input,
        },
        {
            type: 'num',
            title: '.',
            handler: input,
        },
        {
            type: 'operator',
            title: '=',
            handler: equally,
        },
    ]
] 


const layoutProg = [
    [
        {
            type:'func',
            title:'AND',
            handler:empty
        },
        {
            type:'func',
            title:'OR',
            handler:empty
        },
        {
            type:'num',
            title:'D',
            handler:empty
        },
        {
            type:'num',
            title:'E',
            handler:empty
        },
        {
            type:'num',
            title:'F',
            handler:empty
        },
        {
            type:'func',
            title:'AC',
            handler:empty
        },
        {
            type:'func',
            title:'C',
            handler:empty
        },
    ],
    [
        {
            type:'func',
            title:'NOR',
            handler:empty
        },
        {
            type:'func',
            title:'XOR',
            handler:empty
        },
        {
            type:'num',
            title:'A',
            handler:empty
        },
        {
            type:'num',
            title:'B',
            handler:empty
        },
        {
            type:'num',
            title:'C',
            handler:empty
        },
        {
            type:'func',
            title:'RoL',
            handler:empty
        },
        {
            type:'func',
            title:'RoR',
            handler:empty
        },
    ],[
        {
            type:'func',
            title:'<<',
            handler:empty
        },
        {
            type:'func',
            title:'>>',
            handler:empty
        },
        {
            type:'num',
            title:'7',
            handler:empty
        },
        {
            type:'num',
            title:'8',
            handler:empty
        },
        {
            type:'num',
            title:'9',
            handler:empty
        },
        {
            type:'func',
            title:'2s',
            handler:empty
        },
        {
            type:'func',
            title:'1s',
            handler:empty
        },
    ],
]

const basicCalculator = {
    name: 'Basic',
    mode: '',
    settings:[
        ['0', '200px'],
    ],
    width: 400,
    height: 635,
    layout: layoutBasic,
}

const engineerCalculator = {
    name: 'Engineer',
    mode: '',
    settings:[
        ['0', '200px'],
    ],
    width:1000,
    height:635,
    layout: layoutEng,
}

document.querySelector('body').appendChild(createCalculator(basicCalculator));
