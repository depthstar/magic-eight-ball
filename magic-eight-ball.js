//Magic Eight Ball

//Generate result
const result = Math.random() < 0.5;
console.log(result);


//Arrays with answer components
const congratsArray = ['Nice!', 'Congrats!', 'Wow!'];
const sorryArray = ['Ouch!', 'Sorry!', 'Too bad!'];
const winArray = [`As I see it, yes.`, 'It is certain.', 'You may rely on it.'];
const loseArray = [`Don't count on it.`, `Very doubtful.`, `My sources say no.`];
const tryAgainWin = [`Don't get too cocky!`, `Stay the course!`, `Keep it up!`];
const tryAgainLose = [`Better luck next time!`, `This too shall pass.`, `Keep your head up!`]

//Create variable for final message
let message;


if (result === true) { //if "win"
//create indexes for winning and try again arrays
    congratsIndex = Math.floor(Math.random() * congratsArray.length);
    winIndex = Math.floor(Math.random() * winArray.length);
    tryAgainIndex = Math.floor(Math.random() * tryAgainWin.length);
    //generate message
    message = congratsArray[congratsIndex] + " " + winArray[winIndex] +  " " + tryAgainWin[tryAgainIndex];
} else { //if "lose"
//create indexes for losing and try again arrays
    sorryIndex = Math.floor(Math.random() * sorryArray.length);
    loseIndex = Math.floor(Math.random() * loseArray.length);
    tryAgainIndex = Math.floor(Math.random() * tryAgainLose.length);
    //generate message
    message = sorryArray[sorryIndex] + " " + loseArray[loseIndex] + " " + tryAgainLose[tryAgainIndex];

}

console.log(message);
