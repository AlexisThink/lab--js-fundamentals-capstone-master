/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with ****.
 *
 *
**/

function censorBadWords(bad, message){
    var badW = bad;
    var text = message.split(" ");
    var finalMessage ="";
    var x;

    for(var i = 0; i < text.length; i++){
        var currentWord = text[i];

        for (var j = 0; j < badW.length; j++){
            var currentBad = badW[j];

            if (currentWord === currentBad){
                text[i] = "****"
            }
        }
        finalMessage += text[i]+" ";
    }
    x = finalMessage.substr(0, finalMessage.length -1);
    return x;
}







var badWords = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']
var badWords2 = ['idiot',  'crap', 'freaking']

var censored1 = censorBadWords(badWords, "mom get the heck in here and bring me a darn sandwich")
var censored2 = censorBadWords(badWords, "here son, your crappy sandwich is on the dang plate")
var censored3 = censorBadWords(badWords2, "your freaking idiot dog left crap on my floor")

console.log("[1] Expected: 'mom get the **** in here and bring me a **** sandwich'");
console.assert( censored1 === "mom get the **** in here and bring me a **** sandwich")
console.log("=====================================================================");
console.log();

console.log("[2] Expected: 'here son, your **** sandwich is on the **** plate'");
console.assert( censored2 === "here son, your **** sandwich is on the **** plate")
console.log("=====================================================================");
console.log();

console.log("[3] Expected: 'your **** **** dog left **** on my floor'");
console.assert( censored3 === "your **** **** dog left **** on my floor")
console.log("=====================================================================");
