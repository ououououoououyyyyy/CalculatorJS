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
    //boduCalculator.style.maxWidth = modelCalc.width+'px';
    boduCalculator.style.width = modelCalc.width;
    boduCalculator.style.height = modelCalc.height;

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
        display.value = CalculationSolver.calculate(display.value);
    } catch (error) {
        console.log("Input wrong equation");
        error.mess
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
            handler: input,
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
    width: '400px',
    height: '635px',
    layout: layoutBasic,
}

const engineerCalculator = {
    name: 'Engineer',
    mode: '',
    settings:[
        ['0', '200px'],
    ],
    width:'1000px',
    height:'635px',
    layout: layoutEng,
}


const calculate = {

}

document.querySelector('body').appendChild(createCalculator(basicCalculator));

class Calculation {
    constructor() {
        this._symbols = {};
        this.defineOperator("!", this.factorial,      "postfix", 6);
        this.defineOperator("^", Math.pow,            "infix",   5, true);
        this.defineOperator("*", this.multiplication, "infix",   4);
        this.defineOperator("/", this.division,       "infix",   4);
        this.defineOperator("+", this.last,           "prefix",  3);
        this.defineOperator("-", this.negation,       "prefix",  3);
        this.defineOperator("+", this.addition,       "infix",   2);
        this.defineOperator("-", this.subtraction,    "infix",   2);
        this.defineOperator(",", Array.of,            "infix",   1);
        this.defineOperator("(", this.last,           "prefix");
        this.defineOperator(")", null,                "postfix");
        this.defineOperator("min", Math.min);
        this.defineOperator("sqrt", Math.sqrt);
    }
    // Method allowing to extend an instance with more operators and functions:
    defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {
        // Store operators keyed by their symbol/name. Some symbols may represent
        // different usages: e.g. "-" can be unary or binary, so they are also
        // keyed by their notation (prefix, infix, postfix, func):
        if (notation === "func") precedence = 0;
        this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
            [notation]: {
                symbol, f, notation, precedence, rightToLeft, 
                argCount: 1 + (notation === "infix")
            },
            symbol,
            regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                + (/\w$/.test(symbol) ? "\\b" : "") // add a break if it's a name 
        });
    }
    last(...a)           { return a[a.length-1] }
    negation(a)          { return -a }
    addition(a, b)       { return a + b }
    subtraction(a, b)    { return a - b }
    multiplication(a, b) { return a * b }
    division(a, b)       { return a / b }
    factorial(a) {
        if (a%1 || !(+a>=0)) return NaN
        if (a > 170) return Infinity;
        let b = 1;
        while (a > 1) b *= a--;
        return b;
    }
    calculate(expression) {
        let match;
        const values = [],
            operators = [this._symbols["("].prefix],
            exec = _ => {
                let op = operators.pop();
                values.push(op.f(...[].concat(...values.splice(-op.argCount))));
                return op.precedence;
            },
            error = msg => {
                let notation = match ? match.index : expression.length;
                return `${msg} at ${notation}:\n${expression}\n${' '.repeat(notation)}^`;
            },
            pattern = new RegExp(
                // Pattern for numbers
                "\\d+(?:\\.\\d+)?|" 
                // ...and patterns for individual operators/function names
                + Object.values(this._symbols)
                        // longer symbols should be listed first
                        .sort( (a, b) => b.symbol.length - a.symbol.length ) 
                        .map( val => val.regSymbol ).join('|')
                + "|(\\S)", "g"
            );
        let afterValue = false;
        pattern.lastIndex = 0; // Reset regular expression object
        do {
            match = pattern.exec(expression);
            const [token, bad] = match || [")", undefined],
                notNumber = this._symbols[token],
                notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
                notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
            // Check for syntax errors:
            if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error");
            if (afterValue) {
                // We either have an infix or postfix operator (they should be mutually exclusive)
                const curr = notNumber.postfix || notNumber.infix;
                do {
                    const prev = operators[operators.length-1];
                    if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break; 
                    // Apply previous operator, since it has precedence over current one
                } while (exec()); // Exit loop after executing an opening parenthesis or function
                afterValue = curr.notation === "postfix";
                if (curr.symbol !== ")") {
                    operators.push(curr);
                    // Postfix always has precedence over any operator that follows after it
                    if (afterValue) exec();
                }
            } else if (notNumber) { // prefix operator or function
                operators.push(notNumber.prefix || notNumber.func);
                if (notNumber.func) { // Require an opening parenthesis
                    match = pattern.exec(expression);
                    if (!match || match[0] !== "(") return error("Function needs parentheses")
                }
            } else { // number
                values.push(+token);
                afterValue = true;
            }
        } while (match && operators.length);
        return operators.length ? error("Missing closing parenthesis")
                : match ? error("Too many closing parentheses")
                : values.pop() // All done!
    }
}
let CalculationSolver = new Calculation();    


