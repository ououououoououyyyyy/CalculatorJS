const layoutAll = [
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

const t = [
    [
        {
            type: 'num',
            title: '0',
            handler: '',
        }
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

function createCalc(layout){
    const calculator = document.createElement('div')
    calculator.style.display = 'flex';
    calculator.style.flexFlow = 'row wrap';
    calculator.style.width = layout[0].length+'00px';
    calculator.style.height = layout.length+'00px';
    return calculator;
}

function createDisplay(){
    const display = document.createElement('input') 

}

render(layoutAll);