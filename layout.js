const layoutBasic = [
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
            type: 'num zero',
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
        },
    ]
]

const layoutEng = [
    [
        {
            type: 'func',
            title: '(',
            handler: '',
        },
        {
            type: 'func',
            title: ')',
            handler: '',
        },
        {
            type: 'func',
            title: 'mc',
            handler: '',
        },
        {
            type: 'func',
            title: 'm+',
            handler: '',
        },
        {
            type: 'func',
            title: 'm-',
            handler: '',
        },
        {
            type: 'func',
            title: 'mr',
            handler: '',
        },
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
            type: 'func',
            title: '2an',
            handler: '',
        },
        {
            type: 'func',
            title: 'x^2',
            handler: '',
        },
        {
            type: 'func',
            title: 'x^3',
            handler: '',
        },
        {
            type: 'func',
            title: '^',
            handler: '',
        },
        {
            type: 'func',
            title: 'e^x',
            handler: '',
        },
        {
            type: 'func',
            title: '10^X',
            handler: '',
        },
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
            type: 'func',
            title: '1/x',
            handler: '',
        },
        {
            type: 'func',
            title: 'sqrt',
            handler: '',
        },
        {
            type: 'func',
            title: '3sqrt',
            handler: '',
        },
        {
            type: 'func',
            title: 'ysqrt',
            handler: '',
        },
        {
            type: 'func',
            title: 'ln',
            handler: '',
        },
        {
            type: 'func',
            title: 'log',
            handler: '',
        },
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
            type: 'func',
            title: 'x!',
            handler: '',
        },
        {
            type: 'func',
            title: 'sin',
            handler: '',
        },
        {
            type: 'func',
            title: 'cos',
            handler: '',
        },
        {
            type: 'func',
            title: 'tan',
            handler: '',
        },
        {
            type: 'func',
            title: 'e',
            handler: '',
        },
        {
            type: 'func',
            title: 'EE',
            handler: '',
        },
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
            type: 'func',
            title: 'Rad',
            handler: '',
        },
        {
            type: 'func',
            title: 'sinh',
            handler: '',
        },
        {
            type: 'func',
            title: 'cosh',
            handler: '',
        },
        {
            type: 'func',
            title: 'tanh',
            handler: '',
        },
        {
            type: 'func',
            title: 'pi',
            handler: '',
        },
        {
            type: 'func',
            title: 'Rand',
            handler: '',
        },
        {
            type: 'num x2',
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
        },
    ]
]


function render(layout) {
    const calculator = createCalc(layout);
    layout.forEach(column => {
        column.forEach(row => {
            let tempButt = document.createElement('input');
            tempButt.setAttribute('type', 'button');
            tempButt.setAttribute('class', row.type)
            tempButt.setAttribute('value', row.title)
            calculator.appendChild(tempButt)
        })
    });
    document.querySelector('body').appendChild(calculator);
}

function createCalc(layout) {
    const calculator = document.createElement('div')
    calculator.setAttribute('id','calculator')
    calculator.appendChild(createDisplay());
    calculator.style.width = layout[0].length + '00px';
    calculator.style.height = layout.length + parseInt(calculator.style.height) + 'px';
    return calculator;
}

function createDisplay() {
    const display = document.createElement('input')
    display.setAttribute('id', 'display')
    return display;
}

render(layoutEng);