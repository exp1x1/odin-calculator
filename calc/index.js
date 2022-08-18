let screenText = '';
let firstValue;
let value = [];
let oprater = '';
const Kop = '-' || '+' || '/' || 'X' || '%';

const button = document.querySelectorAll('button');
const screen = document.querySelector('.screenText');

button.forEach( butt => {
    butt.addEventListener('click', (e) => {
        
        switch(e.target.innerText) {
            case 'TM':
                console.log('you changed theme');
                break;
            
            case 'AC':
                console.log('you cleared eve');
                break;

            case '←':
                console.log('you cleared last string');
                break;
            
            case '==':
                {   
                            takeOprater();
                            console.log(add(value));
                            break;
                    

                    console.log('you demand answer');
                }
                break;
            
            case '-':
            case '+':
            case '/':
            case 'X':
            case '%':
                takeOprater(e.target.innerText);
                console.log(oprater);
                console.log(value);
                break;
                
            default :
            addScreenText(e.target.innerText)
            console.log(e.target.innerText);

        }



        
    })
})

function addScreenText(text) {
    screenText += text;
    screen.innerText = screenText;
}

function takeOprater(op){
    value.push(screenText);
    screenText = '';
    oprater = op;

}

function add(arr){

  let ans = 0

    arr.forEach( () => {
        ans += e;
    })

    return ans;
}
function substract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}
function modulo(x,y) {
    return x%y;
}