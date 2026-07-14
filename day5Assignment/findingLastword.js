function lengthOfLastWord(s) {

    
    s = s.trim();  //  Trim the string

    
    let words = s.split(" ");   //  Split the string into words

    
    for (let i = words.length - 1; i >= 0; i--) {     // Find the last word

        if (words[i] !== "") {

            
            let length = words[i].length;   //  Calculate the length

            
            console.log(`The last word is "${words[i]}" with length ${length}.`);//  Print the required output

            
            return length;   // Return the length
        }
    }
}

let s = "   fly me   to   the moon  ";

lengthOfLastWord(s);