//Super Magic Eight Ball

//The original 8 ball had 20 answers, 10 affirmative, 5 non-commital, and 5 negative
//Super Magic Eight ball is both more verbose and scalable, but attempts to have around the same odds.


//Generate result
const result = Math.random() < 0.5;


//Arrays with answer components
const congratsArray = ['Nice!', 'Congrats!', 'Wow!', 'Huzza!', 'Yippee', 'Hurray!', 'Yippee!'];
const sorryArray = ['Ouch!', 'Sorry!', 'Too bad!', 'Oh no!', 'Sad day.', 'Awe!', 'Shoot!', 'Darn!'];
const winArray = [`It's a slam dunk!`, 'From my angle, yes!', 'Seems likely.', '','It is certain.', 'You may rely on it.', 'Outlook good.', 'Most likely', 'Yes - definitely', 'Signs point to yes!'];
const loseArray = [`Don't count on it.`, `Very doubtful.`, `My sources say no.`, `My reply is no`, `Outlook not so good`];
const tryAgainWin = [`Don't get too cocky!`, `Stay the course!`, `Keep it up!`, 'Hope your luck remains!', 'This too shall pass'];
const tryAgainLose = [`Better luck next time!`, `This too shall pass.`, `Keep your head up!`, `Don't quit now!`, `Everyone has a down day! Get some rest!`]
const notSureArray = ['Reply hazy, try again.', 'Ask again later', 'Better not tell you now', 'Cannot predict now.', 'Concentrate and ask again.']

//Create variable for final message
let message;


if (result === true) { //if "win" (50% odds)
//create indexes for winning and try again arrays
    let congratsIndex = Math.floor(Math.random() * congratsArray.length);
    let winIndex = Math.floor(Math.random() * winArray.length);
    let tryAgainIndex = Math.floor(Math.random() * tryAgainWin.length);
    //generate message
    message = congratsArray[congratsIndex] + " " + winArray[winIndex] +  " " + tryAgainWin[tryAgainIndex];
} else { //if "lose" (50% odds)
//create indexes for losing and try again arrays
    let hazy = Math.random() < 0.5;
    if (hazy === false) { //if lose (25% odds)
        let sorryIndex = Math.floor(Math.random() * sorryArray.length);
        let loseIndex = Math.floor(Math.random() * loseArray.length);
        let tryAgainIndex = Math.floor(Math.random() * tryAgainLose.length);
        //generate message
        message = sorryArray[sorryIndex] + " " + loseArray[loseIndex] + " " + tryAgainLose[tryAgainIndex];
    } else { //if non-commital (25%)
        let notSureIndex = Math.floor(Math.random() * notSureArray.length);
        message = notSureArray[notSureIndex]
    }
    

}

console.log(message);
