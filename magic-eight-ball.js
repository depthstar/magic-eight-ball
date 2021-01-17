//Magic Eight Ball

//Generate result
const result = arr => arr[Math.floor(Math.random() * arr.length)];

//Arrays with answer components
const congratsArray = [];
const sorryArray = [];
const winArray = [];
const loseArray = [];
const tryAgainArray = [];

//Create variable for final message
let message;


if (result === 0) { //if "win"
//create indexes for winning and try again arrays
    congratsIndex = Math.floor(Math.random() * congratsArray.length);
    winIndex = Math.floor(Math.random() * winArray.length);
    tryAgainIndex = Math.floor(Math.random() * tryAgainArray.length);
    //generate message
    message = congratsArray[congratsIndex] + winArray[winIndex] + tryAgainArray[tryAgainIndex];
} else { //if "lose"
//create indexes for losing and try again arrays
    sorryIndex = Math.floor(Math.random() * sorryArray.length);
    loseIndex = Math.floor(Math.random() * loseArray.length);
    tryAgainIndex = Math.floor(Math.random() * tryAgainArray.length);
    //generate message
    message = sorryArray[sorryIndex] + loseArray[loseIndex] + tryAgainArray[tryAgainIndex];

}

console.log(message);
