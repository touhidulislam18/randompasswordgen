
const areaSelect = document.querySelector(".pass");
const myPassSpan = document.querySelector(".passspan");

const btns = document.querySelector(".btn");

const genRandomPass = () => {
        const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const spclChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "="];

        let upCaseChar = 2;
        let lowCaseChar = 4;
        let numChar = 2;
        let spclCharCnt = 2;

        let genPass = [];

        //Uppercase Character Selection
        for(let i =0; i < upCaseChar; i++) {
            let rdmNumber = Math.floor(Math.random() * 26);
            genPass.push(upCase[rdmNumber]);
        }

        // console.log(genPass);

        //Lowercase Character Selection
        for(let i =0; i < lowCaseChar; i++) {
            let rdmNumber = Math.floor(Math.random() * 26);
            genPass.push(lowCase[rdmNumber]);
        }

        // console.log(genPass);

        //Number selection
        for(let i =0; i < numChar; i++) {
            let rdmNumber = Math.floor(Math.random() * 10);
            genPass.push(number[rdmNumber]);
        }

        // console.log(genPass);

        //Special Character Selection
        for(let i =0; i < spclCharCnt; i++) {
            let rdmNumber = Math.round(Math.random() * 11);
            genPass.push(spclChar[rdmNumber]);
        }

        //console.log(genPass);

        //Generating 0 to 9 10 unique Randowm numbers 
        let passSeq = [];

        while(passSeq.length < 10){
            let randomNum = Math.floor(Math.random() * 10)
            if(passSeq.indexOf(randomNum) === -1) {
                passSeq.push(randomNum)
            }
        }

        //Creating Final Password
        let newGenPass = [];

        for (let i=0; i< passSeq.length; i++){
            newGenPass.push(genPass[passSeq[i]])
        }

        let finalPass = newGenPass.join('');

        //console.log(newGenPass.join(''))

        return finalPass;

        //areaSelect.innerText = "Your Password is: " + finalPass;

}

function myRandomPass () {
    areaSelect.innerHTML = "Your Password is: " + "<span class='passspan'>" + genRandomPass() + "</span>";
}

btns.addEventListener("click", myRandomPass)


