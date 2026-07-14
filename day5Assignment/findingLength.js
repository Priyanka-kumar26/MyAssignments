


function lengthofLastWord(s) {

    let words = s.trim().split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}
let s = "Hello World";

console.log(lengthofLastWord(s));