const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengEl = document.getElementById('leng');
const numberEl = document.getElementById('number');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLeter = "abcdefghıjklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()-+=";

function getLowercase(){
    return lowerLeter[Math.floor(Math.random()*lowerLeter.length)];
}

function getUppercase(){
    return upperLetter[Math.floor(Math.random()*upperLetter.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
}


function generatePassword(){
    let password="";
    const leng = lengEl.value;
    for(let i=0;i<leng;i++){
        const x =generateX();
        password+=x;
    }
    pwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if (lowerEl.checked) {
        xs.push(getLowercase());
    }
    if (upperEl.checked) {
        xs.push(getUppercase());
    }
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    if(xs.length===0){return ""};   
    return xs[Math.floor(Math.random() * xs.length)];

}

generateEl.addEventListener("click",generatePassword);

copyEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = pwEl.innerText;
	
	if(!password) { alert("No Copy"); }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