let yard = (infix) => {
    let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
    let peek = (a) => a[a.length - 1];
    let stack = [];
  
    return infix
      .split('')
      .reduce((output, token) => {
        if (parseFloat(token)) {
          output.push(token);
        }
  
        if (token in ops) {
          while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
            output.push(stack.pop());
          stack.push(token);
        }
  
        if (token == '(') {
          stack.push(token);
        }
  
        if (token == ')') {
          while (peek(stack) != '(')
            output.push(stack.pop());
          stack.pop();
        }
  
        return output;
      }, [])
      .concat(stack.reverse())
      .join(' ');
  };

  let rpn = (ts, s = []) => {
    ts.split(' ').forEach(t =>
      s.push(t == +t ? t : eval(s.splice(-2,1)[0] + t + s.pop())));
    return s[0];
  }
  
  function calculate1(rpn) {
    var v1, v2;
    var value = null;
    var values = [];

    for (var i = 0; i < rpn.length; i++) {
        value = rpn[i];
        switch (value) {
            case '+':
                v2 = values.pop();
                v1 = values.pop();
                values.push(v1 + v2);
                break;
            case '-':
                v2 = values.pop();
                v1 = values.pop();
                values.push(v1 - v2);
                break;
            case '*':
                v2 = values.pop();
                v1 = values.pop();
                values.push(v1 * v2);
                break;
            case '/':
                v2 = values.pop();
                v1 = values.pop();
                values.push(v1 / v2);
                break;
            default:
                values.push(parseFloat(value));
        }
    }
    return values[0];
}

function getReversePolishNotation(p) {

    var operator = null;
    var operators = [];
    var output = [];
    var value = null;

    for (var i = 0; i < p.length; i++) {
        value = p[i];
        switch (value) {
            case '+':
            case '-':
                if (operators.length) {
                    operator = operators.pop();
                    while (operator && operator !== '(') {
                        output.push(operator);
                        operator = operators.pop();
                    }
                    if (operator) {
                        operators.push(operator);
                    }
                }
                operators.push(value);
                break;
            case '*':
            case '/':
                if (operators.length) {
                    operator = operators.pop();
                    while (operator && operator !== '(' && operator !== '+' && operator !== '-') {
                        output.push(operator);
                        operator = operators.pop();
                    }
                    if (operator) {
                        operators.push(operator);
                    }
                }
                operators.push(value);
                break;
            case '(':
                operators.push(value);
                break;
            case ')':
                operator = operators.pop();
                while (operator !== '(') {
                    if (!operator) {
                        throw "Brackets are inconsistent";
                    }
                    output.push(operator);
                    operator = operators.pop();
                }
                break;
            default:
                output.push(value);
        }
    }
    while (operators.length) {
        output.push(operators.pop());
    }

    return output;
}

function parseString(s) {

    s = s.replace(/\s+/g, '');

    var part = '';
    var parts = [];
    var prev = '';
    var value = '';

    for (var i = 0; i < s.length; i++) {
        value = s[i];
        switch (value) {
            case '+':
            case '*':
            case '/':
            case '(':
            case ')':
                if (part) {
                    parts.push(part);
                    part = '';
                }
                parts.push(value);
                break;
            case '-':
                if (part) {
                    parts.push(part);
                    part = '';
                    parts.push(value);
                } else {
                    if (i === 0
                            || prev === '+'
                            || prev === '-'
                            || prev === '*'
                            || prev === '/'
                            || prev === '('
                            ) {
                        part = value;
                    } else {
                        parts.push(value);
                    }
                }
                break;
            default:
                part = part + value;
        }
        prev = value;
    }
    if (part) {
        parts.push(part);
    }
    return parts;
}