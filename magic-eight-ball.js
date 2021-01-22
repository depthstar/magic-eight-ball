//Super Magic Eight Ball

//The original 8 ball had 20 answers, 10 affirmative, 5 non-committal, and 5 negative
//Super Magic Eight ball is both more verbose and scalable, but attempts to have the same odds.





//Arrays with answer components
const winArray = [`It's a slam dunk!`, 'From my angle, yes!', 'Seems likely.', '','It is certain.', 'You may rely on it.', 'Outlook good.', 'Most likely', 'Yes - definitely', 'Signs point to yes!'];
const loseArray = [`Don't count on it.`, `Very doubtful.`, `My sources say no.`, `My reply is no`, `Outlook not so good`];
const notSureArray = ['Reply hazy, try again.', 'Ask again later', 'Better not tell you now', 'Cannot predict now.', 'Concentrate and ask again.'];



//index generating function
const generateRandIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

//game function
const shakeEightBall = () => {
    //Generate win (50%) or "losing" (25% don't know, 25% lose)
    const result = Math.random() < 0.5;

    //Create variable for final message
    let message;

    if (result === true) {  //if "win" (50% odds)
            //create indexes for winning and try again arrays
        let winIndex = generateRandIndex(winArray);
            //generate message
        message = winArray[winIndex];
    } else {    //if "losing" (50% odds)
                //create indexes for losing and try again arrays
        let hazy = Math.random() < 0.5;
        if (hazy === false) { //if lose (25% odds)
        let loseIndex = generateRandIndex(loseArray);
                //generate message
            message = loseArray[loseIndex];
        } else { //if non-committal (25%)
            let notSureIndex = generateRandIndex(notSureArray);
            message = notSureArray[notSureIndex]
    }
    

}
    document.getElementById("answer").innerHTML = message;
}

