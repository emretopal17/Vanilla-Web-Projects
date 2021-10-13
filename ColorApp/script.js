const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","D","E","F"];

const colorName = document.getElementById('color-name');
const changeColorBtn = document.getElementById('change-color');

changeColorBtn.addEventListener("click",() => {
    let hexColor="#";
    for(let i=0; i<6 ; i++){
        hexColor += hex[getRandomNumber()] ;
    }
    colorName.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}