function isAnagram(str1, str2) {

    str1 = str1.replace(/\s/g, "").toLowerCase(); //removing apaces and converting lowercase
    str2 = str2.replace(/\s/g, "").toLowerCase();

    return str1.split("").sort().join("") ===
           str2.split("").sort().join("");  //sorting and comparing strings
}

console.log(isAnagram("listen", "silent")); // print the result
console.log(isAnagram("hello", "world"));