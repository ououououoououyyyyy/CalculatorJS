export function createCalculatorUI(modelCalc) {
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
    calculator = setSettings(modelCalc.settings, calculator);
    return calculator;
}

function createBodyCalculator(modelCalc) {
    const boduCalculator = document.createElement('div')
    boduCalculator.setAttribute('id', 'calculator')
    boduCalculator.appendChild(createDisplay());
    boduCalculator.style.maxWidth = modelCalc.width; 
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

function setSettings(setting, calculator) {
    setting.forEach(x => {
        //styleSetting = '1 0 ' + x[1] + 'px'
        calculator.querySelector('[value=\'' + x[0] + '\']').style.flex = x[1];
    })
    return calculator;
}