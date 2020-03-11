import { basicCalculator, engineerCalculator } from './layouts.mjs'
import { createCalculatorUI } from "./renderCalculator.mjs";



function selectCalc(e) {
    if (document.querySelector('    #calculator') != null) {
        document.querySelector('#calculator').remove();
    }
    if (e.target.id === 'basic') {
        document.querySelector('body').appendChild(createCalculatorUI(basicCalculator));
    } else if (e.target.id === 'engineer') {
        document.querySelector('body').appendChild(createCalculatorUI(engineerCalculator));
    } else {
        document.querySelector('body').appendChild(createCalculatorUI(layoutProg));
    }
}

selectType.addEventListener('click', selectCalc);

//render(layoutBasic);



document.querySelector('body').appendChild(createCalculatorUI(basicCalculator));



